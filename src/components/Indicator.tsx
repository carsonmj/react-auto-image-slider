import styled from "styled-components";
import { generateKeys } from "../utils/helper";

interface Props {
  total: number;
  currentIndex: number;
}

interface IndicatorItemProps {
  isCurrent?: boolean;
}

const Indicator = ({ total, currentIndex }: Props) => {
  const renderIndicatorItem = () => {
    const keys: Array<string> = generateKeys(total);

    return keys.map((key, index) => {
      if (index === currentIndex) {
        return <IndicatorItem key={key} isCurrent={true} />;
      } else {
        return <IndicatorItem key={key} />;
      }
    });
  };

  return (
    <Container data-testid="indicatorContainer">
      {total < 10 ? (
        renderIndicatorItem()
      ) : (
        <TextIndicator>
          {currentIndex + 1} of {total}
        </TextIndicator>
      )}
    </Container>
  );
};

export default Indicator;

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 95%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IndicatorItem = styled.span<IndicatorItemProps>`
  width: 1rem;
  height: 1rem;
  margin: 0.4rem;
  border-radius: 50%;
  background: ${(props) => (props.isCurrent ? "#242424d9" : "#585858c2")};
  cursor: pointer;
`;

const TextIndicator = styled.p`
  color: "#242424d9";
`;
