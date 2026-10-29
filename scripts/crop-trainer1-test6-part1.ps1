# Crop Trainer 1 Test 6 Part 1 three-picture strips from hi-res page renders (1786x2341).
Add-Type -AssemblyName System.Drawing
$srcDir = 'd:\workspace_sunny\mars-cambridge\scripts\_trainer1_pages_hi'
$outDir = 'd:\workspace_sunny\mars-cambridge\public\images\listening\trainer1-test6'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$crops = @(
  @{ page='page-135.png'; out='q1.jpg'; x=130; y=500;  w=1660; h=470 },
  @{ page='page-135.png'; out='q2.jpg'; x=130; y=1005; w=1660; h=505 },
  @{ page='page-135.png'; out='q3.jpg'; x=130; y=1510; w=1660; h=520 },
  @{ page='page-136.png'; out='q4.jpg'; x=130; y=225;  w=1660; h=490 },
  @{ page='page-136.png'; out='q5.jpg'; x=130; y=725;  w=1660; h=510 }
)

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality,92L)

foreach ($c in $crops) {
  $src = Join-Path $srcDir $c.page
  $img = [System.Drawing.Image]::FromFile($src)
  Write-Output ("{0}: {1} x {2}" -f $c.page, $img.Width, $img.Height)
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
