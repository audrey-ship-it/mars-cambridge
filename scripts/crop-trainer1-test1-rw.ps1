# Trainer 1 Test 1 阅读写作图片裁剪：
# 1) page-026 (书内27) Part 7 三图故事条 -> public/images/ket/trainer1/test1-story.jpg
# 2) page-042 (书内43) 口语 Part 2 五图卡（排除 TIP 框，上下两段拼接）-> public/images/ket/trainer1/test1-speaking.jpg
Add-Type -AssemblyName System.Drawing
$dir = 'd:\workspace_sunny\mars-cambridge\public\images\ket\trainer1'
New-Item -ItemType Directory -Force -Path $dir | Out-Null | Out-Null
$script:enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

function Crop-Region([string]$src, [double]$x1, [double]$y1, [double]$x2, [double]$y2) {
  $img = [System.Drawing.Bitmap]::FromFile($src)
  $rect = New-Object System.Drawing.Rectangle([int]($img.Width*$x1), [int]($img.Height*$y1), [int]($img.Width*($x2-$x1)), [int]($img.Height*($y2-$y1)))
  $crop = $img.Clone($rect, $img.PixelFormat)
  $img.Dispose()
  return $crop
}

function Save-Jpeg($bmp, [string]$out) {
  $eps = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $eps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]92)
  $bmp.Save($out, $script:enc, $eps)
  Write-Output ("saved {0} {1}x{2}" -f $out, $bmp.Width, $bmp.Height)
  $bmp.Dispose()
}

# 1) Part 7 故事三图条（书内 27 页图片区域）
$pages = 'd:\workspace_sunny\mars-cambridge\scripts\_trainer1_pages'
Save-Jpeg (Crop-Region (Join-Path $pages 'page-026.png') 0.03 0.60 0.97 0.92) (Join-Path $dir 'test1-story.jpg')

# 2) 口语 Part 2 卡片：上排（电影院/商店/公交站）+ 下排（博物馆/网球），右侧 TIP 框排除
$src42 = Join-Path $pages 'page-042.png'
$a = Crop-Region $src42 0.02 0.29 0.79 0.66
$b = Crop-Region $src42 0.02 0.61 0.55 0.95
$canvas = New-Object System.Drawing.Bitmap($a.Width, ($a.Height + $b.Height + 8))
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.Clear([System.Drawing.Color]::White)
$g.DrawImage($a, 0, 0)
$g.DrawImage($b, 0, ($a.Height + 8))
$g.Dispose()
$a.Dispose(); $b.Dispose()
Save-Jpeg $canvas (Join-Path $dir 'test1-speaking.jpg')
