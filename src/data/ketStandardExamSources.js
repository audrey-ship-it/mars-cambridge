// Source index for the eight A2 Key standard-version papers. These are source
// locations, not interactive question data: never mark a paper ready from this
// manifest alone. Once verified questions are entered, the same exam record
// should feed both the skill-practice selectors and full mock exam.
const BOOK_PAGES = [
  {
    book: 1,
    answers: [84, 102, 120, 137],
    reading: [8, 24, 40, 56],
    listening: [18, 34, 50, 66],
  },
  {
    book: 2,
    answers: [84, 101, 118, 134],
    reading: [8, 24, 40, 56],
    listening: [18, 34, 50, 66],
  },
]

export const KET_STANDARD_EXAM_SOURCES = BOOK_PAGES.flatMap(({ book, answers, reading, listening }) =>
  [1, 2, 3, 4].map((test, index) => ({
    id: `ket-standard-${book}-test${test}`,
    book,
    test,
    name: `标准版真题 ${(book - 1) * 4 + test}`,
    source: `A2 KET 新题型官方真题 ${book} · Test ${test}`,
    printedPages: {
      readingAndWriting: reading[index],
      listening: listening[index],
      answerKeyAndTranscript: answers[index],
    },
    listeningAudioParts: [1, 2, 3, 4, 5],
    // This remains false until questions, answers, images, and audio are checked.
    verified: false,
  })),
)
