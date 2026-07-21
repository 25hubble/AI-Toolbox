/* reserialize_data.js — data.js 에 영어(en) 데이터를 붙여 다시 저장한다.
 * - pipeline/work/en/<entryId>.json 이 있으면 해당 엔트리에 en 으로 부착
 * - 카테고리 desc / meta subtitle 영어도 부착 (아래 하드코딩 맵)
 * - add_entry.py 호환 형식 유지: 최상위 키는 unquoted, `entries: [` 리터럴 보존
 * usage: node pipeline/reserialize_data.js
 */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT, 'data.js'));
const D = global.window.DASHBOARD_DATA;

// 카테고리 영어 (name 은 이미 영어라 desc 만)
const CAT_EN = {
  "multi-agent": "Multi-agent collaboration · workflow orchestration · state-machine design",
  "onprem":      "Air-gapped local inference · vLLM serving · GPU optimization",
  "finetuning":  "QLoRA · domain-specific fine-tuning · model compression",
  "rag":         "Retrieval-augmented generation · vector DB · knowledge pipelines",
  "agentops":    "State management · cost control · failure recovery · observability",
};
D.meta.en = { subtitle: "An enterprise archiving hub for mastering advanced AI-engineering videos — without watching them." };
D.categories.forEach(c => { if (CAT_EN[c.id]) c.en = { name: c.name, desc: CAT_EN[c.id] }; });

// 엔트리 en 부착
const enDir = path.join(ROOT, 'pipeline', 'work', 'en');
let attached = 0;
D.entries.forEach(e => {
  const f = path.join(enDir, e.id + '.json');
  if (fs.existsSync(f)) {
    try { e.en = JSON.parse(fs.readFileSync(f, 'utf8')); attached++; }
    catch (err) { console.error('en 파싱 실패:', e.id, err.message); }
  }
});

// 직렬화 (add_entry.py 호환: entries: [ 리터럴)
const j = (o) => JSON.stringify(o, null, 2);
const entriesStr = D.entries.map(e => '    ' + j(e).split('\n').join('\n    ')).join(',\n');
const out =
`/* =========================================================================
 *  AI ARCHITECT MASTER MATRIX — CONTENT DATA  (자동 생성/유지)
 *  새 엔트리는 pipeline 이 entries 배열 맨 앞에 삽입. en 은 이중언어 토글용.
 * ========================================================================= */
window.DASHBOARD_DATA = {
  meta: ${j(D.meta).split('\n').join('\n  ')},
  categories: ${j(D.categories).split('\n').join('\n  ')},
  entries: [
${entriesStr}
  ]
};
`;
fs.writeFileSync(path.join(ROOT, 'data.js'), out);
console.log(`재직렬화 완료: 엔트리 ${D.entries.length}개, en 부착 ${attached}개`);
