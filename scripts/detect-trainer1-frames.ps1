param([string]$File)
Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap($File)
$W = $bmp.Width; $H = $bmp.Height
$rect = New-Object System.Drawing.Rectangle(0,0,$W,$H)
$data = $bmp.LockBits($rect,[System.Drawing.Imaging.ImageLockMode]::ReadOnly,[System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$stride = $data.Stride
$bytes = New-Object byte[] ($stride*$H)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0,$bytes,0,$bytes.Length)
$bmp.UnlockBits($data)
$bmp.Dispose()
# Count dark pixels per row in central x range (skip margins + gutter)
$x0 = [int]($W*0.10); $x1 = [int]($W*0.95)
$rows = @()
for ($y=0; $y -lt $H; $y++) {
  $rowOff = $y*$stride; $cnt = 0
  for ($x=$x0; $x -lt $x1; $x+=2) {
    $i = $rowOff + $x*3
    if ($bytes[$i+2] -lt 100 -and $bytes[$i+1] -lt 100 -and $bytes[$i] -lt 100) { $cnt++ }
  }
  $rows += $cnt
}
# frames: rows with very high dark count (long horizontal rules / box tops)
$max = ($rows | Measure-Object -Maximum).Maximum
$pct = $max / ($x1-$x0)
Write-Output ("max dark row count = {0} ({1:P1} of width)" -f $max,$pct)
$threshold = [int](($x1-$x0)*0.09)
$bands = @()
$inBand = $false; $start = 0
for ($y=0; $y -lt $H; $y++) {
  if ($rows[$y] -ge $threshold) {
    if (-not $inBand) { $inBand=$true; $start=$y }
  } else {
    if ($inBand) { $inBand=$false; if (($y-$start) -ge 1) { $bands += ,@($start,($y-1)) } }
  }
}
if ($inBand) { $bands += ,@($start,($H-1)) }
Write-Output "FILE: $File ($W x $H) threshold=$threshold"
$bands | ForEach-Object { Write-Output ("h-line y {0}-{1} (h={2})" -f $_[0],$_[1],($_[1]-$_[0]+1)) }
Write-Output "--- top peaks (y>210) ---"
for ($y=210; $y -lt $H; $y++) {
  if ($rows[$y] -ge 60) { Write-Output ("y={0} cnt={1}" -f $y,$rows[$y]) }
}
