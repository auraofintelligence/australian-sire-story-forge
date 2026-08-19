param(
  [switch]$NoOpen
)

$ErrorActionPreference = "Stop"

$storyForgeRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$storyForgePort = 43117
$storyForgeUrl = "http://127.0.0.1:$storyForgePort/"

function Show-StoryForgeError([string]$message) {
  Add-Type -AssemblyName System.Windows.Forms
  [System.Windows.Forms.MessageBox]::Show(
    $message,
    "Australian Sire Story Forge",
    [System.Windows.Forms.MessageBoxButtons]::OK,
    [System.Windows.Forms.MessageBoxIcon]::Error
  ) | Out-Null
}

function Test-StoryForgePage {
  try {
    $response = Invoke-WebRequest -Uri $storyForgeUrl -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -eq 200 -and $response.Content -match "Australian Sire Story Forge"
  } catch {
    return $false
  }
}

function Test-StoryForgePort {
  $client = [System.Net.Sockets.TcpClient]::new()
  try {
    $connection = $client.ConnectAsync("127.0.0.1", $storyForgePort)
    return $connection.Wait(350) -and $client.Connected
  } catch {
    return $false
  } finally {
    $client.Dispose()
  }
}

if (-not (Test-StoryForgePage)) {
  if (Test-StoryForgePort) {
    Show-StoryForgeError "Port $storyForgePort is already being used by another local app. Close that app, then start Story Forge again."
    exit 1
  }

  $pythonCommand = Get-Command py.exe -ErrorAction SilentlyContinue
  $pythonArguments = @("-3", "-m", "http.server", "$storyForgePort", "--bind", "127.0.0.1")
  if (-not $pythonCommand) {
    $pythonCommand = Get-Command python.exe -ErrorAction SilentlyContinue
    $pythonArguments = @("-m", "http.server", "$storyForgePort", "--bind", "127.0.0.1")
  }

  if (-not $pythonCommand) {
    Show-StoryForgeError "Python could not be found on this laptop. Install Python, then start Story Forge again."
    exit 1
  }

  Start-Process -FilePath $pythonCommand.Source -ArgumentList $pythonArguments -WorkingDirectory $storyForgeRoot -WindowStyle Hidden

  $ready = $false
  for ($attempt = 0; $attempt -lt 40; $attempt++) {
    Start-Sleep -Milliseconds 250
    if (Test-StoryForgePage) {
      $ready = $true
      break
    }
  }

  if (-not $ready) {
    Show-StoryForgeError "The local Story Forge preview did not start. Try the desktop icon again, or open the project folder and run START STORY FORGE.cmd."
    exit 1
  }
}

if (-not $NoOpen) {
  Start-Process $storyForgeUrl
}
