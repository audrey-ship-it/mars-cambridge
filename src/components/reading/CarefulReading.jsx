// 仔细阅读（Section C）：2 篇文章，每篇 5 题四选一。
// 桌面端左右分栏：文章在左，题目在右（粘性 + 独立滚动）；窄屏退回上下堆叠。
// submitted 为 true 时按答案高亮对/错（正确选项绿、错误选择红），并禁用作答。

export default function CarefulReading({ passage, answers, onChange, submitted }) {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-4">
      {/* 文章列 */}
      <div className="rounded-xl bg-white border border-gray-200 p-4 text-[21px] leading-[1.7] mb-4 lg:mb-0 lg:col-span-7 whitespace-pre-wrap">
        {passage.passage}
      </div>

      {/* 题目列：桌面端粘性 + 独立滚动 */}
      <div className="space-y-4 lg:col-span-5 lg:sticky lg:top-[84px] lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto">
        {passage.questions.map((q) => (
          <div key={q.n} className="rounded-xl bg-white border border-gray-200 border-t-[6px] border-t-[var(--hl)] p-4">
            <div className="text-[21px] mb-2">
              <span className="font-bold text-gray-500 mr-1.5">{q.n}.</span>
              {q.text}
            </div>
            <div className="space-y-1.5">
              {[...q.options].sort((a, b) => a.letter.localeCompare(b.letter)).map((opt) => {
                const letter = opt.letter
                const checked = answers[q.n] === letter
                const showRight = submitted && q.answer
                const shouldHighlightRight = showRight && letter === q.answer
                return (
                  <label
                    key={letter}
                    className={
                      'flex items-start gap-2 rounded-lg px-2 py-1.5 text-[21px] cursor-pointer transition border ' +
                      (showRight
                        ? shouldHighlightRight
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                          : checked
                            ? 'bg-red-50 border-red-300 text-red-700'
                            : 'border-transparent text-gray-600'
                        : checked
                          ? 'bg-[var(--accent-soft)] border-[var(--accent-border)]'
                          : 'border-transparent hover:bg-gray-50')
                    }
                  >
                    <input
                      type="radio"
                      name={`careful-${q.n}`}
                      checked={checked}
                      onChange={() => onChange(q.n, letter)}
                      disabled={submitted}
                      className="mt-1 shrink-0"
                    />
                    <span>
                      <span className="font-bold mr-1">{letter})</span>
                      {opt.text}
                    </span>
                  </label>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
