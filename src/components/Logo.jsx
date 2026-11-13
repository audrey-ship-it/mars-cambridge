/* 品牌 logo：轨道火星。星球与外圈颜色取 var(--hl)，随 CET-4 / CET-6 变化（黄 / 薄荷青绿）。 */
export default function Logo({ size = 40, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#1b1c44" />
      <rect x=".75" y=".75" width="46.5" height="46.5" rx="11.3" fill="none" style={{ stroke: 'var(--hl, #ffcd1f)' }} strokeOpacity=".35" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="13" style={{ fill: 'var(--hl, #ffcd1f)' }} />
      <text x="24" y="30" textAnchor="middle" fontSize="17" fontWeight="900" fill="#1b1c44" fontFamily="PingFang SC,Noto Sans CJK SC,sans-serif">火</text>
      <ellipse cx="24" cy="24" rx="21" ry="7" transform="rotate(-24 24 24)" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity=".9" strokeDasharray="46 100" strokeDashoffset="-4" />
      <circle cx="40.5" cy="14.5" r="2.6" fill="#fff" />
    </svg>
  );
}
