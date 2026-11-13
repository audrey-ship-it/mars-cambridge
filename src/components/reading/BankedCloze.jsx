// 选词填空（Section A）：短文挖空，从 A–O 15 个选项中选。
// passage 中空位用 {{26}} {{27}} … {{35}} 占位，渲染为行内下拉框。
// submitted 为 true 时按答案高亮对/错（绿对红错），并禁用作答。

export default function BankedCloze({ section, answers, onChange, submitted }) {
  const parts = section.passage.split(/\{\{(\d+)\}\}/)
  // parts 交替为 [文本, 空号, 文本, 空号, ...]
  const nodes = parts.map((part, i) => {
    if (i % 2 === 1) {
      const blankNo = parseInt(part, 10)
      const blankIdx = (i - 1) / 2 // 0-based 索引到 section.answers
      const correct = section.answers[blankIdx]
      const userAns = answers[blankNo] || ''
      const showResult = submitted && correct
      const isRight = showResult && userAns === correct
      const isWrong = showResult && userAns && userAns !== correct
      return (
        <span key={i} className="inline-flex items-center align-middle">
          <select
            className={
              'inline-block mx-1 rounded-lg border text-lg font-bold px-1.5 py-0.5 align-middle ' +
              (isRight
                ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                : isWrong
                  ? 'bg-red-50 border-red-400 text-red-700'
                  : 'border-gray-300 bg-[var(--accent-soft)] text-[var(--accent)]')
            }
            value={userAns}
            onChange={(e) => onChange(blankNo, e.target.value)}
            disabled={submitted}
          >
            <option value="">{blankNo}</option>
            {[...section.options].sort((a, b) => a.letter.localeCompare(b.letter)).map((opt) => (
              <option key={opt.letter} value={opt.letter}>
                {opt.letter}. {opt.word}
              </option>
            ))}
          </select>
          {isWrong && (
            <span className="text-base font-bold text-green-700 ml-0.5">→ {correct}</span>
          )}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })

  return (
    <div>
      <div className="rounded-xl bg-white border border-gray-200 border-t-[6px] border-t-[var(--hl)] p-3 mb-4">
        <div className="inline-block rounded-md bg-[var(--hl)] text-[var(--accent-deep)] text-base font-bold px-2.5 py-0.5 mb-2">词汇选项</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-lg">
          {[...section.options].sort((a, b) => a.letter.localeCompare(b.letter)).map((opt) => (
            <div key={opt.letter} className="text-gray-700">
              <span className="font-bold">{opt.letter}.</span> {opt.word}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-white border border-gray-200 p-4 text-[21px] leading-[1.7]">
        {nodes}
      </div>
    </div>
  )
}
