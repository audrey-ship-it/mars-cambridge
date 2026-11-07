// 长篇阅读（Section B）：10 题，每题选一个段落字母。
// 桌面端左右分栏：题目在左（粘性、独立滚动），文章在右；窄屏退回上下堆叠。
// submitted 为 true 时按答案高亮对/错（绿对红错），并禁用作答。

export default function ParagraphMatching({ section, answers, onChange, submitted }) {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-4">
      {/* 题目列：桌面端粘性 + 独立滚动 */}
      <div className="rounded-xl bg-white border border-gray-200 p-4 mb-4 lg:mb-0 lg:col-span-5 lg:sticky lg:top-[84px] lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto">
        <div className="text-base font-bold text-gray-500 mb-3">题目（选择对应段落）</div>
        <div className="space-y-2">
          {section.questions.map((q, idx) => {
            const correct = section.answers[idx]
            const userAns = answers[q.n] || ''
            const showResult = submitted && correct
            const isRight = showResult && userAns === correct
            const isWrong = showResult && userAns && userAns !== correct
            return (
              <div key={q.n} className="flex items-start gap-2 text-[21px]">
                <span className="font-bold text-gray-500 shrink-0 w-8">{q.n}.</span>
                <div className="flex-1">{q.text}</div>
                <div className="flex items-center gap-1 shrink-0">
                  <select
                    className={
                      'rounded-lg border text-lg font-bold px-1.5 py-1 ' +
                      (isRight
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                        : isWrong
                          ? 'bg-red-50 border-red-400 text-red-700'
                          : 'border-gray-300 bg-blue-50 text-blue-700')
                    }
                    value={userAns}
                    onChange={(e) => onChange(q.n, e.target.value)}
                    disabled={submitted}
                  >
                    <option value="">段落</option>
                    {section.paragraphs.map((p) => (
                      <option key={p.label} value={p.label}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                  {isWrong && (
                    <span className="text-base font-bold text-emerald-600">→ {correct}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 文章列 */}
      <div className="space-y-3 lg:col-span-7">
        {section.paragraphs.map((p) => (
          <div key={p.label} className="rounded-xl bg-white border border-gray-200 p-4 text-[21px] leading-[1.7]">
            <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-base font-bold mr-2">
              {p.label}
            </span>
            {p.text}
          </div>
        ))}
      </div>
    </div>
  )
}
