# Trainer 1 Test 1 口语 Part 2 卡片裁剪（page-042 / 书内 43）
# 裁出五图区域横带，并白色覆盖右上角 TIP 文字框。
Add-Type -AssemblyName System.Drawing

$src = 'd:\workspace_sunny\mars-cambridge\scripts\_trainer1_pages\page-042.png'
$out = 'd:\workspace_sunny\mars-cambridge\public\images\ket\trainer1\test1-speaking.jpg'
$dir = 'd:\workspace_sunny\mars-cambridge\public\images\ket\trainer1'
New-Item -ItemType Directory -Force -Path $dir | Out-Null

Write-Output ("exists: " + (Test-Path $src))

$img = [System.Drawing.Bitmap]::FromFile($src)
Write-Output ("source {0}x{1}" -f $img.Width, $img.Height)

# 横向五图带：x 1.5%-99%，y 27.5%-74.5%
$x = [int]($img.Width * 0.015)
$y = [int]($img.Height * 0.275)
$w = [int]($img.Width * 0.975)
$h = [int]($img.Height * 0.47)

$rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
$bmp = $img.Clone($rect, $img.PixelFormat)
$img.Dispose()
Write-Output ("crop {0}x{1}" -f $bmp.Width, $bmp.Height)

# 覆盖右上角 TIP 文本框
$g = [System.Drawing.Graphics]::FromImage($bmp)
$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$tipX = [int]($bmp.Width * ((0.565 - 0.015) / 0.975))
$tipW = $bmp.Width - $tipX
$tipH = [int]($bmp.Height * ((0.356 - 0.275) / 0.47))
$g.FillRectangle($white, $tipX, 0, $tipW, $tipH)
$g.Dispose()
$white.Dispose()

$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$eps = New-Object System.Drawing.Imaging.EncoderParameters(1)
$eps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]92)
$bmp.Save($out, $enc, $eps)
Write-Output ("saved {0} {1}x{2}" -f $out, $bmp.Width, $bmp.Height)
$bmp.Dispose()
