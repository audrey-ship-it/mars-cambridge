# Crop Trainer 1 Test 1 Part 1 three-picture strips from hi-res page renders.
Add-Type -AssemblyName System.Drawing
$srcDir = 'd:\workspace_sunny\mars-cambridge\scripts\_trainer1_pages_hi'
$outDir = 'd:\workspace_sunny\mars-cambridge\public\images\listening\trainer1-test1'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# x1,x2,y1,y2 in hi-res pixels (1786x2341), tuned from scale-2 page geometry
$crops = @(
  @{ page='page-029.png'; out='q1.jpg'; x=200; y=488;  w=1540; h=385 },
  @{ page='page-029.png'; out='q2.jpg'; x=200; y=1045; w=1540; h=335 },
  @{ page='page-029.png'; out='q3.jpg'; x=200; y=1560; w=1540; h=345 },
  @{ page='page-030.png'; out='q4.jpg'; x=140; y=286;  w=1600; h=380 },
  @{ page='page-030.png'; out='q5.jpg'; x=140; y=805;  w=1600; h=385 }
)

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality,92L)

foreach ($c in $crops) {
  $src = Join-Path $srcDir $c.page
  $img = [System.Drawing.Image]::FromFile($src)
  $rect = New-Object System.Drawing.Rectangle($c.x,$c.y,$c.w,$c.h)
  $bmp = New-Object System.Drawing.Bitmap($c.w,$c.h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.DrawImage($img,(New-Object System.Drawing.Rectangle(0,0,$c.w,$c.h)),$rect,[System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()
  $dst = Join-Path $outDir $c.out
  $bmp.Save($dst,$jpegCodec,$encParams)
  $bmp.Dispose(); $img.Dispose()
  Write-Output "wrote $dst"
}
