import { Fragment } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import PublicHome from './pages/PublicHome'
import CambridgeApp from './pages/CambridgeApp'
import CambridgeReading from './pages/CambridgeReading'
import CambridgeReadingFCE from './pages/CambridgeReadingFCE'
import CambridgeWritingFCE from './pages/CambridgeWritingFCE'
import CambridgeListeningFCE from './pages/CambridgeListeningFCE'
import CambridgeSpeakingFCE from './pages/CambridgeSpeakingFCE'
import CambridgeWrongBookFCE from './pages/CambridgeWrongBookFCE'
import CambridgeWrongBookMock from './pages/CambridgeWrongBookMock'
import CambridgeGrammar from './pages/CambridgeGrammar'
import CambridgeGrammarUnit from './pages/CambridgeGrammarUnit'
import CambridgeGrammarCategory from './pages/CambridgeGrammarCategory'
import CambridgeGrammarMistakes from './pages/CambridgeGrammarMistakes'
import CambridgeListening from './pages/CambridgeListening'
import CambridgeListeningGap from './pages/CambridgeListeningGap'
import CambridgeWriting from './pages/CambridgeWriting'
import CambridgeSpeaking from './pages/CambridgeSpeaking'
import CambridgeExam, { ExamList } from './pages/CambridgeExam'
import CambridgeSavedWords from './pages/CambridgeSavedWords'
import CambridgeMistakes from './pages/CambridgeMistakes'

// 级别切换落在同一路径时（如 /cambridge/words KET→PET），URL 仅追加 ?_lv= 时间戳。
// 该包装组件据此重新挂载子页面 → 回到新级别的模块中心，而不是停留在旧练习会话。
function RemountOnLevelSwitch({ children }) {
  const [searchParams] = useSearchParams()
  const lv = searchParams.get('_lv') || ''
  return <Fragment key={lv}>{children}</Fragment>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicHome />} />
      <Route path="/cambridge" element={<CambridgeApp />} />
      <Route path="/cambridge/reading" element={<RemountOnLevelSwitch><CambridgeReading /></RemountOnLevelSwitch>} />
      <Route path="/cambridge/reading/fce" element={<CambridgeReadingFCE />} />
      <Route path="/cambridge/mistakes" element={<CambridgeMistakes />} />
      <Route path="/cambridge/words/saved" element={<RemountOnLevelSwitch><CambridgeSavedWords /></RemountOnLevelSwitch>} />
      <Route path="/cambridge/:module" element={<RemountOnLevelSwitch><CambridgeApp /></RemountOnLevelSwitch>} />
      <Route path="/cambridge/:module/:part" element={<RemountOnLevelSwitch><CambridgeApp /></RemountOnLevelSwitch>} />
      <Route path="/cambridge-reading" element={<CambridgeReading />} />
      <Route path="/cambridge/grammar" element={<RemountOnLevelSwitch><CambridgeGrammar /></RemountOnLevelSwitch>} />
      <Route path="/cambridge/grammar/category/:category" element={<CambridgeGrammarCategory />} />
      <Route path="/cambridge/grammar/mistakes" element={<CambridgeGrammarMistakes />} />
      <Route path="/cambridge/grammar/:unit" element={<CambridgeGrammarUnit />} />
      <Route path="/cambridge/listening" element={<RemountOnLevelSwitch><CambridgeListening /></RemountOnLevelSwitch>} />
      <Route path="/cambridge/listening/fce" element={<CambridgeListeningFCE />} />
      <Route path="/cambridge/speaking/fce" element={<CambridgeSpeakingFCE />} />
      <Route path="/cambridge/wrong/fce" element={<CambridgeWrongBookFCE />} />
      <Route path="/cambridge/wrong/ket" element={<CambridgeWrongBookMock level="KET" />} />
      <Route path="/cambridge/wrong/pet" element={<CambridgeWrongBookMock level="PET" />} />
      <Route path="/cambridge/dictation" element={<RemountOnLevelSwitch><CambridgeListeningGap /></RemountOnLevelSwitch>} />
      <Route path="/cambridge/writing" element={<RemountOnLevelSwitch><CambridgeWriting /></RemountOnLevelSwitch>} />
      <Route path="/cambridge/writing/fce" element={<CambridgeWritingFCE />} />
      <Route path="/cambridge/speaking" element={<RemountOnLevelSwitch><CambridgeSpeaking /></RemountOnLevelSwitch>} />
      <Route path="/cambridge/exams" element={<ExamList />} />
      <Route path="/cambridge/exams/:id" element={<CambridgeExam />} />
    </Routes>
  )
}
