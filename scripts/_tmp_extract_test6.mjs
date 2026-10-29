// 临时脚本：提取 Trainer 2 Test 6 三个源 PDF 的文本，检查文本层是否存在
import { readFileSync } from 'node:fs';
import { PDFParse } from 'pdf-parse';

const base = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）/2-KET Trainer2（共6套）/1.Trainer2学生用书/Trainer 2 TEST 6';
const files = {
  paper: `${base}/Trainer 2 - Test 6.pdf`,
  script: `${base}/Trainer 2 - Test 6 听力音频文稿.pdf`,
  answer: `${base}/Trainer 2 - Test 6 参考答案.pdf`,
};

for (const [name, path] of Object.entries(files)) {
  try {
    const parser = new PDFParse({ data: new Uint8Array(readFileSync(path)) });
    const result = await parser.getText();
    const text = result.text || '';
    console.log(`\n===== ${name} | 共 ${result.pages?.length ?? '?'} 页 | 文本 ${text.length} 字符 =====`);
    console.log(text.slice(0, 600));
    await parser.destroy();
  } catch (e) {
    console.log(`\n===== ${name} | 提取失败: ${e.message}`);
  }
}
