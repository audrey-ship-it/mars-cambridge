import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ReadingList from './pages/ReadingList.jsx'
import ReadingPractice from './pages/ReadingPractice.jsx'
import { ListeningList, ListeningPractice } from './pages/ListeningPractice.jsx'
import TranslationPractice from './pages/TranslationPractice.jsx'
import WritingPractice from './pages/WritingPractice.jsx'
import { GrammarList, GrammarUnit } from './pages/GrammarUnit.jsx'
import { VocabPage, VocabWrongBook, VocabListPage, TopicStudy, ReadingStudy } from './pages/Vocab.jsx'
import MockExamList from './pages/MockExamList.jsx'
import MockExam from './pages/MockExam.jsx'
import MockWrongBook from './pages/MockWrongBook.jsx'
import Layout from './components/Layout.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

export default function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading" element={<ReadingList />} />
          <Route path="/reading/:setId" element={<ReadingPractice />} />
          <Route path="/listening" element={<ListeningList />} />
          <Route path="/listening/:setId" element={<ListeningPractice />} />
          <Route path="/translation" element={<TranslationPractice />} />
          <Route path="/translation/:setId" element={<TranslationPractice />} />
          <Route path="/writing" element={<WritingPractice />} />
          <Route path="/writing/:setId" element={<WritingPractice />} />
          <Route path="/grammar" element={<GrammarList />} />
          <Route path="/grammar/:unitId" element={<GrammarUnit />} />
          <Route path="/words" element={<VocabPage tab="home" />} />
          <Route path="/words/wrong" element={<VocabWrongBook />} />
          <Route path="/words/must" element={<VocabPage tab="must" />} />
          <Route path="/words/must/:topicId" element={<TopicStudy />} />
          <Route path="/words/reading" element={<VocabPage tab="reading" />} />
          <Route path="/words/reading/:chunkId" element={<ReadingStudy />} />
          <Route path="/words/official" element={<VocabPage tab="official" />} />
          <Route path="/words/:listId" element={<VocabListPage />} />
          <Route path="/mock" element={<MockExamList />} />
          <Route path="/mock/wrong" element={<MockWrongBook />} />
          <Route path="/mock/:setId" element={<MockExam />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  )
}
