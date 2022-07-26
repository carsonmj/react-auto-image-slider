import styled from "styled-components";

interface Props {
  children: any;
}

const Slide = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Slide;

const Container = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;
