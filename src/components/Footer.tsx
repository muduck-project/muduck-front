import styled from "styled-components";
import { colors, maxWidth, padding } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  padding: ${padding.upPaddingPc} ${padding.sidePaddingPc};
  background-color: ${colors.back};
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${maxWidth.maxWidthPc};
  background-color: red;
`;

export const Footer = () => {
  return (
    <Container>
      <Box>&copy; Minzy / Seyeon</Box>
    </Container>
  );
};
