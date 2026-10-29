param([string]$File,[int[]]$Ys,[int]$X=900)
Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap($File)
foreach ($y in $Ys) {
  $vals = @()
  for ($dx=-3; $dx -le 3; $dx++) {
    $c = $bmp.GetPixel($X+$dx,$y)
    $vals += ("{0},{1},{2}" -f $c.R,$c.G,$c.B)
  }
  Write-Output ("y={0} x={1}: {2}" -f $y,$X,($vals -join ' | '))
}
$bmp.Dispose()
