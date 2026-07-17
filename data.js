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
