# Image Slider

![Generic badge](https://img.shields.io/badge/version-1.0.0-green.svg)

#### React auto 이미지 슬라이드 컴포넌트

## How to use

터미널의 명령어를 실행하여 설치 후 사용할 수 있도록 npm으로 배포되었습니다.

- [npm | react-auto-image-slider](https://www.npmjs.com/react-auto-image-slider)

```
npm install react-auto-image-slider
```

**In your react project**

```javaScript
import ImageSlider, { Slide } from "react-auto-image-slider";

function App() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src="landscape.jpg" />
      </Slide>
      <Slide>
        <img alt="img2" src="landscape2.JPG" />
      </Slide>
      <Slide>
        <img alt="img1" src="landscape.JPG" />
      </Slide>
    </ImageSlider>
  );
}

export default App;
```

### Options(component props)

`effectDelay` 화면 전환 효과 딜레이 시간 설정(ms)

`autoPlayDelay` 자동 슬라이드 전환 시간 설정(ms)

## Features

- **버튼 컨트롤**
  <br>
  <img width="480" alt="manual_control" src="https://user-images.githubusercontent.com/54696956/181122801-3c6600f5-8af5-469a-810e-9e68dfe92c93.gif"><p>뒤로가기, 앞으로가기 버튼을 클릭하여 슬라이드를 컨트롤 할 수 있습니다.</p>
  <br>

- **오토 슬라이드**
  <br>
  <img width="480" alt="autoplay" src="https://user-images.githubusercontent.com/54696956/181122804-6d72e61a-ae21-4ba2-ab01-1a59c3bdd2b9.gif"><p>오토 슬라이드 기능을 제공합니다. 마우스 커서가 이미지에 위치하면 슬라이드 기능이 일시 정지되고, 영역을 벗어나면 다시 활성화 됩니다.</p>
  <br>

- **반응형**
  <br>
  <img width="480" alt="responsive" src="https://user-images.githubusercontent.com/54696956/181122768-d0a807bf-a9a7-49f0-956e-4a0f86a8ead1.gif"><p>반응형을 지원합니다. 윈도우 크기에 맞춰 이미지 사이즈가 조정됩니다.</p>
  <br>

- **인디케이터**
  이미지 순서를 확인할 수 있는 인디케이터를 제공합니다. (슬라이드가 10개 이하일 경우 원형 인티케이터, 10개 초과일 경우 숫자로 표시)

- **최소 이미지 갯수** 슬라이드는 최소 1개 이상이어야합니다. 최대 갯수는 제한이 없습니다.

<br>

## ⚠️ Requirement

최신 Chrome Browser 사용을 권장합니다.
<br>

## Skills

### Client

- React
- ReactDOM
- typescript
- styled-components

### Test

- Testing Library

<br>

## Information

#### uuid(사용한 라이브러리)

indicator 컴포넌트에서 array의 `map` 메서드를 사용하여 여러 개의 indicator를 렌더링하는 로직을 작성하였습니다. 이때 고유한 key값 생성을 위해 uuid 라이브러리를 사용했습니다.
<br>

#### 컴포넌트 최적화

작은 단위의 컴포넌트와 로직으로 구성된 패키지이기 때문에 컴포넌트에 문제가 발생하는 경우는 없었습니다. 하지만 현재 보여지고 있는 슬라이드가 변경될 때마다 `Slide`컴포넌트를 리렌더링하게 된다면 비효율적일 것 같아 모든 Slide를 X축으로 길게 배치해둔 다음 `useRef`를 사용해서 current의 X축의 위치를 조정하는 방식으로 렌더링 횟수를 줄였습니다. 또한, `useCallback`을 사용하여 불필요한 함수의 재생성을 막고 함수를 재사용할 수 있도록 구성하였습니다.
<br>

#### 관심사 분리

관심사를 분리하여 폴더 구조 및 파일을 생성하였습니다.

Button관련 `ButtonBox.tsx` 파일, Indicator관련 `Indicator.tsx`, Error 컴포넌트인 `NoChildError.tsx`로 파일을 분리하여 관심사별로 작업하였습니다.

`src`폴더 안에 `components`, `utils(helper 함수)`, `test` 서브 폴더를 생성하고 파일을 분리하였습니다.
