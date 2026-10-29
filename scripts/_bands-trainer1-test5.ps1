Add-Type -AssemblyName System.Drawing
$srcDir = 'd:\workspace_sunny\mars-cambridge\scripts\_trainer1_pages_hi'
$outDir = 'd:\workspace_sunny\mars-cambridge\scripts\_trainer1_bands'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$crops = @(
  @{ page='page-119.png'; out='p119-a.jpg'; x=0; y=300;  w=1786; h=700 },
  @{ page='page-119.png'; out='p119-b.jpg'; x=0; y=900;  w=1786; h=700 },
  @{ page='page-119.png'; out='p119-c.jpg'; x=0; y=1500; w=1786; h=700 },
  @{ page='page-119.png'; out='p119-d.jpg'; x=0; y=2050; w=1786; h=291 },
  @{ page='page-120.png'; out='p120-a.jpg'; x=0; y=200;  w=1786; h=700 },
  @{ page='page-120.png'; out='p120-b.jpg'; x=0; y=800;  w=1786; h=700 },
  @{ page='page-120.png'; out='p120-c.jpg'; x=0; y=1450; w=1786; h=700 }
)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality,88L)
foreach ($c in $crops) {
  $img = [System.Drawing.Image]::FromFile((Join-Path $srcDir $c.page))
  $rect = New-Object System.Drawing.Rectangle($c.x,$c.y,$c.w,$c.h)
  $bmp = New-Object System.Drawing.Bitmap($c.w,$c.h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.DrawImage($img,(New-Object System.Drawing.Rectangle(0,0,$c.w,$c.h)),$rect,[System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()
  $bmp.Save((Join-Path $outDir $c.out),$jpegCodec,$encParams)
  $bmp.Dispose(); $img.Dispose()
  Write-Output "wrote $($c.out)"
}
