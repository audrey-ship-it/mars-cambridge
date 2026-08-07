import { Routes, Route } from 'react-router-dom'
import PublicHome from './pages/PublicHome'
import CambridgeApp from './pages/CambridgeApp'
import CambridgeReading from './pages/CambridgeReading'
import CambridgeGrammar from './pages/CambridgeGrammar'
import CambridgeGrammarUnit from './pages/CambridgeGrammarUnit'
import CambridgeListening from './pages/CambridgeListening'
import CambridgeDictation from './pages/CambridgeDictation'
import CambridgeExam, { ExamList } from './pages/CambridgeExam'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicHome />} />
      <Route path="/cambridge" element={<CambridgeApp />} />
      <Route path="/cambridge/:module" element={<CambridgeApp />} />
      <Route path="/cambridge/:module/:part" element={<CambridgeApp />} />
      <Route path="/cambridge-reading" element={<CambridgeReading />} />
      <Route path="/cambridge/grammar" element={<CambridgeGrammar />} />
      <Route path="/cambridge/grammar/:unit" element={<CambridgeGrammarUnit />} />
      <Route path="/cambridge/listening" element={<CambridgeListening />} />
      <Route path="/cambridge/dictation" element={<CambridgeDictation />} />
      <Route path="/cambridge/exams" element={<ExamList />} />
      <Route path="/cambridge/exams/:id" element={<CambridgeExam />} />
    </Routes>
  )
}
