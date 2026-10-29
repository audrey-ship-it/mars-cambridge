import fs from 'node:fs';
import { PDFParse } from 'pdf-parse';

const PDF_PATH = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）/1-KET Trainer1（共6套）/【全册+音频】/Trainer《剑桥KET官方模考题精讲精练1》.pdf';

const buf = fs.readFileSync(PDF_PATH);
const parser = new PDFParse({ data: buf });
const text = await parser.getText();

console.log('typeof text:', typeof text);
console.log('text keys:', text && typeof text === 'object' ? Object.keys(text) : null);
console.log('textlen:', text?.length || text?.text?.length || 0);
const flat = typeof text === 'string' ? text : (text?.text || JSON.stringify(text) || '');
console.log('flat textlen:', flat.length);
console.log('first 3000:');
console.log(JSON.stringify(flat.slice(0, 3000)));
