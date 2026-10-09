import { FCE_GRAMMAR_TENSES_QUESTIONS } from './fceGrammarTensesQuestions'
import { FCE_GRAMMAR_MODAL_QUESTIONS } from './fceGrammarModalQuestions'
import { FCE_GRAMMAR_CONDITIONALS_QUESTIONS } from './fceGrammarConditionalsQuestions'
import { FCE_GRAMMAR_CLAUSES_QUESTIONS } from './fceGrammarClausesQuestions'
import { FCE_GRAMMAR_PASSIVE_QUESTIONS } from './fceGrammarPassiveQuestions'

/* FCE (B2) 语法题库聚合：按 FCE 独立单元编号 1–20 组织。
   内容为原创 B2 教学编排，不含真题数据。 */
export const FCE_GRAMMAR_QUESTIONS = {
  ...FCE_GRAMMAR_TENSES_QUESTIONS,
  ...FCE_GRAMMAR_MODAL_QUESTIONS,
  ...FCE_GRAMMAR_CONDITIONALS_QUESTIONS,
  ...FCE_GRAMMAR_CLAUSES_QUESTIONS,
  ...FCE_GRAMMAR_PASSIVE_QUESTIONS,
}
