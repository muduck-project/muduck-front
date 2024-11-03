import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#4281A4", //포인트 컬러
  back: "#F0F0F0", //백 컬러
  mainColor: "#0F0F0F", //메인 텍스트 컬러
};

export const padding = {
  upPaddingPc: "100px", //위아래 pc버전 패딩
  sidePaddingPc: "120px", //사이드 pc버전 패딩
  upPaddingMo: "80px", //위아래 mo버전 패딩
  sidePaddingMo: "100px", //사이드 Mo버전 패딩
};

export const maxWidth = {
  maxWidthPc: "1600px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

* {box-sizing: border-box;}

body {
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color: ${colors.mainColor};
    font-size: 16px;
    letter-spacing: -1px;
    font-weight: 400;
    word-break : keep-all;
}

a {
    text-decoration: none;
    color: ${colors.mainColor};
}
`;
