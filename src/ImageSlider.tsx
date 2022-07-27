import React, { useState, useEffect, useRef, useCallback, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

import ButtonBox from "./components/ButtonBox";
import Indicator from "./components/Indicator";
import NoChildError from "./components/NoChildError";
import { styles as styleHelper } from "./utils/helper";

type Props = PropsWithChildren<{
  children: ReactNode | React.FunctionComponent<any>;
  effectDelay?: number;
  autoPlayDelay?: number;
}>;

const ImageSlider = ({ children, effectDelay = 800, autoPlayDelay = 2500 }: Props) => {
  const totalSlide: number = React.Children.count(children);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const slideRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const slideTimeoutRef = useRef<number | null>(null);

  const handleMoveToBackSlide = (): void => {
    currentIndex < 0 && setCurrentIndex(0);

    if (currentIndex === 0 && slideRef.current) {
      styleHelper.setEndTransitionEffect(slideRef.current, effectDelay);

      slideTimeoutRef.current = window.setTimeout(() => {
        slideRef.current && styleHelper.resetOpacityAndPosition(slideRef.current, `-${totalSlide - 1}00%`);
        setCurrentIndex(totalSlide - 1);
      }, effectDelay);

      return;
    }

    setCurrentIndex((prev: number) => prev - 1);
    slideRef.current && styleHelper.setTranslateEffect(slideRef.current, `-${currentIndex - 1}00%`, effectDelay);
  };

  const handleMoveToForwardSlide = useCallback((): void => {
    currentIndex > totalSlide && setCurrentIndex(0);

    if (currentIndex === totalSlide - 1 && slideRef.current) {
      styleHelper.setEndTransitionEffect(slideRef.current, effectDelay);

      slideTimeoutRef.current = window.setTimeout(() => {
        slideRef.current && styleHelper.resetOpacityAndPosition(slideRef.current, "0%");
        setCurrentIndex(0);
      }, effectDelay);
      return;
    }

    setCurrentIndex((prev: number) => prev + 1);

    if (slideRef.current !== null) {
      styleHelper.setTranslateEffect(slideRef.current, `-${currentIndex + 1}00%`, effectDelay);
    }
  }, [totalSlide, currentIndex, effectDelay]);

  const resetslideTimeoutRef = useCallback((): void => {
    if (slideTimeoutRef.current) {
      clearTimeout(slideTimeoutRef.current);
    }
  }, []);

  const resetTimeout = useCallback((): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    resetTimeout();

    if (autoPlay) {
      timeoutRef.current = window.setTimeout(() => {
        handleMoveToForwardSlide();
      }, autoPlayDelay);
    }

    return () => resetTimeout();
  }, [currentIndex, autoPlay, autoPlayDelay, handleMoveToForwardSlide, resetTimeout]);

  useEffect(() => {
    slideRef.current?.addEventListener("mouseover", () => setAutoPlay(false));
    slideRef.current?.addEventListener("mouseout", () => setAutoPlay(true));

    return () => {
      setCurrentIndex(0);
      resetslideTimeoutRef();
    };
  }, []);

  return (
    <>
      {totalSlide < 1 ? (
        <NoChildError />
      ) : (
        <Container>
          <SlideWrapper ref={slideRef}>{children}</SlideWrapper>
          <ButtonBox onBackButtonClick={handleMoveToBackSlide} onForwardButtonClick={handleMoveToForwardSlide} />
          <Indicator total={totalSlide} currentIndex={currentIndex} />
        </Container>
      )}
    </>
  );
};

export default ImageSlider;

const Container = styled.article`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const SlideWrapper = styled.section`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
`;
