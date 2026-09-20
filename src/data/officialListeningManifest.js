// Internal prototype material map. Do not present as an authorization claim.
export const OFFICIAL_LISTENING_SETS = [
  ...[1,2,3,4].map((test,index)=>({id:index+1,book:1,test,label:`练习${index+1}`,readyParts:index<2?[1,2,3,4,5]:[1,2],audioPrefix:`/audio/official-listening/set-${String(index+1).padStart(2,'0')}/part-`})),
  ...[1,2,3,4].map((test,index)=>({id:index+5,book:2,test,label:`练习${index+5}`,readyParts:index===0?[1,2,3,4,5]:index===1?[1,2,3,4,5]:index===2?[1,2,3,4,5]:index===3?[1,2,3,4,5]:[],audioPrefix:`/audio/official-listening/set-${String(index+5).padStart(2,'0')}/part-`})),
  ...[1,2,3,4].map((test,index)=>({id:index+9,book:3,test,label:`练习${index+9}`,readyParts:index===0?[1,2,3,4,5]:index===1?[1,2,3,4,5]:index===2?[1,2,3,4,5]:index===3?[1,2,3,4,5]:[1],audioPrefix:`/audio/official-listening/set-${String(index+9).padStart(2,'0')}/part-`})),
  {id:13,book:'standard-1',test:1,label:'练习13 · 标准版 Test 1',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-1/test-1/part-'},
  {id:14,book:'standard-1',test:2,label:'练习14 · 标准版 Test 2',readyParts:[1,2,3,4,5],audioPrefix:'/audio/standard-listening/book-1/test-2/part-'},
];

export function officialListeningAudio(setId, part) {
  // 第 9 套与 KET 3 Test 1 使用同一组音频，线上统一走一份文件，避免重复发布素材。
  if (Number(setId) === 9) return `/audio/ket/test1/KfS3_PT_audio_track_0${part}.mp3`;
  const set=OFFICIAL_LISTENING_SETS.find(item=>item.id===Number(setId));
  return set ? `${set.audioPrefix}${part}.mp3` : '';
}
