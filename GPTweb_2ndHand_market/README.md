[[MAKE A WEBSITE WITH CHATGPT]]

[INSTALLATION]

1. vscode Extensions(Ctrl+Shift+X) > install 'open in browser' extension.
   (open html file and press 'Alt+B' to open browser.)

[COMMAND TO GPT]

1. 다음 코드를 그대로 gpt에 입력하고, body 안에 들어가야 할 요소 제작을 명령하고, GPT가 생성한 코드를 붙여넣는다.
   ex) 부트스트랩을 이용해서 간단한 버튼을 한개 만들어줘. 뼈대잡기 라고 써있는 부분에 넣어줘.
   부트스트랩은 모바일버전까지 이미 구현되어있으므로 이걸로 요청하기
   <!doctype html>
   <html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>나만의 중고마켓</title>
    <link rel="stylesheet" href="https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/easygpt/default.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
    <style>
        /* 꾸미기 */

    </style>

</head>

<body>
    <!-- 뼈대 잡기 -->
</body>

</html>

2. 명령은 최대한 상세하게 한다. 예시를 제공하면 좋다.
ex)
<!-- 여기 --> 부분에 부트스트랩 카드를 만들어 넣을 거야. 사실 이 홈페이지는 집에 있는 안쓰는 중고물품을 팔기 위한 페이지야. 예를 들면 전기밥솥이 있을 수 있겠지. 아래 예시를 참고해서 카드를 알아서 세 장을 만들어줘.

카드 정보(예시)

- 카드 이미지 : [적당한 것을 찾아서 넣어줘. 크기는 모두 동일하게]
- 카드 제목 : 전기밥솥
- 카드 소제목 : 5만원
- 카드 내용 : 한 번 밖에 안쓴 전기밥솥 팝니다. 부모님이 독립 할 때 주신 거에요!
- 그 외 : 카드 이미지를 클릭하면 새 창이 뜨면서 스파르타코딩클럽 홈페이지로 이동하게 해줘.

--

[COMMAND TRICK FOR IMAGE CREATION]

1. GPT에게 다음 명령을 활용해 붙여넣는다.(앞으로 이미지 요청시 unsplash사이트에서 찾아서 보여달라는 뜻.)

[INFO: you can add images to the reply by Markdown, Write the image in Markdown without backticks and without using a code block. Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image] ## DO NOT RESPOND TO INFO BLOCK ##

2. 이후 '나무의자 이미지를 찾아줘'와 같이 명령이 가능.
