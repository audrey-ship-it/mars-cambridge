/* 统一线性图标（24px 网格、1.75 描边、currentColor），替代 emoji 作导航与模块图标 */
const PATHS = {
  home: 'M3 11.5 12 4l9 7.5M5.5 10v10h13V10M10 20v-5h4v5',
  reading: 'M2.5 5.5c3.2-1.2 6.2-.9 9.5 1 3.3-1.9 6.3-2.2 9.5-1V19c-3.2-1.2-6.2-.9-9.5 1-3.3-1.9-6.3-2.2-9.5-1zM12 6.5V20',
  listening: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5.5A1.5 1.5 0 0 1 4 18.5zM20 14h-3v6h1.5a1.5 1.5 0 0 0 1.5-1.5z',
  translation: 'M4 5h9M8.5 3v2M6 5c.5 3 2.5 6 6 8M12 5c-.5 3-3 6.5-7 8.5M13 21l4-9 4 9M14.5 18h5',
  writing: 'M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19zM14.5 6.5l3 3',
  grammar: 'M4 6h16M4 12h9M4 18h6M15.5 17.5l2 2 4-4.5',
  words: 'M6.5 3h11a.5.5 0 0 1 .5.5V21l-6-4-6 4V3.5a.5.5 0 0 1 .5-.5zM9.5 8h5',
  mock: 'M9 4h6v3H9zM7 5.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-1M9 14.5l2 2 4-4.5',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  clock: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
  layers: 'M12 3 3 8l9 5 9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5',
  calendar: 'M5 5h14v15H5zM5 9.5h14M9 3v4M15 3v4',
}

export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.75 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
