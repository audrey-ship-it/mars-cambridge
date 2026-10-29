/* ── London Skyline SVG ── 竖版全屏构图（用于 PublicHome 主视觉）── */
export function LondonSkyline({ className = '' }) {
  const BG = '#064e3b'
  const spokes = [0,30,60,90,120,150,180,210,240,270,300,330]
  return (
    <svg viewBox="0 0 560 780" xmlns="http://www.w3.org/2000/svg"
      className={className} preserveAspectRatio="xMidYMax slice">


      {/* ═══ 星星（顶部点缀）═══ */}
      {[[55,30],[130,18],[220,42],[310,14],[400,28],[480,50],[60,72],[195,80],[350,66],[500,58],[90,105],[280,98]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={i%3===0?2.5:1.8} fill="white" opacity={i%2===0?0.45:0.28}/>
      ))}

      {/* ═══ BIG BEN / ELIZABETH TOWER ═══ */}
      {/* 底座 */}
      <rect x="232" y="668" width="96" height="42" fill="white"/>
      <rect x="220" y="698" width="120" height="22" fill="white"/>
      {/* 主轴 */}
      <rect x="252" y="278" width="56" height="390" fill="white"/>
      {/* 钟楼层（更宽）*/}
      <rect x="228" y="420" width="104" height="190" fill="white"/>
      {/* 钟楼角小塔 */}
      <polygon points="228,420 232,406 236,420" fill="white"/>
      <polygon points="324,420 328,406 332,420" fill="white"/>
      <polygon points="228,608 232,596 236,608" fill="white"/>
      <polygon points="324,608 328,596 332,608" fill="white"/>
      {/* 钟面（镂空）*/}
      <circle cx="280" cy="515" r="44" fill={BG}/>
      <circle cx="280" cy="515" r="44" fill="none" stroke="white" strokeWidth="6"/>
      <line x1="280" y1="515" x2="280" y2="477" stroke="white" strokeWidth="5"/>
      <line x1="280" y1="515" x2="312" y2="515" stroke="white" strokeWidth="4"/>
      {/* 灯笼层 */}
      <rect x="246" y="280" width="68" height="142" fill="white"/>
      {/* 尖塔 */}
      <polygon points="246,284 280,148 314,284" fill="white"/>
      {/* 顶端小球 */}
      <circle cx="280" cy="144" r="6" fill="white"/>

      {/* ═══ 伦敦眼（左侧中部）═══ */}
      <polygon points="68,752 86,630 96,630 74,752" fill="white"/>
      <polygon points="128,752 118,630 128,630 138,752" fill="white"/>
      <rect x="72" y="746" width="30" height="10" rx="3" fill="white"/>
      <circle cx="100" cy="618" r="110" fill="none" stroke="white" strokeWidth="7"/>
      {spokes.map(deg => {
        const r = deg * Math.PI / 180
        return <line key={deg} x1="100" y1="618"
          x2={+(100 + 102 * Math.sin(r)).toFixed(1)}
          y2={+(618 - 102 * Math.cos(r)).toFixed(1)}
          stroke="white" strokeWidth="2"/>
      })}
      <circle cx="100" cy="618" r="13" fill="white"/>
      {spokes.map(deg => {
        const r = deg * Math.PI / 180
        return <rect key={deg}
          x={+(100 + 108 * Math.sin(r) - 7).toFixed(1)}
          y={+(618 - 108 * Math.cos(r) - 5).toFixed(1)}
          width="14" height="10" rx="3" fill="white"/>
      })}

      {/* ═══ 国会大厦（右侧）═══ */}
      <rect x="336" y="626" width="210" height="94" fill="white"/>
      {Array.from({length:15}, (_, i) => {
        const x = 338 + i * 14
        return <polygon key={i} points={`${x},626 ${x+7},608 ${x+14},626`} fill="white"/>
      })}
      {/* 维多利亚塔 */}
      <rect x="480" y="510" width="66" height="116" fill="white"/>
      <polygon points="480,510 513,470 546,510" fill="white"/>
      <polygon points="499,470 513,448 527,470" fill="white"/>
      <rect x="505" y="444" width="16" height="8" fill="white"/>
      {[488,506].map(wx => [524,546,566].map(wy =>
        <rect key={`${wx}-${wy}`} x={wx} y={wy} width="11" height="15" rx="3" fill={BG}/>
      ))}

      {/* ═══ 中间小楼群 ═══ */}
      <rect x="185" y="660" width="30" height="60" fill="white"/>
      <polygon points="185,660 200,642 215,660" fill="white"/>
      <rect x="218" y="672" width="22" height="48" fill="white"/>

      {/* ═══ 塔桥（右下角，部分入镜）═══ */}
      {/* 左塔 */}
      <rect x="388" y="490" width="56" height="230" fill="white"/>
      <polygon points="388,490 416,450 444,490" fill="white"/>
      <polygon points="403,450 416,424 429,450" fill="white"/>
      <polygon points="388,490 392,476 396,490" fill="white"/>
      <polygon points="436,490 440,476 444,490" fill="white"/>
      <rect x="397" y="506" width="13" height="18" rx="4" fill={BG}/>
      <rect x="416" y="506" width="13" height="18" rx="4" fill={BG}/>
      <rect x="397" y="534" width="13" height="18" rx="4" fill={BG}/>
      <rect x="416" y="534" width="13" height="18" rx="4" fill={BG}/>
      {/* 桥面 */}
      <rect x="340" y="620" width="220" height="14" fill="white"/>
      {/* 悬索（左侧）*/}
      <line x1="416" y1="424" x2="340" y2="620" stroke="white" strokeWidth="3"/>
      <line x1="416" y1="424" x2="390" y2="620" stroke="white" strokeWidth="3"/>
      {/* 高架人行道 */}
      <rect x="442" y="468" width="70" height="10" fill="white"/>

      {/* ═══ 夏德大厦（右侧）═══ */}
      <polygon points="490,720 514,720 542,580 526,200 510,580" fill="white"/>
      <line x1="526" y1="200" x2="510" y2="720" stroke={BG} strokeWidth="2"/>

      {/* ═══ 泰晤士河 ═══ */}
      <rect x="0" y="752" width="560" height="28" fill="white" opacity="0.1"/>
      <path d="M0,754 Q70,746 140,754 Q210,762 280,754 Q350,746 420,754 Q490,762 560,754"
        fill="none" stroke="white" strokeWidth="3" opacity="0.3"/>
      <path d="M0,766 Q140,758 280,766 Q420,774 560,766"
        fill="none" stroke="white" strokeWidth="1.5" opacity="0.18"/>
    </svg>
  )
}
