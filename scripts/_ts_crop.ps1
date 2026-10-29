Add-Type -AssemblyName System.Drawing
$dir = Join-Path $PWD 'scripts\_ts_pages\pet-t2'
$outDir = Join-Path $PWD 'scripts\_ts_pages\pet-t2-crops'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$crops = @(
  @{p='p167';n='a';x=0;y=560;w=600;h=620},
  @{p='p167';n='b';x=590;y=0;w=600;h=920},
  @{p='p168';n='a';x=0;y=0;w=600;h=820},
  @{p='p168';n='b';x=590;y=830;w=600;h=854},
  @{p='p169';n='a';x=0;y=0;w=600;h=860},
  @{p='p169';n='b';x=590;y=0;w=600;h=500},
  @{p='p171';n='a';x=590;y=0;w=600;h=860},
  @{p='p171';n='b';x=590;y=830;w=600;h=854},
  @{p='p172';n='a';x=590;y=200;w=600;h=920},
  @{p='p173';n='a';x=0;y=0;w=600;h=560},
  @{p='p173';n='b';x=0;y=540;w=600;h=580},
  @{p='p173';n='c';x=0;y=1080;w=600;h=604},
  @{p='p173';n='d';x=590;y=0;w=600;h=880},
  @{p='p176';n='a';x=590;y=60;w=600;h=800},
  @{p='p176';n='b';x=590;y=820;w=600;h=864},
  @{p='p177';n='a';x=0;y=1100;w=600;h=584},
  @{p='p177';n='b';x=590;y=400;w=600;h=800},
  @{p='p180';n='a';x=0;y=400;w=600;h=660},
  @{p='p180';n='b';x=590;y=600;w=600;h=520},
  @{p='p180';n='c';x=590;y=1100;w=600;h=584},
  @{p='p182';n='a';x=590;y=60;w=600;h=720},
  @{p='p183';n='a';x=0;y=60;w=600;h=620},
  @{p='p183';n='b';x=0;y=1080;w=600;h=604},
  @{p='p183';n='c';x=590;y=850;w=600;h=600},
  @{p='p185';n='a';x=590;y=900;w=600;h=500},
  @{p='p186';n='a';x=590;y=1380;w=600;h=304},
  @{p='p167';n='c';x=0;y=1100;w=600;h=584},
  @{p='p183';n='d';x=590;y=640;w=600;h=320},
  @{p='p172';n='b';x=0;y=60;w=600;h=800},
  @{p='p172';n='c';x=0;y=840;w=600;h=844},
  @{p='p180';n='d';x=590;y=0;w=600;h=700},
  @{p='p167';n='d';x=0;y=60;w=600;h=560},
  @{p='p167';n='e';x=590;y=850;w=600;h=834},
  @{p='p168';n='c';x=0;y=640;w=600;h=760},
  @{p='p168';n='d';x=590;y=60;w=600;h=700},
  @{p='p169';n='c';x=0;y=830;w=600;h=854},
  @{p='p172';n='d';x=590;y=1050;w=600;h=634},
  @{p='p173';n='e';x=590;y=840;w=600;h=844},
  @{p='p174';n='a';x=0;y=0;w=600;h=660},
  @{p='p177';n='c';x=0;y=60;w=600;h=800},
  @{p='p177';n='d';x=0;y=840;w=600;h=320},
  @{p='p177';n='e';x=590;y=60;w=600;h=600},
  @{p='p178';n='a';x=0;y=0;w=600;h=440},
  @{p='p179';n='a';x=590;y=60;w=600;h=800},
  @{p='p179';n='b';x=590;y=840;w=600;h=844},
  @{p='p180';n='e';x=0;y=60;w=600;h=380},
  @{p='p180';n='f';x=0;y=1000;w=600;h=340},
  @{p='p181';n='a';x=0;y=0;w=600;h=580},
  @{p='p182';n='b';x=590;y=760;w=600;h=924},
  @{p='p183';n='e';x=590;y=60;w=600;h=620},
  @{p='p184';n='a';x=0;y=0;w=600;h=460},
  @{p='p185';n='b';x=590;y=60;w=600;h=800},
  @{p='p185';n='c';x=590;y=1250;w=600;h=434},
  @{p='p186';n='b';x=0;y=60;w=600;h=800},
  @{p='p186';n='c';x=0;y=840;w=600;h=844},
  @{p='p186';n='d';x=590;y=60;w=600;h=800},
  @{p='p187';n='a';x=0;y=0;w=600;h=480},
  @{p='p173';n='f';x=590;y=740;w=600;h=340},
  @{p='p186';n='e';x=590;y=300;w=600;h=760},
  @{p='p186';n='f';x=590;y=1040;w=600;h=440}
)
foreach ($c in $crops) {
  $srcPath = Join-Path $dir ($c.p + '.png')
  $src = [System.Drawing.Bitmap]::FromFile($srcPath)
  $rect = New-Object System.Drawing.Rectangle($c.x, $c.y, $c.w, $c.h)
  $crop = $src.Clone($rect, $src.PixelFormat)
  $outPath = Join-Path $outDir ($c.p + '-' + $c.n + '.png')
  $crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $crop.Dispose(); $src.Dispose()
}
Write-Output ('crops done: ' + $crops.Count)
