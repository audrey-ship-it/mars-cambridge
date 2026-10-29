# Crop + upscale the Paper 2 Listening key region of Test 6 Key page (book 195) for precise reading.
Add-Type -AssemblyName System.Drawing
$src = 'd:\workspace_sunny\mars-cambridge\scripts\_trainer1_pages\page-194.png'
$out = 'd:\workspace_sunny\mars-cambridge\scripts\_trainer1_pages\key-test6-listen.jpg'
$img = [System.Drawing.Image]::FromFile($src)
Write-Output ("dims: {0} x {1}" -f $img.Width, $img.Height)
$x = [int]($img.Width * 0.38); $y = [int]($img.Height * 0.10)
$w = [int]($img.Width * 0.62); $h = [int]($img.Height * 0.42)
$rect = New-Object System.Drawing.Rectangle($x,$y,$w,$h)
$bmp = New-Object System.Drawing.Bitmap($w,$h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img,(New-Object System.Drawing.Rectangle(0,0,$w,$h)),$rect,[System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$big = New-Object System.Drawing.Bitmap(($w*2),($h*2))
$g2 = [System.Drawing.Graphics]::FromImage($big)
$g2.InterpolationMode = 'HighQualityBicubic'
$g2.DrawImage($bmp, 0, 0, $w*2, $h*2)
$g2.Dispose()
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality,95L)
$big.Save($out,$jpegCodec,$encParams)
$big.Dispose(); $bmp.Dispose(); $img.Dispose()
Write-Output "wrote $out"
