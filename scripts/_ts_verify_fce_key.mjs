import { fceStandardListeningTests as FCE_STANDARD_LISTENING_TESTS } from '../src/data/fceStandardListeningTests.js';

const L = 'ABCDEFGH';
const norm = (s) => String(s).toLowerCase().replace(/\s+/g, '').replace(/[(),\-.']/g, '');
const variants = (k) => k.split('/').flatMap(v => [norm(v), norm(v.replace(/\([^)]*\)/g, ''))]).filter(Boolean);

const KEYS = {
  1: {
    p1: 'BBCBCABB', p3: 'EHBGD', p4: 'BACABBC',
    p2: ['geography', '(street) markets', 'magazine', 'horses', 'winter', 'motor(-)bike', 'fishing', 'March', 'Images', 'farming'],
  },
  2: {
    p1: 'BCABCBBC', p3: 'DBGCE', p4: 'CBBACBA',
    p2: ['teacher', '3,000/three thousand', 'travel writer', 'airports', 'passengers', 'science', 'controls', 'monitor', 'report', 'night'],
  },
  3: {
    p1: 'AABAAABB', p3: 'HEFCG', p4: 'BACBABA',
    p2: ['May', 'safety', 'helmet', 'seats', '700/seven hundred', 'gloves', 'calm', 'silver', 'feather', 'T-shirt'],
  },
  4: {
    p1: 'AACCBBBA', p3: 'DGBEF', p4: 'BAACBCB',
    p2: ['horse(-)riding', 'starter', '(green) badge(s)', '35/thirty-five (pounds)', 'gym', '(sports)(-)bag', 'first(-)team', 'notice(-)board', 'party', 'discount'],
  },
};
const KEYS_B4 = {
  1: {
    p1: 'ABAACBAC', p3: 'EFBHD', p4: 'BCAACAC',
    p2: ['International Conservation', 'donkey', 'Medicine Garden', 'storms', 'bicycle/bike', 'growth', 'shelters', 'the (ancient/old) villages', 'terrace', 'sun(-)cream'],
  },
  2: {
    p1: 'BCCBACAB', p3: 'FHEAG', p4: 'BACABCB',
    p2: ['February', 'transport', 'Dreams', 'shapes', 'music', 'Box', 'ropes', 'water', '(rain) curtain', 'sunrise/dawn'],
  },
  3: {
    p1: 'ACCBAACB', p3: 'GCBHA', p4: 'ACBABBB',
    p2: ['exhibition', 'camper/camping van', 'morning', 'parachute jump', 'diamond ring', 'small island', 'fuel/gas/petrol', 'mosquito net', 'poem', 'tent'],
  },
  4: {
    p1: 'BAACABAB', p3: 'ECGDB', p4: 'CAACCCB',
    p2: ['research assistant/researcher', 'cleaning (up)', 'heavy metal', '35,000/thirty-five thousand', 'diversity', '(live) poetry', 'inspiration', 'network', 'agents', 'admin(istration)/administrative'],
  },
};
const KEYS2 = {
  1: {
    p1: 'ACCBCABA', p3: 'DHFGC', p4: 'ACCBABC',
    p2: ['(local) charity', 'industry', 'lawyer', 'chocolate', 'passport', 'concert', '(gold) medal (each)', 'problem-solving/solving problems', 'social worker', 'information pack'],
  },
  2: {
    p1: 'ACBCAABB', p3: 'CAGDF', p4: 'CBBAACB',
    p2: ['cousin', 'roof', 'sport(s)', 'singer', 'violins', 'magazine', 'museum', 'typing', 'canteen', 'radio station'],
  },
  3: {
    p1: 'ACCABBAA', p3: 'EHCFB', p4: 'AACBBAA',
    p2: ['plastic', 'rules', 'field', 'stand', 'shoulders', 'tree', 'view', 'TV/television series', 'scoring/keeping (a) score', 'parents'],
  },
  4: {
    p1: 'CCACBAAB', p3: 'EHACF', p4: 'BBACABA',
    p2: ['engineer', 'skis', 'loneliness/lonelyness', 'water', 'weight', 'toes', 'rest', 'half(-)way', 'relief', 'alien'],
  },
};

const KEYS_B3 = {
  1: {
    p1: 'AABBBCBC', p3: 'GFAHC', p4: 'CACCCBA',
    p2: ['father', 'humour/humor', 'plants', '(physical) size', 'panic', '(plastic) bags', 'knife', 'river', 'fire (without matches)', '(being good at) time management'],
  },
  2: {
    p1: 'BAACABCC', p3: 'CHFBE', p4: 'ACBABAB',
    p2: ['uncle', 'main(-)land', 'marine science', 'swim', '(the) transport', 'night', 'gentle', 'heat', 'concentration', 'returners'],
  },
  3: {
    p1: 'CBCBBCAA', p3: 'CFHBE', p4: 'BABAACB',
    p2: ['(a) location researcher', '(flexible) (work/working) hours/(flexibility of) (the) (work/working) hours', 'castle', '(an) ice(-)cream/ice(-)cream(s)', '(some) farmers', 'database', 'movie(-)map', 'leaflets', 'privacy', 'work placement (programme/program)'],
  },
  4: {
    p1: 'CBABBCCC', p3: 'CHBFD', p4: 'CBACBCA',
    p2: ['business (studies)', '(natural) green(-)house', 'gallery', 'bud(s)', 'mountains', 'sandwiches', 'stream', 'winter jackets', 'nose(-)ring', 'carrots'],
  },
};
const BOOK_KEYS = [KEYS, KEYS2, KEYS_B3, KEYS_B4];

// 数据文件导出形态探测
const mod = FCE_STANDARD_LISTENING_TESTS;
const arr = Array.isArray(mod) ? mod : (mod.tests || mod.default || null);
if (!arr) { console.error('EXPORT SHAPE UNKNOWN:', Object.keys(mod)); process.exit(1); }
console.log('sets:', arr.length, '| ids:', arr.map(t => t.meta?.id).join(' '));

let bad = 0, checked = 0;
for (let b = 0; b < 4; b++) {
  const KEYS_ = BOOK_KEYS[b];
  if (!KEYS_) { console.log(`book ${b + 1}: Key 未亲核，跳过`); continue; }
  for (let t = 0; t < 4; t++) {
    const set = arr[b * 4 + t];
    const K = KEYS_[t + 1];
    const P = set.parts;
    for (const [pn, keyStr] of [['1', K.p1], ['3', K.p3], ['4', K.p4]]) {
      const items = P[pn].items;
      if (items.length !== keyStr.length) { console.log(`册${b + 1} T${t + 1} P${pn}: items=${items.length} != key=${keyStr.length}`); bad++; continue; }
      items.forEach((it, i) => {
        const got = typeof it.answer === 'number' ? (L[it.answer] ?? '?') : String(it.answer ?? '?').trim().toUpperCase();
        if (got !== keyStr[i]) { console.log(`册${b + 1} T${t + 1} P${pn} Q${i + 1}: data=${got} key=${keyStr[i]}`); bad++; }
      });
    }
    const p2items = P['2'].items;
    if (p2items.length !== 10) { console.log(`册${b + 1} T${t + 1} P2: items=${p2items.length} != 10`); bad++; }
    p2items.forEach((it, i) => {
      const raws = Array.isArray(it.answer) ? it.answer : [it.answer];
      const vs = variants(K.p2[i]);
      if (!raws.some(r => vs.includes(norm(r)))) { console.log(`册${b + 1} T${t + 1} P2 Q${i + 9}: data=${JSON.stringify(raws)} key=${K.p2[i]}`); bad++; }
    });
    checked += 1;
  }
}
console.log(bad === 0 ? `ALL ANSWERS MATCH OFFICIAL KEY (${checked} sets × 30 q)` : 'MISMATCHES: ' + bad);
