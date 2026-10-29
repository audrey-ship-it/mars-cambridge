param([int]$From = 1, [int]$To = 74)
$folder = 'D:\workspace_sunny\题库\ket\8-KET刷题材料（真题+模拟题等）\1-KET Trainer1（共6套）\【全册+音频】\Trainer《剑桥KET官方模考题精讲精练1》音频'
$shell = New-Object -ComObject Shell.Application
$dir = $shell.Namespace($folder)
foreach ($n in $From..$To) {
  $name = 'TRACK {0:D2}.mp3' -f $n
  $item = $dir.ParseName($name)
  if ($item) {
    $dur = $dir.GetDetailsOf($item, 27)
    Write-Output ("{0} = {1}" -f $name, $dur)
  }
}
