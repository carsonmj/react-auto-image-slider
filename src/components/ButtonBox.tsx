import React from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  onBackButtonClick: () => void;
  onForwardButtonClick: () => void;
}

const ButtonBox = ({ onBackButtonClick, onForwardButtonClick }: Props) => {
  return (
    <Container>
      <ButtonWrapper type="button" onClick={onBackButtonClick} aria-label="backButton">
        <IoIosArrowBack size={"60%"} color="#646262" />
      </ButtonWrapper>
      <ButtonWrapper type="button" onClick={onForwardButtonClick} aria-label="forwardButton">
        <IoIosArrowForward size={"60%"} color="#646262" />
      </ButtonWrapper>
    </Container>
  );
};

export default React.memo(ButtonBox);

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 45%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
`;

const ButtonWrapper = styled.button`
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 50%;
  text-align: center;
  line-height: 4rem;
  background: #ffffff8c;
  cursor: pointer;
`;
