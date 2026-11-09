/* 双色线条图标：深蓝线条 + 错位的点缀色块（var(--hl)，CET-4 黄 / CET-6 薄荷青绿） */
const SHAPES = {
  clock: (
    <>
      <circle cx="30" cy="33" r="17" style={{ fill: 'var(--hl)', stroke: 'none' }} />
      <circle cx="27" cy="29" r="16" />
      <path d="M27 20v9l6 4" />
    </>
  ),
  check: (
    <>
      <rect x="17" y="17" width="30" height="34" rx="6" style={{ fill: 'var(--hl)', stroke: 'none' }} />
      <rect x="11" y="11" width="30" height="34" rx="6" />
      <path d="M19 28l6 6 10-12" />
    </>
  ),
  headphones: (
    <>
      <path
        d="M10 36h7v14h-5a2 2 0 0 1-2-2zM46 36h-7v14h5a2 2 0 0 0 2-2z"
        transform="translate(3 3)"
        style={{ fill: 'var(--hl)', stroke: 'none' }}
      />
      <path d="M10 34v-6a16 16 0 0 1 32 0v6" />
      <path d="M10 30h6v13h-4a2 2 0 0 1-2-2zM42 30h-6v13h4a2 2 0 0 0 2-2z" />
    </>
  ),
  pen: (
    <>
      <path d="M13 44l2-9 24-24 7 7-24 24z" transform="translate(4 5)" style={{ fill: 'var(--hl)', stroke: 'none' }} />
      <path d="M11 41l2-9L36 9a4 4 0 0 1 6 6L19 38zM31 14l6 6" />
    </>
  ),
}

export default function FeatureIcon({ name, className = 'w-14 h-14' }) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      stroke="var(--accent-deep)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {SHAPES[name]}
    </svg>
  )
}
