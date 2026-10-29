// Internal prototype material map. Do not present as an authorization claim.
export const OFFICIAL_LISTENING_SETS = [
  ...[1,2,3,4].map((test,index)=>({id:index+1,book:1,test,label:`练习${index+1}`,readyParts:index<2?[1,2,3,4,5]:[1,2],audioPrefix:`/audio/official-listening/set-${String(index+1).padStart(2,'0')}/part-`})),
  ...[1,2,3,4].map((test,index)=>({id:index+5,book:2,test,label:`练习${index+5}`,readyParts:index===0?[1,2,3,4,5]:index===1?[1,2,3,4,5]:index===2?[1,2,3,4,5]:index===3?[1,2,3,4,5]:[],audioPrefix:`/audio/official-listening/set-${String(index+5).padStart(2,'0')}/part-`})),
  ...[1,2,3,4].map((test,index)=>({id:index+9,book:3,test,label:`练习${index+9}`,readyParts:index===0?[1,2,3,4,5]:index===1?[1,2,3,4,5]:index===2?[1,2,3,4,5]:index===3?[1,2,3,4,5]:[1],audioPrefix:`/audio/official-listening/set-${String(index+9).padStart(2,'0')}/part-`})),
  {id:13,book:'standard-1',test:1,label:'练习13 · 标准版 Test 1',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-1/test-1/part-'},
  {id:14,book:'standard-1',test:2,label:'练习14 · 标准版 Test 2',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-1/test-2/part-'},
  {id:15,book:'standard-1',test:3,label:'练习15 · 标准版 Test 3',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-1/test-3/part-'},
  {id:16,book:'standard-1',test:4,label:'练习16 · 标准版 Test 4',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-1/test-4/part-'},
  {id:17,book:'standard-2',test:1,label:'练习17 · 标准版 Test 5',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-2/test-1/part-'},
  {id:18,book:'standard-2',test:2,label:'练习18 · 标准版 Test 6',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-2/test-2/part-'},
  {id:19,book:'standard-2',test:3,label:'练习19 · 标准版 Test 7',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-2/test-3/part-'},
  {id:20,book:'standard-2',test:4,label:'练习20 · 标准版 Test 8',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-2/test-4/part-'},
  // Trainer 1《A2 Key for Schools Trainer 1》Second Edition，6 套 Exam Practice：setId 21-26
  {id:21,book:'trainer-1',test:1,label:'练习21 · Trainer 1 Test 1',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer1/test1/part-'},
  {id:22,book:'trainer-1',test:2,label:'练习22 · Trainer 1 Test 2',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer1/test2/part-'},
  {id:23,book:'trainer-1',test:3,label:'练习23 · Trainer 1 Test 3',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer1/test3/part-'},
  {id:24,book:'trainer-1',test:4,label:'练习24 · Trainer 1 Test 4',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer1/test4/part-'},
  {id:25,book:'trainer-1',test:5,label:'练习25 · Trainer 1 Test 5',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer1/test5/part-'},
  {id:26,book:'trainer-1',test:6,label:'练习26 · Trainer 1 Test 6',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer1/test6/part-'},
  // Trainer 2《A2 Key for Schools Trainer 2》6 套 Exam Practice：setId 27-32
  {id:27,book:'trainer-2',test:1,label:'练习27 · Trainer 2 Test 1',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer2/test1/part-'},
  {id:28,book:'trainer-2',test:2,label:'练习28 · Trainer 2 Test 2',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer2/test2/part-'},
  {id:29,book:'trainer-2',test:3,label:'练习29 · Trainer 2 Test 3',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer2/test3/part-'},
  {id:30,book:'trainer-2',test:4,label:'练习30 · Trainer 2 Test 4',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer2/test4/part-'},
  {id:31,book:'trainer-2',test:5,label:'练习31 · Trainer 2 Test 5',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer2/test5/part-'},
  {id:32,book:'trainer-2',test:6,label:'练习32 · Trainer 2 Test 6',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/trainer2/test6/part-'},
  // Exam Booster 《Cambridge Exam Booster for A2 Key》2020，3 套 Worksheet 听力：setId 33-35
  {id:33,book:'booster',test:1,label:'练习33 · Exam Booster Test 1',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/booster/test1/part-'},
  {id:34,book:'booster',test:2,label:'练习34 · Exam Booster Test 2',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/booster/test2/part-'},
  {id:35,book:'booster',test:3,label:'练习35 · Exam Booster Test 3',readyParts:[1,2,3,4,5],audioPrefix:'/audio/ket/booster/test3/part-'},
];

export function officialListeningAudio(setId, part) {
  // 第 9 套与 KET 3 Test 1 使用同一组音频，线上统一走一份文件，避免重复发布素材。
  if (Number(setId) === 9) return `/audio/ket/test1/KfS3_PT_audio_track_0${part}.mp3`;
  const set=OFFICIAL_LISTENING_SETS.find(item=>item.id===Number(setId));
  return set ? `${set.audioPrefix}${part}.mp3` : '';
}
