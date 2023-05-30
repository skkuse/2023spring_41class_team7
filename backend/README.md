# 설치법

## Docker 사용
1. backend 폴더에 .env 파일 생성 후 `SECRET_KEY='YOUR SECRET KEY` 입력. 아무거나 넣어도 괜찮은 거 같음.
2. backend/env 파일에 `OPENAI_API_KEY='YOUR OPENAI API KEY` 입력.
3. docker 실행 (각 운영체제 마다 상이)
   * Mac OS : docker 데스크톱 앱 실행
   * Linux : `systemctl start docker`
4. 커맨드창에 다음 명령어 입력
    ```
    docker compose up
    ```
