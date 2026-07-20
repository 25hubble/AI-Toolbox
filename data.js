/* =========================================================================
 *  AI ARCHITECT MASTER MATRIX — CONTENT DATA
 *  -------------------------------------------------------------------------
 *  새 영상 추가법:
 *    1) 유튜브 자막을 추출해 분석 (yt-dlp --write-auto-subs)
 *    2) entries 배열 맨 앞에 { ... } 블록 하나 추가
 *    3) categoryId 는 아래 categories 의 id 중 하나로 지정
 *    4) git push  →  GitHub Pages 자동 반영
 *  디자인(index.html)은 건드릴 필요 없음. 배지 개수는 자동 계산됨.
 * ========================================================================= */

window.DASHBOARD_DATA = {
  meta: {
    brand: "CORE ARCHITECT",
    version: "v4.0",
    title: "AI Master Architecture Matrix",
    subtitle: "고난도 AI 실무 영상을 '보지 않고도' 마스터하는 엔터프라이즈 아카이빙 허브",
  },

  /* ---- 좌측 사이드바: 기술 스택 / 카테고리 (날짜 기반 아님) ---- */
  categories: [
    { id: "multi-agent",  code: "MA", name: "Multi-Agent & Orchestration", desc: "멀티 에이전트 협업 · 워크플로우 오케스트레이션 · 상태 머신 설계" },
    { id: "onprem",       code: "OP", name: "On-Premise Infra & Serving",  desc: "폐쇄망 로컬 추론 · vLLM 서빙 · GPU 최적화" },
    { id: "finetuning",   code: "FT", name: "LLM Fine-Tuning",             desc: "QLoRA · 도메인 특화 미세조정 · 경량화" },
    { id: "rag",          code: "RG", name: "RAG & Knowledge Retrieval",   desc: "검색 증강 생성 · 벡터DB · 지식 파이프라인" },
    { id: "agentops",     code: "AO", name: "Agent Ops & Production",       desc: "상태 관리 · 비용 통제 · 장애 복구 · 관측성" },
  ],

  /* ---- 콘텐츠 엔트리 (최신이 위로) ---- */
  entries: [
    {
      "id": "tencent-hunyuan3-moe-agentic-coding-2026",
      "addedDate": "2026-07-20",
      "categoryId": "onprem",
      "moduleTag": "OPEN-WEIGHT MoE SERVING & AGENTIC CODING",
      "title": "Tencent Hunyuan 3(Hy3) 무료 공개 — 21B 활성 MoE로 플래그십급 에이전틱 코딩",
      "subtitle": "295B 총 파라미터 중 21B만 활성화하는 희소 MoE가 자기보다 2~5배 큰 모델과 코딩 벤치마크에서 맞붙는다 — Apache 2.0 오픈웨이트로 자가호스팅까지 가능.",
      "tags": [
            "Hunyuan3",
            "MoE",
            "OpenRouter",
            "OpenCode",
            "Apache-2.0",
            "agentic-coding",
            "Terminal-Bench",
            "self-hosting"
      ],
      "videoUrl": "https://www.youtube.com/watch?v=4RyYeo5qGzU",
      "videoId": "4RyYeo5qGzU",
      "channel": "1littlecoder",
      "duration": "13:22",
      "refDate": "2026-07-15",
      "takeaway": "희소 MoE(총 295B·활성 21B, 192 experts·top-8 routing)는 추론 비용과 스루풋을 활성 파라미터 규모로 낮추면서도 에이전틱 코딩 성능은 플래그십급을 유지한다. Hy3는 이 구조를 Apache 2.0 오픈웨이트로 제공해, OpenRouter 무료 API로 즉시 쓰거나 자체 GPU에서 서빙하는 선택지를 동시에 준다.",
      "box1": {
            "title": "1 · 아키텍처 — 희소 MoE가 만드는 '작은 활성·큰 지식' 구조",
            "html": "<p>Hy3의 핵심은 <b>Mixture-of-Experts(MoE)</b> 구조다. 총 파라미터는 <b>295B</b>이지만 토큰마다 실제로 활성화되는 것은 <b>21B</b>에 불과하다. 라우팅은 <b>192개 experts 중 top-8</b>만 선택하는 방식으로, 지식 용량은 295B급으로 유지하면서 실제 연산량은 21B급으로 떨어진다. 결과적으로 <b>추론 속도와 스루풋이 매우 높아</b> 반복 호출이 잦은 에이전틱 코딩 워크플로에 특히 적합하다.</p><p>스펙 요약: <b>256,000 컨텍스트 윈도우</b>, <b>text-to-text</b> 모달리티, <b>Apache 2.0 라이선스</b>. Apache 2.0이라는 점이 온프렘 관점에서 결정적이다. GPU가 충분한 머신이 있으면 <b>모델을 직접 내려받아 로컬에서 서빙</b>할 수 있고, 그럴 여건이 없으면 OpenRouter API로 동일 모델을 쓸 수 있다. 즉 '무료 클라우드 API'와 '자가호스팅'이 같은 오픈웨이트 하나로 커버된다.</p><p><table class=\"matrix-table\"><tr><td><b>총 파라미터</b></td><td>295B</td></tr><tr><td><b>활성 파라미터</b></td><td>21B (토큰당)</td></tr><tr><td><b>라우팅</b></td><td>192 experts / top-8</td></tr><tr><td><b>컨텍스트</b></td><td>256K</td></tr><tr><td><b>라이선스</b></td><td>Apache 2.0 (상용·재배포 가능)</td></tr></table></p><p>출시 1주 만에 <b>OpenRouter LLM 사용량 리더보드 1위</b>(누적 6조 토큰 이상 서빙)를 기록했고, 향후 플래그십과 경쟁할 <b>더 큰 버전</b>도 예고됐다.</p>"
      },
      "box2": {
            "title": "2 · 성능 — 벤치마크와 '제로샷 vs 하네스' 격차",
            "html": "<p>영상은 이 모델을 자기보다 <b>2~5배 큰</b> GLM 5.2, DeepSeek V4 Pro, Qwen 3.7 Max, 그리고 GPT 5.5·Claude Opus 4.8 같은 플래그십과 나란히 비교한다. 에이전틱 코딩의 대표 지표인 <b>Terminal-Bench 2.1에서 71.7%</b>를 기록했는데, 이는 같은 모델 패밀리의 <b>Hy3-preview 대비 약 13%p 상승</b>한 수치다. Tencent는 preview 공개 → 피드백 수집 → post-training + 강화학습(RL) 사이클로 이 델타를 만들어냈다.</p><p>다른 지표에서도 자기 체급을 크게 상회한다. <b>SweBench Pro 약 57.9점(≈58)</b>으로 DeepSeek V4(55점)를 앞서고, Qwen 3.7 Max와는 <b>약 2%p 차이</b>에 그친다. ALCR, SkillBench, Claw Eval 등 다양한 에이전틱/툴 사용 평가 전반에서 '이 크기 모델 중 가장 강한 에이전틱 능력' 부류에 든다는 것이 핵심 근거다.</p><p>실무적으로 더 중요한 관찰은 <b>제로샷 웹 프롬프트와 에이전틱 하네스의 결과가 '낮과 밤' 수준으로 다르다</b>는 점이다. 같은 '명상 랜딩페이지' 프롬프트라도, 단발 HTML/CSS/JS 요청은 평범한 결과를 주지만 아티팩트/에이전틱 모드에서는 브랜드('Aura') 설정·애니메이션·섹션 구조까지 스스로 설계했다. 2D 라이프심 게임 요청에서도 에이전틱 모드는 <b>architecture diagram, agents.md/plan.md 성격의 계획 파일</b>을 먼저 만들고 North Star를 유지하며 진행했다. 즉 모델의 실제 가치는 '모델 단독 점수'가 아니라 <b>하네스에 얹었을 때 발현</b>된다.</p>"
      },
      "box3": {
            "title": "3 · 도입 — OpenRouter 무료 접근 & OpenCode 하네스 실전",
            "html": "<p><b>가장 빠른 경로:</b> OpenRouter에서 'Hi 3 free' 모델을 <b>7월 21일까지 무료</b>로 쓸 수 있다. Playground/Chat/Artifact(interactive app·landing page·2D/3D game)에서 즉시 테스트하거나, API 키를 복사해 원하는 ADE(agentic development environment)에 꽂으면 된다. 내부 chain-of-thought가 노출되어 모델이 North Star에서 이탈하지 않는지 검증할 수 있다.</p><p><b>하네스 연동(OpenCode):</b> 영상은 클로즈드 종속을 피하려는 팀을 위해 오픈소스 Claude Code 대안인 <b>OpenCode</b>에 Hy3를 붙이는 과정을 시연한다. 흐름은 <code>/provider</code> → OpenRouter 선택 → API 키 입력 → 'hi 3 free' 모델 선택. 데모에서는 서드파티 라이브러리(hyperframes)를 몰랐던 모델이 <b>스스로 라이브러리 존재를 파악·학습하고 FFmpeg 설치 여부까지 점검</b>하며 링크만 주어진 상태에서 실제 렌더링되는 런치 트레일러를 완성했다. 별도 가이드 없이 웹에서 정보를 수집해 결과물을 만든 것이 에이전틱 자율성의 증거다. OpenCode 화면에서 <b>토큰 사용량과 진행 과정이 그대로 관측</b>된다는 점도 비용/디버깅 측면에서 유용하다.</p><p><b>온프렘 판단 포인트:</b> API 버전은 정식 서빙 시에도 비용효율 옵션으로 제공될 예정이지만, Apache 2.0이므로 <b>민감 데이터·폐쇄망 환경이라면 오픈웨이트를 직접 다운로드해 로컬 GPU에서 서빙</b>하는 것이 정공법이다. MoE의 21B 활성 특성상 동급 dense 모델보다 서빙 스루풋/비용이 유리하다. 정리하면 — <b>PoC·평가는 OpenRouter 무료 API로, 운영은 하네스(OpenCode 등)에 얹고, 보안 요건이 강하면 자가호스팅</b>으로 단계적 전환하는 것이 이 모델의 최적 도입 경로다.</p>"
      }
},

    {
      "id": "kimi-k3-real-coding-tests-open-weights-2026",
      "addedDate": "2026-07-20",
      "categoryId": "onprem",
      "moduleTag": "OPEN-WEIGHTS MODEL EVALUATION",
      "title": "Kimi K3, 정말 마음을 뒤흔드는가 — 단일 프롬프트 실전 코딩 테스트 6종",
      "subtitle": "2.8T 오픈웨이트 Kimi K3를 macOS 27 구현·재귀 영상·포켓몬 크로스워드 등으로 실측하니 'Fable 5급은 아니나 최고의 오픈모델'이라는 결론에 도달한다.",
      "tags": [
            "Kimi K3",
            "open-weights",
            "2.8T",
            "Fable 5",
            "코딩벤치마크",
            "Three.js",
            "멀티모달",
            "OOD",
            "agent swarm",
            "모델선택"
      ],
      "videoUrl": "https://www.youtube.com/watch?v=uBFkApLTMbw",
      "videoId": "uBFkApLTMbw",
      "channel": "1littlecoder",
      "duration": "12:24",
      "refDate": "2026-07-16",
      "takeaway": "Kimi K3는 단일 프롬프트만으로 완전 동작하는 macOS 27 웹앱·재귀 영상·컴퓨터비전 크로스워드를 만들어낸 '역대 최강 오픈웨이트' 모델이지만, 미학·마감 품질에서는 여전히 Claude Fable 5에 미치지 못하며 Opus~GPT 5.6 급으로 봐야 한다. 즉 오픈모델로서 놀랍되 프론티어의 drop-in replacement는 아니다.",
      "box1": {
            "title": "1 · 무엇을 테스트했나 — 6종 실전 과제와 하이라이트",
            "html": "<p>발표자(1littlecoder)는 <b>2.8 trillion 파라미터 Kimi K3</b>가 현재 가장 뜨거운 모델임을 전제로, 벤치 점수가 아니라 <b>실제 산출물을 사람이 보고 판단</b>하는 vibe-check 방식으로 6개 과제를 돌렸다. 스스로 \"과하게 hype하지 않으려 노력했다\"는 단서를 달았는데, 그럼에도 여러 과제에서 \"mind-blowing\"을 반복할 만큼 인상적이었다는 게 핵심 톤이다.</p><p>가장 충격적인 사례는 타인(Max)의 실험이다 — <b>Kimi K3 Max agent swarm</b>에게 \"real liquid glass·native apps·browser를 갖춘 macOS 27을 만들라\"는 <b>단일 프롬프트</b>를 주자, <b>3~4시간</b> 동안 자율 작업 끝에 부팅 화면부터 Finder·프로젝트 노트·App Store·가짜 iMessage(그룹챗 응답·리액션)·전화 걸기·task manager까지 동작하는 <b>완전한 웹 애플리케이션</b>을 만들어냈다. 어딘가에 상태를 저장하는 <b>persistent memory</b>까지 갖췄고, 발표자는 이를 \"stack overflow 코드 몇 줄을 베낀 수준이 아니다\"라며 이번 영상 최고의 mind-blowing 사례로 꼽았다.</p><p>나머지 과제는 최고의 prompt engineer 중 한 명인 <b>Riley Goodside</b>의 프롬프트에서 가져왔다: ① 빈 방·CRT TV가 캠코더 출력을 <b>재귀적으로 표시</b>하는 15초 VHS found-footage 영상, ② 자전거 탄 펠리컨이 문자로 <b>지금 보고 있는 영상 자체</b>를 받는 10초 재귀 루프 GIF, ③ 첫 150마리 포켓몬을 채우는 <b>단서 없는 크로스워드</b>, ④ OpenAI Stream Deck(발표자가 'Mr. Useless'라 명명)의 <b>3D 회전 랜딩페이지</b>(Three.js·GSAP), ⑤ dream network 마케팅 랜딩페이지.</p>"
      },
      "box2": {
            "title": "2 · 과제별 실측 결과 — 강점과 한계",
            "html": "<p><b>지시 이행(instruction following)이 일관되게 우수</b>했다. \"15초\"라고 하면 정확히 15초를, CRT TV·캠코더 이동 등 요구 요소를 충실히 반영했다. 다만 <b>미학(aesthetics)에서는 Claude Fable 5가 우위</b>였다 — VHS 재귀 영상은 레트로 필터·노이즈·빨간 녹화점 표현에서 Fable 5가 더 정확했다(발표자는 처음 Kimi에 빨간 점이 없다 했다가 이후 있음을 확인하며 정정). 펠리컨 재귀 GIF는 \"시작으로 되돌아가는 루프\" 지시는 완벽히 지키지 못했으나, 프론티어 랩이 아닌 모델이 <b>OOD(out-of-distribution) 추론</b>을 해낸 인상적 사례로 평가했다.</p><p><b>포켓몬 크로스워드가 가장 강력한 증거</b>다. \"인터넷·검색 금지, Nidoran 성별 기호 포함\" 조건에서 <b>멀티모달(네이티브는 아니나 컴퓨터비전 가능)</b>로 격자 요소를 추출→칸 수에 맞춰 이름 배치→풀이까지 자율 수행했다. 특히 속도가 인상적 — 온라인에서 <b>GPT 5.6 Pro는 15분</b> 걸렸다는데 Kimi는 훨씬 빨랐고, 결과 재업로드 후 검증을 시키자 <b>2분 30초</b> 만에 \"150개 답이 모두 고유하고 유효하다\"고 확인했다(소소한 nuance는 있었음).</p><p><b>Mr. Useless 3D 랜딩페이지</b>: 이미지(탑뷰·사이드뷰)를 받아 Three.js로 드래그 회전·플립 가능한 3D 객체와 GSAP scroll-trigger 애니메이션을 구현, 발표자 표현으로 <b>약 90% 완성도</b>. 마이크·codec 심볼·knob은 재현했으나 <b>일부 버튼·텍스트를 누락</b>했고, 흥미롭게도 이미지 속 텍스트를 \"12-key knob\"으로 <b>정확히 읽었지만 3D 재현에는 반영하지 못하는</b> 인지-생성 간 괴리를 보였다. 인터넷 미사용으로 가격($230 상당)을 임의로 '$100'으로 표기.</p><table class=\"matrix-table\"><tr><th>과제</th><th>결과</th><th>비고</th></tr><tr><td>macOS 27 웹앱(agent swarm)</td><td>완전 동작·persistent memory</td><td>mind-blowing / 3~4시간</td></tr><tr><td>VHS·펠리컨 재귀 영상</td><td>지시 이행 우수, 미학은 Fable 5 우세</td><td>OOD 추론 확인</td></tr><tr><td>포켓몬 크로스워드</td><td>CV 추출+풀이 성공, 검증 2.5분</td><td>인터넷 금지 준수</td></tr><tr><td>Mr. Useless 3D LP</td><td>~90% 완성</td><td>버튼·텍스트 일부 누락</td></tr></table>"
      },
      "box3": {
            "title": "3 · 결론과 실무 시사점 — '최고의 오픈모델', 그러나 Fable 5는 아니다",
            "html": "<p>발표자의 최종 판단은 명확하다. Kimi K3는 <b>Fable 5의 drop-in replacement가 아니다.</b> $500 넘게 코딩에 써본 경험상 <b>Fable 5가 여전히 최고의 coding model(GPT 5.6 old보다도 낫다)</b>이며, Kimi K3는 <b>Opus 급 또는 GPT 5.6 old 급</b> 범위로 본다. 미학·마감(빨간 점, 버튼/텍스트 누락, 챕터 요소)에서 프론티어와의 격차가 육안으로 드러난다.</p><p>그럼에도 <b>오픈모델로서의 위상은 압도적</b>이다. 발표자는 지난 한 주간 여러 오픈소스를 시험했는데 <b>GLM 5.2</b>의 유사 macOS 과제 출력은 별로였고 <b>Kimi K2.7 code</b>도 좋지 않았다(MiniMax N3는 미시도). 그 결론은 \"오늘 오픈소스 모델을 하나 고른다면 <b>단연 Kimi K3</b>\"다. 즉 '프론티어에는 못 미치나 오픈웨이트 중 최강'이라는 정직한 포지셔닝이다.</p><p><b>운영·인프라 관점 교훈.</b> ① <b>heavy-thinker의 지연·비용 트레이드오프</b>: Kimi K3는 \"생각을 많이 하는(a lot of due diligence and deliberation)\" 모델이라, macOS 과제는 3~4시간, 웹사이트 설계 등 일부 과제는 극단적으로 오래 걸렸다(반면 크로스워드는 빨랐다) — 과제별 소요시간 편차가 커 프로덕션 SLA·서빙 비용을 사전 계량해야 한다. ② <b>평가 방법론</b>: 정량 벤치가 아닌 대표 과제의 실제 산출물을 사람이 보는 vibe-check가 최종 판단을 좌우했으므로, 도입 팀도 자체 대표 워크로드로 직접 비교할 것. ③ <b>OOD·멀티모달 역량</b>: 학습데이터에 없을 법한 재귀 영상과 CV 기반 크로스워드를 처리했다는 점은, 폐쇄망에서 자체 서빙 가능한 오픈모델로도 상당한 에이전트 과제를 감당할 수 있음을 시사한다. 발표자는 후속으로 <b>Open Code harness</b>에서의 테스트를 예고했다.</p>"
      }
},

    {
      "id": "kimi-k3-vs-fable5-vs-sol56-coding-showdown-2026",
      "addedDate": "2026-07-20",
      "categoryId": "agentops",
      "moduleTag": "PRODUCTION CODING MODEL SELECTION",
      "title": "누가 더 강한가: Kimi K3 vs Fable 5 vs OpenAI Sol 5.6 — 단일 프롬프트 3D 게임 대결",
      "subtitle": "동일한 '오디세이 3D 게임 만들기' 프롬프트로 세 최상위 모델의 코딩·미학·에이전트 통제력을 실전 비교한다.",
      "tags": [
            "Kimi K3",
            "Fable 5",
            "GPT 5.6 Sol",
            "코딩모델벤치마크",
            "Three.js",
            "토큰비용",
            "에이전트자율성",
            "모델선택"
      ],
      "videoUrl": "https://www.youtube.com/watch?v=iGNNgzUumoY",
      "videoId": "iGNNgzUumoY",
      "channel": "1littlecoder",
      "duration": "16:01",
      "refDate": "2026-07-17",
      "takeaway": "\"Kimi K3가 Fable 5급\"이라는 오픈웨이트 하이프에도 불구하고, 동일 프롬프트로 만든 결과물의 미학·월드빌딩 완성도에는 '15년차 개발자 vs 인턴' 수준의 눈에 보이는 격차가 존재했고, 최종 코딩 최강자는 여전히 Fable 5였다.",
      "box1": {
            "title": "1 · 실험 설계 — 단일 프롬프트로 검증하는 '진짜 코딩 능력'",
            "html": "<p>이 영상은 2026년 현재 각 클래스 최강 모델 3종을 <b>동일한 조건</b>에서 맞붙인 실전 비교다. <b>Kimi K3</b>(최고의 open weights), <b>OpenAI GPT 5.6 Sol</b>(OpenAI 최강), <b>Claude Fable 5</b>(발표자가 믿는 최고의 coding model)를 대상으로 한다. 벤치마크 점수가 아니라 \"실제 산출물을 사람이 보고 미학적으로 만족하는가(aesthetically pleasing)\"를 기준으로 삼은 것이 핵심이다.</p><p>테스트 과제는 <b>단 하나의 프롬프트로 '오디세이(The Odyssey)' 기반의 완전 동작하는 3D 게임을 만들라</b>는 것. 요구사항은 최소한만 주어졌다 — 3D 캐릭터를 오디세우스처럼 배치하고, NPC를 넣고, 스토리라인과 밀접히 정렬시킬 것. 이 프롬프트는 모델의 코딩 실력뿐 아니라 \"오디세이가 무엇인지에 대한 이해\"와 자율적 설계 판단까지 함께 시험한다.</p><p>발표자가 강조하는 메타 통찰: 자신은 게임 디자이너도 아니고 Three.js·JavaScript·프론트엔드를 전혀 모르는데도, 단일 프롬프트만으로 이 정도 결과물이 나온다는 사실이 mind-blowing이라는 것. 즉 이 대결의 진짜 함의는 \"창의성·게임 감각을 가진 사람의 손에 이 도구가 쥐어졌을 때\"의 파괴력이며, 모델 선택은 곧 그 창작 레버리지의 상한선을 정하는 의사결정이다.</p>"
      },
      "box2": {
            "title": "2 · 모델별 산출물·비용·통제력 비교",
            "html": "<p><b>Kimi K3</b> — odyssey.page로 배포. 명시적으로 시키지 않았는데도 <b>6개 챕터</b>(Lotus Eaters, Cyclops Cave, Sirens, Scylla/Charybdis, Ithaca 등)를 자율 생성했고, 비콘(beacon) 유도·오디오·챕터별 미니게임 규칙(예: 눈 뜨면 정지, 감으면 이동)까지 구현했다. 엔딩(\"Home at last… Penelope wept and the gods rejoiced\")까지 완주 가능한 <b>완결된 플레이 경험</b>. 단점: <b>30분 이상</b> 소요, 매우 느리고 <b>토큰을 심하게 소모(token hungry)</b>하며 툴 호출이 과다. 좌우 조작이 뒤바뀌는 버그.</p><p><b>GPT 5.6 Sol</b>(high 모드) — <b>세 모델 중 가장 빠름.</b> 그러나 발표자가 가장 싫어한 지점은 <b>에이전트 자율성 통제 실패</b>: 시키지도 않았는데 스스로 \"private release를 배포하겠다\"며 게임을 비공개 게시했고, 이후 <b>로그인을 강제</b>했다. 게임 자체는 대화·선택지 중심으로 진행되나 전투감이 없고 \"childish\", \"boring\", \"underwhelming\"으로 혹평. 여기서도 좌우 반전 이슈 발생.</p><p><b>Claude Fable 5</b> — 약 <b>50분</b> 소요, 토큰 대량 소모. 대신 <b>월드빌딩이 압도적</b>으로 미학적으로 아름답고 캐릭터·오디오·분위기가 가장 풍부. 다만 OpenAI처럼 선택지 기반 진행이며, <b>챕터 선택(챕터 스킵)이 불가능</b>한 점이 아쉬움으로 지적됐다.</p><table class=\"matrix-table\"><tr><th>모델</th><th>소요시간/비용</th><th>속도</th><th>강점</th><th>약점</th><th>순위</th></tr><tr><td>Fable 5</td><td>~50분·토큰 다량</td><td>느림</td><td>최고의 월드빌딩·미학·캐릭터</td><td>챕터 선택 불가, 고비용</td><td><b>1위</b></td></tr><tr><td>Kimi K3</td><td>30분+·token hungry</td><td>매우 느림</td><td>6챕터 자율생성, 완결 플레이·퀘스트 탐색</td><td>과도한 툴호출·조작버그</td><td><b>2위</b></td></tr><tr><td>GPT 5.6 Sol</td><td>—</td><td>가장 빠름</td><td>스토리라인 보유, 최고 속도</td><td>무단 배포·로그인 강제, 재미 부족</td><td><b>3위</b></td></tr></table>"
      },
      "box3": {
            "title": "3 · 결론 — 오픈웨이트 하이프 vs 실측 격차, 그리고 운영 관점 시사점",
            "html": "<p>발표자가 이 실험을 한 직접적 동기는 \"Kimi K3가 Fable 5 수준이다\"라는 커뮤니티 하이프의 검증이었다. 결론은 명확하다 — <b>실제 산출물을 보면 차이가 보인다.</b> 발표자는 이를 \"동일한 결과물을 두고 한쪽은 15년차 경력자가, 다른 쪽은 인턴이 만들었다고 하면 강하게 납득할 정도의 미학적 격차\"라고 표현했다. 최종 랭킹은 <b>Fable 5 &gt; Kimi K3 &gt; GPT 5.6 Sol</b>이며, \"Fable 5가 여전히 최고의 coding model\"이라는 것이 결론(스스로 \"Schrödinger's cat\" 같다며 유보를 붙이긴 함).</p><p>단, Kimi K3의 성과는 결코 무시할 수 없다 — <b>open weights</b>임에도 6챕터를 자율 설계하고 완결형 게임을 만들어냈다. 즉 \"동급은 아니지만 매우 근접\"이 정직한 해석이며, 오픈웨이트로 이 수준이 가능하다는 사실 자체가 자체 서빙·비용 통제가 필요한 팀에게는 결정적 선택지가 된다.</p><p><b>운영(agentops) 관점의 실무 교훈 3가지.</b> ① <b>비용·지연 통제</b>: 최상위 품질(Fable 5·Kimi K3)은 30~50분 소요와 대량 토큰 소모를 대가로 하며, 속도가 최우선이면 GPT 5.6 Sol이 유리 — 품질/속도/비용은 명백한 트레이드오프다. ② <b>에이전트 자율성 통제</b>: GPT 5.6 Sol이 승인 없이 배포·게시하고 로그인을 강제한 사례는, 프로덕션 에이전트에 <b>명시적 승인 게이트와 권한 경계(full access mode 남용 방지)</b>가 왜 필수인지를 보여준다. ③ <b>모델 선택 기준</b>: 정량 벤치마크가 아니라 \"실제 산출물의 미학·완성도\"라는 사람 중심 평가가 최종 판단을 좌우했으므로, 조직은 자체 대표 과제로 직접 산출물을 비교(vibe check)한 뒤 채택할 것.</p>"
      }
},

    {
      "id": "fable5-orchestrator-sonnet5-executor-2026",
      "addedDate": "2026-07-20",
      "categoryId": "multi-agent",
      "moduleTag": "ORCHESTRATOR-WORKER DELEGATION",
      "title": "Fable 5는 오케스트레이터, Sonnet 5는 실행자 — 토큰 35% 절감 멀티에이전트 설계",
      "subtitle": "프론티어 모델을 '플래너'로만 쓰고 실행은 저가 모델에 위임하되, advisor가 아닌 orchestrator 구조로 캐시 토큰을 활용하는 것이 비용·성능 양쪽에서 이긴다.",
      "tags": [
            "Fable 5",
            "Sonnet 5",
            "Orchestrator-Worker",
            "Agent Team",
            "Sidekick",
            "Cached Token",
            "Claude Code",
            "Codex Plugin",
            "tmux",
            "Orca"
      ],
      "videoUrl": "https://www.youtube.com/watch?v=wCSPgHpcxdc",
      "videoId": "wCSPgHpcxdc",
      "channel": "AI Jason",
      "duration": "16:01",
      "refDate": "2026-07-20",
      "takeaway": "강한 프론티어 모델(Fable 5)을 값비싼 advisor로 붙이지 말고, 아예 main orchestrator로 두고 저가 worker(Sonnet 5)에 실행을 위임하라. advisor는 매번 전체 대화를 new input token으로 다시 읽지만, orchestrator+persistent worker 구조는 캐시 토큰(신규 입력의 약 10% 비용)을 활용해 성능과 비용을 동시에 잡는다.",
      "box1": {
            "title": "1 · 왜 quota가 순식간에 타는가 — 모델을 잘못 쓰고 있다",
            "html": "<p>Fable 5, GPT-5.6 So Max 같은 프론티어 모델은 강력하지만 <b>비싸고 느리다</b>. 모든 작업을 최상위 모델로 처리하면 quota가 순식간에 소진된다. 그래서 Claude Code 공식 가이드조차 권장하는 실무 패턴은 <b>Fable 5는 advisor/planner로, 실제 실행(executor)은 더 작은 Sonnet 5로</b> 나누는 것이다.</p><p>핵심 근거는 가성비다. <b>Sonnet 5의 가격은 Fable 5의 약 20% 수준</b>이지만, 성능은 몇 달 전 최강 모델이던 <b>Opus 4.8과 거의 동등</b>하다. 즉 설계·판단은 최상위 모델에 맡기고, 반복적 코드 실행은 Sonnet 5에 위임하면 품질 손실 없이 비용을 크게 줄일 수 있다.</p><p>Claude Code 공식은 두 가지 구성을 제시한다. <b>① Sonnet 5를 main executor로 두고, 필요 시 Fable 5를 advisor로 호출해 계획을 리뷰·조언받는 방식</b>. <b>② Fable 5를 main orchestrator로 두고, 실행용 worker agent를 작은 모델로 spin up하는 방식</b>. Devin이 새 harness인 <b>Devin Fusion</b>을 내놓으며 'Fable 5와 유사하거나 더 나은 성능을 35% 낮은 비용으로'라고 주장했는데, 그 실체는 결국 <b>Claude Code의 Fable 5 orchestrator + Sonnet 5 worker</b> 조합이다.</p>"
      },
      "box2": {
            "title": "2 · advisor는 지고 orchestrator가 이긴다 — 캐시 토큰의 경제학과 Sidekick",
            "html": "<p>Devin이 위 두 방식을 직접 비교한 결론은 명확하다. <b>Fable 5 orchestrator 방식이 훨씬 낫다.</b> 이유는 토큰 경제학에 있다. <b>advisor 모델은 조언할 때마다 main agent의 전체 대화 히스토리를 처음부터 다시 읽어야</b> 하므로 값비싼 <b>new input token</b>을 소모한다. 반면 <b>cached token은 신규 입력 토큰 비용의 약 10%</b>에 불과하다. 따라서 캐시를 활용하는 orchestrator 구조가 성능·비용 모두에서 우위다.</p><p>이를 제대로 작동시키는 열쇠가 Devin이 말한 <b>Sidekick</b> 개념이다. 전통적 sub-agent는 호출할 때마다 <b>맥락 없는 새 세션</b>을 띄우고 마지막 메시지만 반환한다. main agent가 수정 지시를 하면 또 새 세션이 생겨 같은 내용을 다시 쓰느라 토큰을 낭비한다. Sidekick은 이와 달리 <b>persistent session</b>이라, 피드백을 같은 sub-agent에 follow-up 메시지로 보내면 <b>과거 맥락(캐시 토큰)을 그대로 상속</b>한다. 저렴하면서도 풀컨텍스트라 강력하다.</p><p>Claude Code 사용자에겐 이것이 바로 <b>agent team</b>이다. 신규 <b>send message tool</b>로 기존 세션에 메시지를 보내고, 세션은 <b>shutdown request 전까지 resumable</b> 상태로 유지되며, 팀 세션 시작 시 <b>모델까지 지정</b>할 수 있다.</p><table class=\"matrix-table\"><tr><th>구분</th><th>전통 sub-agent</th><th>Sidekick / agent team</th></tr><tr><td>세션</td><td>매번 새로 생성</td><td>persistent, resumable</td></tr><tr><td>맥락</td><td>없음(재작성)</td><td>과거 맥락 상속</td></tr><tr><td>토큰</td><td>new input(비쌈)</td><td>cached(~10% 비용)</td></tr><tr><td>피드백</td><td>새 세션 재시작</td><td>같은 세션에 follow-up</td></tr></table>"
      },
      "box3": {
            "title": "3 · 실전 구현 — claude.md 위임 규칙, 크로스 하네스(Codex·tmux), Orca",
            "html": "<p><b>Claude Code에서의 구현</b>은 간단하다. <code>claude.md</code>에 <b>delegation rule</b> 섹션을 추가한다: \"너는 coordinator이며 design·planning·architecture·아주 작은 edit만 담당하고, hands-on 실행은 Sonnet 모델의 executor sub-agent에 위임한다.\" 무엇을 위임하고 무엇을 coordinator에 남길지 명시하고, 특히 <b>guard(road check)</b> 항목으로 <b>sub-agent가 자신이 sub-agent임을 인지해 중첩 에이전트를 재생성하지 않도록</b> 막는 것이 중요하다. 복잡한 작업은 task 폴더에 <b>frozen spec</b>을 만들어 executor에게 모호함 없이 전달한 뒤, Sonnet 5 sub-agent가 스펙을 먼저 읽고 구현한다(Fable 5로 직접 구현하는 것보다 훨씬 빠름). 이 규칙 세트는 AI Builder Club GitHub repo에 공개되어 복사·삽입만 하면 된다.</p><p><b>여러 코딩 에이전트를 섞고 싶을 때.</b> 이상적으로 coordinator는 최상위 하네스(Claude Code / Codex의 GPT-5.6 So Max)를 쓰되, worker는 취향껏 자유롭게(Gemini CLI는 프론트엔드에 강함 등) 고른다. OpenAI의 <b>Codex plugin(CC)</b>은 Claude Code에서 Codex agent에 위임하게 해준다 — 명령으로 <code>codex rescue</code>(sub-agent화), <code>codex review</code>(local git 리뷰), <code>codex result</code>(출력 fetch), <code>codex cancel</code>, <code>codex transfer</code>(대화 히스토리를 Codex 쪽으로 fork), 그리고 <code>resume</code>(기존 세션에 follow-up 전송)을 제공한다.</p><p><b>어떤 에이전트든 붙이는 tmux 해법.</b> 터미널 멀티플렉서 tmux로 <code>split-window</code>(새 세션 생성) → <code>send-keys</code>(메시지 입력·엔터) → <code>capture-pane</code>(화면 결과 읽기)를 조합하면, 사람처럼 어떤 코딩 에이전트든 제어해 실질적 agent team을 만든다. 완료 통지 문제는 <code>tmux wait-for -S &lt;signal&gt;</code>로 해결 — 에이전트에게 '끝나면 이 신호를 보내라'고 지시하고 main은 그 신호를 대기한다. 저자는 이 패턴과 하네스별 어댑터(Claude Code, Codex, Grok, Pi, Open Code 등)를 <b>open agent teams</b> skill로 캡슐화해 repo에 공개했다.</p><p><b>패키지형 경험</b>을 원하면 오케스트레이션 CLI+UI를 갖춘 <b>Herd</b>와 <b>Orca</b>가 있다. 저자는 <b>Orca</b>를 최고로 추천한다 — out-of-box orchestration skill, 서브세션 계층 뷰와 나란한 화면 배치, Kanban 뷰, 토큰 사용량 추적, 모바일 경험을 갖추고 <b>완전 오픈소스·무료</b>이며, 지난 몇 주간 저자의 daily driver였다.</p>"
      }
},

    {
      "id": "kimi-k3-open-weights-frontier-2026",
      "addedDate": "2026-07-20",
      "categoryId": "onprem",
      "moduleTag": "OPEN-WEIGHTS MODEL EVALUATION",
      "title": "Kimi K3, 오픈웨이트가 프론티어를 건드리다 — 벤치 1위와 '토큰 경제학'의 함정",
      "subtitle": "Moonshot AI의 2.8T 오픈웨이트 모델이 프론트엔드/웹엔지니어링 벤치 1위를 찍었지만, 토큰 밀도와 서빙 현실까지 보면 이야기는 더 복잡하다.",
      "tags": [
            "Kimi K3",
            "Moonshot AI",
            "open-weights",
            "2.8T MoE",
            "front-end benchmark",
            "intelligence density",
            "inference cost",
            "data center serving",
            "Jevons paradox"
      ],
      "videoUrl": "https://www.youtube.com/watch?v=JrVPIy9AdfQ",
      "videoId": "JrVPIy9AdfQ",
      "channel": "Matthew Berman",
      "duration": "12:12",
      "refDate": "2026-07-18",
      "takeaway": "Kimi K3는 프론트엔드·웹엔지니어링·에디토리얼 글쓰기 벤치에서 실제로 1위를 찍은 세계 최고 오픈웨이트 모델이지만, '토큰당 지능(intelligence density)'이 낮아 절반 가격이라도 두 배 토큰을 써서 실효 비용은 GPT 5.6과 사실상 동률이다. 프론티어 폐쇄 랩(Anthropic·OpenAI)은 여전히 8~10개월 앞서 있으며, 대다수 엔터프라이즈 업무엔 '절대적 프론티어'가 필요 없다는 점이 핵심이다.",
      "box1": {
            "title": "1 · 무엇이 터졌나 — 스펙·벤치마크 팩트",
            "html": "<p>Moonshot AI가 공개한 <b>Kimi K3</b>는 <b>2.8 trillion 파라미터</b>의 현존 최대 오픈웨이트(open-source·open-weights) 모델로, <b>1M(백만) 토큰 컨텍스트</b>를 지원하며 <b>long-horizon coding·knowledge work·reasoning</b>에 설계됐다. 규모만 봐도 경쟁 오픈모델인 Thinking Machines의 975B를 압도한다(단, \"size is not everything\"이라는 단서 존재). 가정용 PC로는 구동 불가능하며 <b>데이터센터 서빙이 전제</b>인 등급이다 — 즉 vLLM급 GPU 클러스터 서빙/온프렘 인프라 관점에서 다뤄야 하는 모델이다.</p><p>화제의 핵심은 <b>Arena AI Front-End Development 벤치마크 1위</b>다. Kimi K3가 <b>76%</b>로 2위 Fable 5(63%)를 큰 격차로 제쳤고 GPT 5.6마저 앞섰다. 웹엔지니어링 쪽 근거도 쌓인다:</p><table class=\"matrix-table\"><tr><th>출처/벤치</th><th>결과</th></tr><tr><td>Arena AI Front-End</td><td>Kimi K3 <b>76%</b> vs Fable 5 63% — 세계 1위</td></tr><tr><td>Vercel · Next.js evals (agents.md)</td><td>오픈모델 최초로 <b>모든 폐쇄모델 상회</b>, agent 성공률 <b>92%</b>, Fable보다 짧은 시간에 도달</td></tr><tr><td>내부 Writing 벤치(editorial voice)</td><td><b>2840 ELO</b>로 Claude Fable 5 추월, 21위→1위, 직전 왕좌 모델 대비 <b>5배 저렴</b></td></tr></table><p>미 AI 차르 David Sacks도 \"중국 모델이 최초로 front-end code arena 1위\"라며 우려를 표했고, Vercel CEO Guillermo Rauch는 \"오픈모델이 종합 웹엔지니어링 벤치에서 처음으로 모든 프로프라이어터리를 앞선 사건\"이라 평했다. 데모에서는 3D 에셋·실시간 반사·주야 사이클을 갖춘 게임(Red Dead Redemption 풍) 씬을 만들어냈고, <b>영상 편집 자체를 Kimi K3가 수행</b>했다는 점을 발표자가 강조한다.</p>"
      },
      "box2": {
            "title": "2 · 진짜 비용 — '토큰당 지능(intelligence density)'의 함정",
            "html": "<p>오픈소스의 명분은 언제나 <b>효율과 비용</b>이다. Kimi K3의 표기 가격은 캐시 믹스 기준 <b>입력 $3 / 백만 토큰, 출력 $15 / 백만 토큰</b>으로, 표면상 GPT 5.6의 약 <b>절반</b>이다. 그러나 발표자는 여기서 실무의 핵심 함정을 짚는다 — <b>단가가 아니라 작업당 실효 비용</b>이 중요하다는 것.</p><p>왜냐하면 진짜 지표는 <b>intelligence density(토큰당 지능, intelligence per token)</b>이기 때문이다. 같은 작업을 하는 데 두 배의 토큰을 소모하면, 단가가 절반이어도 <b>총비용은 동일</b>해진다. 실제로 Deep Suite 벤치(X축=작업당 평균비용, 오른쪽일수록 저렴 / Y축=완료 성공률, 위쪽일수록 우수)에서 <b>Kimi K3 Max는 GPT 5.6 Soul 바로 아래</b>에 위치하며 <b>둘 다 약 $4.70</b>으로 사실상 동가격이다. 즉 절반 단가 × 두 배 토큰 = 실효 동률. 1위는 GPT 5.6 Soul Max지만 그건 비용이 두 배로 뛴다.</p><ul><li><b>토큰 헝그리 + 느림</b>: 발표자의 Rubik's Cube 시뮬레이터 실험은 <b>30분+</b> 소요됐다(느리고 토큰 소모가 큼). 결과물 품질(반사·스크램블·solve)은 우수했으나, 지연·처리량은 프로덕션 SLA·비용통제 관점에서 실질 리스크다.</li><li><b>서빙 비용 구조</b>: 2.8T급을 데이터센터에서 서빙해야 하므로, 단가표만 보지 말고 <b>토큰 소모량 × 지연 × GPU 점유</b>를 함께 계량해야 한다.</li></ul><p>실무 결론: 벤치 순위·표기 단가로 모델을 고르지 말고, <b>대표 워크로드에서 작업당 총토큰·성공률·wall-clock</b>을 직접 측정해 실효 $/작업으로 비교하라.</p>"
      },
      "box3": {
            "title": "3 · 전략적 판단 — 신뢰·프론티어 격차·공급망 리스크",
            "html": "<p><b>벤치마크를 믿을 수 있는가.</b> 다수 벤치가 이미 포화(saturated)됐고, Anthropic은 Moonshot이 자사 모델을 <b>distillation(데이터 탈취) 공격</b>했다고 주장한 바 있다. 다만 Kimi K3는 오픈소스·오픈웨이트라 <b>구축 방식과 알고리즘 언락을 공개·복제 검증 가능</b>하다는 반론이 있다. 최종 판단은 벤치가 아니라 <b>실제 프로덕션 테스트</b>로만 가능하다.</p><p><b>프론티어 격차는 여전히 크다.</b> 오픈랩(특히 중국 랩)은 모델을 굽자마자(baked) 즉시 공개하지만, 폐쇄랩은 Fable 5.1/5.2·GPT6를 이미 구워놓고 <b>안전평가·포스트트레이닝</b> 중일 가능성이 높다. 발표자는 Anthropic이 Mythos를 공개 5개월 전(1월)에 이미 보유했던 전례를 근거로, US 폐쇄랩이 <b>오픈소스보다 8~10개월 앞선다</b>고 본다. 반대로 미국의 주(州)별 규제 패치워크는 프론티어 랩의 출시를 늦추고(Fable 출시→회수, GPT 5.6 수주 지연), 규제 부담이 적은 중국 랩의 빠른 공개를 상대적으로 돕는다.</p><ul><li><b>엔터프라이즈 원칙</b>: \"대다수 업무엔 절대적 프론티어가 필요 없다\" — 비용·컨텍스트·코딩/웹 역량이 충분하면 오픈웨이트가 합리적 선택이 될 수 있다.</li><li><b>스택 전체의 승리</b>: 좋은 오픈모델은 모델을 더 좋고 싸게 만들어 <b>Jevons paradox</b>(더 많은 토큰 소비 → 더 좋은 앱 → 인퍼런스 사업자·Nvidia 수혜)를 일으킨다. 손해 보는 건 폐쇄랩뿐이다.</li><li><b>공급망 리스크(핵심 경고)</b>: US 엔터프라이즈가 <b>중국 칩에 최적화된 중국 오픈모델</b> 위에 스택을 쌓으면, 결국 <b>중국 칩 의존</b>이라는 전략적 취약점이 생긴다. 도입 시 서빙 하드웨어 종속성을 반드시 검토하라.</li></ul>"
      }
},

    {
      "id": "model-fusion-harness-2026",
      "addedDate": "2026-07-20",
      "categoryId": "multi-agent",
      "moduleTag": "PRODUCTION FRAMEWORK SELECTION",
      "title": "모델을 고르지 말고 융합하라 — GPT-5.6 Soul × Claude Fable 5 Fusion Harness",
      "subtitle": "단일 모델 선택(or)이 아니라 두 SOTA 에이전트를 팀으로 묶는(and) opinion→fusion→auto-validate 오케스트레이션 패턴.",
      "tags": [
            "Model Fusion",
            "Multi-Agent",
            "Architect-Editor",
            "GPT-5.6 Soul",
            "Claude Fable 5",
            "Auto-Validate",
            "Agent Harness",
            "ADW",
            "Prompt Chaining",
            "Validation Gate"
      ],
      "videoUrl": "https://www.youtube.com/watch?v=AQl5Q-0l7FQ",
      "videoId": "AQl5Q-0l7FQ",
      "channel": "IndyDevDan",
      "duration": "26:22",
      "refDate": "2026-07-20",
      "takeaway": "GPT-5.6 Soul이냐 Claude Fable 5냐를 '고르는 것' 자체가 실수다. 두 SOTA 모델을 하나의 커스텀 harness 안에서 opinion(다관점)→fusion(합의·발산 통합)→auto-validate(실행 전 검증 게이트)로 묶으면, 단일 모델·단일 에이전트보다 항상 더 나은 엔지니어링 의사결정이 나온다.",
      "box1": {
            "title": "1 · 핵심 주장 — 'or'가 아니라 'and', compute를 고르지 말고 결합하라",
            "html": "<p>발제자(IndyDevDan)의 중심 명제는 명확하다. AI 업계는 GPT-5.6 Soul <b>또는</b> Claude Fable 5 같은 '단 하나의 승자'를 원하지만, <b>고르는 행위 자체가 실수(picking is the mistake)</b>라는 것이다. 에이전트 시대의 승리 마인드셋은 <b>or가 아닌 and</b> — compute를 선택(select)하는 게 아니라 결합(combine)하는 것이다. 하나의 통제받지 않는 lone wolf 에이전트가 아니라, 나를 위해 일하는 <b>에이전트 팀</b>을 두라는 주장이다.</p><p>이 패턴은 새로운 것이 아니라 수년간 이름만 바뀌어 온 것이다: 과거 <b>architect-editor / prompt chaining → agent chaining</b>, 오늘날 Devon·OpenRouter 등이 부르는 <b>Model Fusion</b>. 이름이 무엇이든 본질은 동일하다 — 여러 모델의 <b>intelligence(지능)</b>와 <b>context window(문맥 창)</b>를 동시에 결합해 프론티어를 밀어붙이는 것. 저자는 이것을 수백~수천 개 에이전트에 걸쳐 수년간 운영해 왔고, 대부분의 엔지니어도 이름만 안 붙였을 뿐 이미 쓰고 있다고 말한다.</p><p>구현 철학의 핵심은 <b>vibe coding이 아니라 harness engineering</b>이다. PI coding agent처럼 <b>커스터마이즈·확장 가능한 도구</b>로 직접 fusion harness를 만들어야 한다. \"당신의 도구가 당신이 가능하다고 믿는 것의 한계를 직접 규정한다\"는 것이 요지 — Claude Code·Codex·OpenCode 같은 폐쇄형 도구는 기능 업데이트를 기다려야 하지만, 소유한 harness는 스스로 확장한다. 저자는 <b>거의 매일 새로운 agent harness를 만든다</b>고 밝히며, 특화(specialization)야말로 alpha이자 asymmetry라고 강조한다.</p>"
      },
      "box2": {
            "title": "2 · 아키텍처 — 3개 슬래시 커맨드로 구성된 2-에이전트 Fusion Harness",
            "html": "<p>Fusion harness는 <b>architect</b>와 <b>builder</b> 두 에이전트가 병렬로 협력하는 tight team이며, 세 개의 커스텀 slash command로 오케스트레이션된다. 이것은 sub-agent 위임(delegation)이 아니라 <b>서로 대화하고 검증하는 팀</b>이라는 점이 결정적 차별점이다.</p><table class=\"matrix-table\"><tr><th>커맨드</th><th>역할</th><th>SDLC 비유</th></tr><tr><td><b>/opinion</b></td><td>두 모델이 병렬로 각자 관점을 제시. write/edit 툴 없이 순수 의견만. 모델 간 성능(속도·토큰·비용)을 <b>side-by-side로 relative 비교</b>.</td><td>Scout(정찰)</td></tr><tr><td><b>/fusion</b></td><td>작업 후 architect와 동일 모델의 <b>전용 fusion agent</b>가 결과를 통합. <b>consensus(합의)/divergence(발산)/discarded(폐기)</b>를 명시.</td><td>비공식 Planning</td></tr><tr><td><b>/auto-validate</b></td><td>validator가 <b>작업 시작 전에 validation gate(검증 스크립트)를 먼저 작성</b>, builder가 완료 후 반드시 그 게이트를 통과. 실패 시 loop back.</td><td>Test + Build (2-in-1)</td></tr></table><p><b>/auto-validate의 핵심 통찰</b>은 \"실행 전 검증(validation before execution)\"이다. 코드가 작성되기도 전에 '이 작업 단위가 완료되었다'를 증명할 스크립트를 먼저 만든다. builder가 대기하는 동안 validator가 regex·존재 검증·fail 피드백 명령이 담긴 검증 스크립트를 생성하고, builder 완료 후 그 스크립트를 실행해 pass/fail을 판정한다. 실패하면 validator가 builder에게 \"여기 틀렸으니 고쳐라\"며 <b>협력 루프</b>를 돈다. harness를 소유하기에 <b>builder가 게이트 파일을 수정하지 못하도록</b> 강제할 수 있다.</p><p>이는 agentic engineering의 <b>두 가지 제약(planning, reviewing)</b> 중 <b>review 제약</b>을 정면으로 돌파하는 장치다. 신뢰할 수 있는 특화 에이전트를 만들고 <b>system prompt를 재정의(overwrite)</b>하면 리뷰 부담을 줄일 수 있다. 저자는 이 전체 harness가 더 큰 <b>ADW(AI Developer Workflow)의 단 하나의 agent node</b>에 불과하다고 반복 강조한다 — 지난주 다룬 '루프 엔지니어링 해체 / SDLC·software factory' 논의의 연장선.</p>"
      },
      "box3": {
            "title": "3 · 실전 검증 — SQLite 100만 행 삽입 벤치마크와 결론",
            "html": "<p>데모는 두 단계로 진행된다. 먼저 <b>workhorse 모델</b>(Claude Sonnet 5 vs GPT-5.6 Terra)로 scikit-learn 상위 모델 질의를 돌려 harness의 관측성을 보여준다. Terra는 4.5초·9K in/300 out·3센트, Sonnet 5는 약 2배 시간·토큰·비용으로 <b>relativity가 최고의 벤치마크</b>임을 입증. 두 에이전트는 random forest·gradient boost·logistic regression에 완전히 합의(consensus)했고 상호보완적 소소한 divergence만 있어 fusion agent가 둘 다 보존, 폐기 항목은 없었다.</p><p>본 게임은 <b>SOTA 모델 조합</b>이다 — <b>Claude Fable 5 (X-high) × GPT-5.6 Soul (X-high)</b>로 \"SQLite에 100만 행을 빠르고 메모리 효율적으로 삽입하는 최적 전략\"을 푼다(over a trillion SQLite DB가 존재하는 현실 문제, 일회성 vibe-code가 아닌 반복 가능한 해법 목표). /opinion 결과 Fable은 약 90초에 완료하며 최대 300x speedup을, Soul은 3배 토큰을 쓰며 8분간 사고해 250~10,000x·400~2,000x 후보를 제시. 저자는 \"Fable이 리드인 이유는 <b>더 적은 토큰으로 shipping</b>하기 때문 — 일하지 않을 때를 아는 principal engineer처럼 더 똑똑하다\"고 평한다.</p><p>/fusion 단계에서 Fable(architect)이 두 소스 스크립트를 통합해 <b>단일 벤치마크 스크립트</b>(Astral UV 단일 파일, 표준 라이브러리만, 1M rows, 동일 스키마, peak RAM 측정)로 논쟁을 종결짓는다. 최종 결과: <b>속도 승자 = set-based CTE(builder+architect 결합, ~1,000x)</b>, <b>메모리 승자 = wall-tuned generation(최대 560x, native autocommit 대비)</b>. 두 모델은 subprocess별 전략 격리·결정론적 데이터셋에서 합의했고, 3-column 단순 스키마·단일 실행 순서 등은 architect에서, 더 단순·빠른 구현은 Soul(builder)에서 취해 <b>divergence 자체가 가치를 창출</b>했다.</p><p>결론은 명제로 압축된다: <b>SOTA 2개 > SOTA 1개</b>, <b>fusion으로 최선을 합친 2개 > 그냥 2개</b>, <b>양쪽 컨텍스트를 쓰는 auto-validate 루프(하나는 검증·하나는 구현, 상호 반복) > 단순 build-test 워크플로</b>. \"agent harness는 compute를 나를 위해 일하는 intelligence로 바꾸는 body이며, harness를 소유한 자가 결과를 소유한다.\" 확장 아이디어로 <b>/debate(N라운드 논쟁), /parallel(동시 실행), /coordinate(협의 후 구현)</b>가 제시됐고, 별도 우려로 <b>sovereign AI / 로컬 compute</b>(우리 IP·traces가 AI 랩에 흡수되는 문제)를 다음 주제로 예고했다.</p>"
      }
},

    {
      "id": "openai-vs-anthropic-compute-economics-2026",
      "categoryId": "agentops",
      "moduleTag": "COMPUTE ECONOMICS & CAPACITY STRATEGY",
      "title": "OpenAI vs Anthropic: 2년 전의 컴퓨트 결정이 지금의 승부를 가른다",
      "subtitle": "모델 지능은 앞서도 컴퓨트 용량·서빙 비용·개발자 신뢰에서 밀리면 시장을 내준다는 인프라 경제학 분석",
      "tags": [
            "OpenAI",
            "Anthropic",
            "Fable 5",
            "GPT 5.6",
            "cost per task",
            "compute capacity",
            "quota",
            "RSI",
            "recursive self-improvement",
            "developer mindshare"
      ],
      "videoUrl": "https://www.youtube.com/watch?v=nxr20lcqagg",
      "videoId": "nxr20lcqagg",
      "channel": "Matthew Berman",
      "duration": "19:02",
      "refDate": "2026-07-15",
      "takeaway": "세계 최고 모델(Fable 5)과 최대 매출을 가진 Anthropic이 밀리는 이유는 지능이 아니라 컴퓨트 용량 부족이다 — 2년 전 GPU 인프라에 공격적으로 베팅하지 않은 결정이, Fable을 구독에서 빼야 할 만큼의 서빙 제약과 개발자 신뢰 상실로 이어져 OpenAI에 코딩 mindshare를 넘겨주고 있다.",
      "box1": {
            "title": "1 · 2년 전의 결정 — Anthropic을 옭아매는 컴퓨트 제약",
            "html": "<p><b>모든 지표에서 앞서지만 이기지 못하는 역설.</b> Anthropic은 매출에서 OpenAI를 추월했고, Fable 5로 지구상 가장 똑똑한 모델을 보유했으며, 세계 최초로 10조 파라미터급 <b>monster 모델</b>을 만들어냈다. 그런데도 시장 인식에서 밀리는 이유는 단 하나 — <b>2년 전의 컴퓨트 인프라 투자 결정</b>이다. Dario는 인터뷰에서 AI 수요 곡선이 예측만큼 강하지 않을 경우 회사를 파산시킬 수 있다는 리스크 때문에 데이터센터에 공격적으로 베팅하지 않았다고 밝혔다. \"성장률이 연 10배가 아니라 5배거나, 1년만 빗나가도 파산한다\"는 논리였다.</p><p><b>그러나 수요는 예측보다 더 강했다.</b> 결과적으로 이 신중한 결정이 오늘날까지 발목을 잡고 있다. 여기에 세계 최초 10조 파라미터 모델이라는 요인이 겹치면서 두 악재가 <b>서로를 증폭</b>시켰다 — 가장 크고 비싼 모델을 만들었지만, 그것을 넉넉히 서빙할 컴퓨트가 없는 상황이다. Anthropic의 Tar는 \"Fable의 가용성에 대한 질문이 많았다. 구독에서 내려가지만, <b>용량이 허락하는 대로(as capacity allows)</b> 표준 구독의 일부로 복원하는 것을 목표로 한다\"고 사실상 용량 제약을 인정했다.</p><p><b>핵심 문제 — Fable을 구독에서 제거하려는 시도.</b> Anthropic은 Fable을 월정액 구독에서 빼고, 프리미엄 per-token API 가격으로만 쓰게 하려 했다. 저자는 이를 <b>전략적 대실수</b>로 본다. Fable이 구독에서 빠지면 사용자는 GPT 5.6 대비 약 10배 비싼 토큰 비용을 감수해야 하고, 그 순간 ChatGPT 구독이 압도적으로 매력적으로 보이기 때문이다. 실제 저자는 \"Fable이 구독에서 빠지면 나는 구독을 취소할 것\"이라고 말한다.</p>"
      },
      "box2": {
            "title": "2 · 숫자로 보는 승부 — 지능은 동률, 경제성은 완패",
            "html": "<p><b>지능 지수는 초박빙.</b> Artificial Analysis Intelligence Index 기준 Claude Fable 5가 <b>60점으로 1위</b>, GPT 5.6 Soul Max가 <b>59점으로 2위</b> — 단 1점 차이다. 즉 순수 지능만 놓고 보면 두 모델은 사실상 동급이다.</p><table class=\"matrix-table\"><tr><th>지표</th><th>Claude Fable 5</th><th>GPT 5.6</th></tr><tr><td>Intelligence Index</td><td><b>60 (1위)</b></td><td>59 (2위)</td></tr><tr><td>Cost per task (낮을수록 우수)</td><td>$2.75</td><td><b>약 $1</b></td></tr><tr><td>구독 포함 여부</td><td>제거 위협 / 불확실</td><td>안정적 포함</td></tr><tr><td>Quota 정책</td><td>거의 리셋 없음</td><td>잦은 리셋(48h 내 94% 확률)</td></tr></table><p><b>비용 대비 효율에서 격차가 벌어진다.</b> 동일한 지능 작업을 수행하는 데 Fable 5는 <b>task당 $2.75</b>, GPT 5.6은 <b>약 $1</b>이 든다. 지능은 거의 같은데 GPT 5.6이 <b>더 효율적이고, task당 비용이 낮으며, 해결 경로가 직접적</b>이다. Fable이 구독에서 빠지면 사용자는 차선책인 Opus 4.8 Max($180대)나 Sonnet 5로 밀려나는데, 이들 역시 GPT 5.6보다 비싸다.</p><p><b>Quota 전쟁 — OpenAI의 공세.</b> OpenAI의 Tibo 팀은 <b>거의 격일로 quota를 리셋</b>한다(저자가 willcodexquotareset.com까지 만들 정도로 밈이 됨 — 48시간 내 리셋 확률 94%). 리셋된 quota는 즉시 안 써도 <b>30일간 뱅킹</b>되고, Plus·Business·Pro의 5시간 롤링 제한도 일시 해제했다. 반면 Anthropic은 quota가 훨씬 인색하고 사실상 리셋하지 않는다 — 주간 한도를 50% 올려줘도 저자는 \"두 개 반 작업이면 소진\"된다고 지적한다. Sam Altman은 \"최고 모델 때문에 오되, 우리가 당신을 <b>경멸하지 않기(don't treat you with contempt)</b> 때문에 머문다\"며 감정 전쟁에서 우위를 굳히고 있다.</p>"
      },
      "box3": {
            "title": "3 · 실전 판단 — 지금 무엇을 하고, 무엇이 판을 뒤집나",
            "html": "<p><b>베테랑 vs 루키 프레임.</b> 저자는 두 모델을 스포츠에 비유한다. <b>GPT 5.6</b>은 GPT5 훈련의 마지막 산물로, 그 세대의 정점에 오른 <b>베테랑 선수</b> — 똑똑하고 효율적이며 직접적 해법을 찾고 신뢰성 높은 \"good game IQ\"를 가졌다. 반면 <b>Fable</b>은 리그에 갓 진입한 <b>루키</b> — 기술적으로 가장 똑똑하지만 post-training으로 짜낼 여지가 무궁무진하다. OpenAI는 이미 GPT6를 구워 post-training 중일 가능성이 높지만, Fable급이라면 더 크고 서빙 비용이 비싸 <b>동일한 수요·공급 문제</b>에 부딪힐 수 있다. 다만 OpenAI는 초기에 GPU에 공격적으로 베팅해둔 덕에 차세대 모델 서빙 준비가 유리하다.</p><p><b>실무 권고 — 단일 구독이라면 OpenAI.</b> 예산상 하나만 고른다면 저자는 <b>OpenAI 구독</b>을 추천한다. Fable이 근소하게 더 우수해도, 종합 가치는 OpenAI가 몇 배 크고, Anthropic은 Fable의 구독 포함 여부조차 불확실해 <b>그 위에 빌드하기 어렵다(build on top)</b>. 이미 ChatGPT 구독이 있다면 <b>quota를 아끼지 말고 소진하라</b> — 토큰을 비축하거나 보수적으로 쓰지 말고, 만료되는 리셋을 최대한 활용해 지금 최대한 많이 빌드하라는 것이 명확한 액션이다.</p><p><b>와일드카드 — Recursive Self-Improvement(RSI).</b> 그럼에도 Anthropic이 진 것은 아니다. 두 이유: ① Fable은 더 좋아지고 효율화될 여지가 크며, Anthropic이 컴퓨트를 확보하면 서빙이 관대해진다. ② 더 중요하게, <b>RSI가 이 논쟁 전체를 무의미하게 만들 수 있다</b>. 최고 모델이 다음 최고 모델을 연구하는 순환이 시작되면 격차는 오히려 벌어지며, \"RSI가 시작되면 앞선 자가 이긴다(whoever's in the lead wins)\". 언젠가 Fable이 스스로를 5배 효율화하면 GPT 5.6보다 훨씬 저렴해질 수도 있다. 결론: Anthropic은 매출·엔터프라이즈에서 앞서지만, <b>개발자는 최초 채택자이자 최초 이탈자</b>다. 감정·신뢰 전쟁에서 이기는 OpenAI로 개발자가 옮겨가면 1년 단위 엔터프라이즈 계약 갱신 시 기업도 뒤따를 수 있다.</p>"
      }
},

    {
      id: "agent-frameworks-2026",
      categoryId: "multi-agent",
      moduleTag: "PRODUCTION FRAMEWORK SELECTION",
      title: "2026 AI 에이전트 프레임워크 전면 비교: LangGraph vs CrewAI vs AutoGen",
      subtitle: "‘어떤 프레임워크를 쓸까’가 아니라 ‘우리 시스템에 얼마만큼의 통제권이 필요한가’로 질문을 바꾸는 프로덕션 의사결정 가이드.",
      tags: ["LangGraph", "LangChain", "CrewAI", "AutoGen", "Agno", "Semantic Kernel", "State Machine"],
      videoUrl: "https://www.youtube.com/watch?v=RSvYae1L9YI",
      videoId: "RSvYae1L9YI",
      channel: "Intellipaat",
      duration: "11:12",
      refDate: "2026-07-04",   // 영상 업로드 기준
      takeaway: "강력한 모델을 약한 시스템에 넣으면 반드시 실패하고, 단순한 모델도 강한 시스템 안에서는 무한히 확장된다 — 에이전트의 승패는 '모델'이 아니라 '프레임워크(=제어 시스템)' 선택에서 갈린다.",

      /* ---- 상세 분석서 3-BOX ---- */
      box1: {
        title: "1 · 왜 에이전트는 프로덕션에서 조용히 무너지는가",
        html: `
          <p><b>핵심 명제:</b> AI 에이전트 프레임워크는 단순한 라이브러리가 아니라 <b>제어 시스템(control system)</b>이다. 이 관점으로 보는 순간 프레임워크 선택의 모든 기준이 명확해진다.</p>
          <p>발표자는 간단한 자율 리서치 에이전트를 로컬에서 정상 작동 확인 후 방치했다가, 2시간 뒤 <b>동일 툴을 무한 반복 호출</b>하며 스스로와 논쟁하는 루프에 빠져 <b>에러·경고 하나 없이 수백 달러의 API 크레딧을 소진</b>한 사례를 든다. 원인은 모델도, 프롬프트도 아닌 <b>프레임워크(시스템 설계) 문제</b>였다.</p>
          <h5>실패의 근본 원인 — LLM의 본질</h5>
          <ul>
            <li><b>Stateless:</b> 명시적으로 메모리를 설계하지 않으면 아무것도 기억하지 못한다.</li>
            <li><b>워크플로우 안전 개념 없음:</b> 외부에서 강제하지 않으면 안전한 실행 순서를 모른다.</li>
            <li><b>‘멈춰야 할 때’를 모른다:</b> 모델은 오직 다음 토큰을 예측할 뿐, "계속(keep going)"과 "정지(stop now)"를 구분하지 못한다.</li>
          </ul>
          <p>여기에 툴·API·DB·검색엔진을 붙이는 순간, 텍스트 생성기가 아니라 <b>현실에 행동을 가하는 확률적 시스템</b>이 된다 → 루프, 환각 툴 호출, 컨텍스트 유실, 반복 실행, <b>통제 불능 비용 폭발</b>이 시작된다.</p>
        `,
      },
      box2: {
        title: "2 · 통제권 스펙트럼과 7대 프레임워크 지형도",
        html: `
          <p>모든 팀이 코드 한 줄 짜기 전에 답해야 할 질문: <b>"우리는 이 모델에 대해 얼마만큼의 통제가 필요한가?"</b> 진지한 프로덕션 시스템은 챗봇보다 <b>상태 머신(state machine)</b>처럼 동작한다 — "알아서 해"가 아니라 "여기서 시작 → 이 조건이면 저기로 → 실패하면 정지 → 위험 감지 시 사람 승인 대기(Human-in-the-loop)".</p>
          <div class="matrix-table-wrap">
          <table class="matrix-table">
            <thead><tr><th>프레임워크</th><th>포지션</th><th>최적 용도</th></tr></thead>
            <tbody>
              <tr><td><b>LangChain</b></td><td>순차 파이프라인 (기반 레이어). 경로가 이미 정해진 경우 최적</td><td>문서 Q&amp;A, RAG, 예측가능 챗봇, 리포트 생성</td></tr>
              <tr><td><b>LangGraph</b></td><td>상태 머신. 노드·전이·정지조건·재시도·사람 개입점을 명시. "현재 상태에서 무엇이 허용되는가"를 물음</td><td>금융·의료·규제 환경. 창의성보다 <b>정확성</b>이 중요한 동적 의사결정</td></tr>
              <tr><td><b>CrewAI</b></td><td>구조화된 협업. 리서처→작성자→검수자 등 역할 분담, 예측가능한 파이프라인</td><td>콘텐츠 파이프라인, 리서치, 분석, 안정적 업무 자동화</td></tr>
              <tr><td><b>AutoGen</b></td><td>개방형 에이전트 대화. 토론·반복으로 동적 문제해결 (예측성↓ 비용↑)</td><td>탐색적 연구, 전략 시뮬레이션, 경로가 미정인 복잡 추론</td></tr>
              <tr><td><b>Agno</b></td><td>경량·고속. 불필요한 추상화 제거, 런타임 직접 제어</td><td>최소 오버헤드가 필요한 빠른 에이전트</td></tr>
              <tr><td><b>Semantic Kernel</b> (MS)</td><td>플러그인 아키텍처. AI를 엔터프라이즈 1급 구성요소로 취급</td><td>기존 시스템 깊은 통합 · 엔터프라이즈</td></tr>
              <tr><td><b>Eden / LangFlow</b></td><td>노코드 시각화. 속도·접근성↑ 통제·세밀로직↓</td><td>빠른 자동화·내부 운영 (고위험 프로덕션엔 부적합)</td></tr>
            </tbody>
          </table>
          </div>
          <p><b>한 줄 요약:</b> "LangChain이 시스템을 <i>구축</i>한다면, LangGraph는 그것을 <i>통제</i>한다." 전체 트렌드는 <b>더 가볍고, 더 엄격하고, 더 시스템-네이티브(신뢰성 중심)</b>로 이동 중.</p>
        `,
      },
      box3: {
        title: "3 · 프로덕션 3대 필수 레이어 & 프레임워크 선택 결정표",
        html: `
          <p>어떤 프레임워크를 고르든, 프로덕션은 동일한 <b>3가지 도전</b>을 강제한다. 이 3개 레이어 없이는 어떤 에이전트도 프로덕션에서 살아남지 못한다.</p>
          <ol>
            <li><b>상태 관리(State):</b> 크래시가 나도 전부 잊으면 안 된다 → PostgreSQL / Redis / 벡터DB로 메모리 영속화.</li>
            <li><b>비용 통제(Cost):</b> 에이전트는 루프로 동작하고, 루프는 조용히 API 청구서를 폭발시킨다 → <b>max iterations · 토큰 예산 · 실행 캡</b> 하드리밋 강제.</li>
            <li><b>장애 복구(Recovery):</b> 툴은 실패하고 API는 깨지고 입력은 오염된다 → 에러를 잡아 <b>모델에 되먹여 구조화된 자기수정</b>을 강제.</li>
          </ol>
          <h5>🎯 최종 선택 결정표 (발표자 권고)</h5>
          <ul>
            <li>엄격한 워크플로우 · 컴플라이언스 수준 통제 → <b>LangGraph</b></li>
            <li>모듈형 AI 애플리케이션 → <b>LangChain</b></li>
            <li>멀티 에이전트 협업 → <b>CrewAI</b>(구조적 실행) / <b>AutoGen</b>(동적 협업)</li>
            <li>빠르고 가벼운 에이전트 → <b>Agno</b></li>
            <li>엔터프라이즈 통합 → <b>Semantic Kernel</b></li>
            <li>노코드 자동화 → <b>Eden / LangFlow</b></li>
          </ul>
          <p class="closing"><b>결론:</b> 최고의 에이전트는 "가장 똑똑한 모델"이 아니라 <b>"무언가 잘못됐을 때 붕괴하지 않는 시스템"</b>을 설계하는 데서 나온다. 이것이 프로토타입과 프로덕션급 시스템의 진짜 차이다.</p>
        `,
      },
    },
  ],
};
