// Internal prototype material map. Do not present as an authorization claim.
export const OFFICIAL_LISTENING_SETS = [
  ...[1,2,3,4].map((test,index)=>({id:index+1,book:1,test,label:`练习${index+1}`,status:"checking",audioPrefix:`/audio/official-listening/set-${String(index+1).padStart(2,'0')}/part-`})),
  ...[1,2,3,4].map((test,index)=>({id:index+5,book:2,test,label:`练习${index+5}`,status:"checking",audioPrefix:`/audio/official-listening/set-${String(index+5).padStart(2,'0')}/part-`})),
  ...[1,2,3,4].map((test,index)=>({id:index+9,book:3,test,label:`练习${index+9}`,status:"ready",audioPrefix:`/audio/official-listening/set-${String(index+9).padStart(2,'0')}/part-`})),
];

export function officialListeningAudio(setId, part) {
  const set=OFFICIAL_LISTENING_SETS.find(item=>item.id===Number(setId));
  return set ? `${set.audioPrefix}${part}.mp3` : '';
}
