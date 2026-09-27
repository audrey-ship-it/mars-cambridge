import { PET_GRAMMAR_TENSES_QUESTIONS } from './petGrammarTensesQuestions'
import { PET_GRAMMAR_WORD_CORE_QUESTIONS } from './petGrammarWordCoreQuestions'
import { PET_GRAMMAR_SENTENCE_QUESTIONS } from './petGrammarSentenceQuestions'
import { PET_GRAMMAR_CLAUSE_QUESTIONS } from './petGrammarClauseQuestions'
import { PET_GRAMMAR_PASSIVE_QUESTIONS } from './petGrammarPassiveQuestions'

/* PET (B1) 语法题库聚合：按 PET 独立单元编号 1–21 组织。 */
export const PET_GRAMMAR_QUESTIONS = {
  ...PET_GRAMMAR_TENSES_QUESTIONS,
  ...PET_GRAMMAR_WORD_CORE_QUESTIONS,
  ...PET_GRAMMAR_SENTENCE_QUESTIONS,
  ...PET_GRAMMAR_CLAUSE_QUESTIONS,
  ...PET_GRAMMAR_PASSIVE_QUESTIONS,
}
