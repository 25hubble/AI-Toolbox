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
