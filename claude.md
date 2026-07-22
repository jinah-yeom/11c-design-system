# Visual Development & Testing (Quick Check)

Playwright MCP를 사용한 빠른 시각 체크 규칙입니다.

1. 이번 변경으로 영향 받는 화면을 식별한다.
2. Playwright MCP로 해당 화면에 진입한다.
3. 아래 뷰포트 기준으로 스크린샷을 찍고 깨짐/오버플로우/잘림을 기록한다.
   - 어드민 웹: 1280px / 1440px / 1920px
   - Keeper 앱: 375px / 390px / 412px
4. 콘솔/네트워크 에러가 없는지 확인한다.
5. design-principles.md 기준으로 수정 포인트 To-Do를 만든다.
6. 수정 후 다시 1)로 루프한다.
