import React, { Suspense, lazy, useState } from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import Button from "../../../components/Button";
// import BigComp1 from "./BigComp1";
// import BigComp2 from "./BigComp2";
// import BigComp3 from "./BigComp3";
const BigComp1 = lazy(() => import("./BigComp1"));
const BigComp2 = lazy(() => import("./BigComp2"));
const BigComp3 = lazy(() => import("./BigComp3"));

const LazyExample = () => {
  const [isShow, setIsShow] = useState(false);
  const showTogle = () => {
    setIsShow((isShow) => !isShow);
  };
  return (
    <Container>
      <Title>Пример ленивой(lazy) загрузки.</Title>
      <Paragraph>
        Дает возможность быстрее загрузить приложение, подтягивает все
        необходимое по запросу.
      </Paragraph>
      <Paragraph>
        В данном примере мы попробуем подтянуть 3 файла с текстом. после
        подгрузки бандлы(файлы) хранятся в кеше.
      </Paragraph>
      <div>
        <Button clickHandler={showTogle} text="Togle" />
      </div>
      <div>
        <Suspense fallback={<div>LOADING...</div>}>
          {isShow && <BigComp1 />}
          {isShow && <BigComp2 />}
          {isShow && <BigComp3 />}
          <div></div>
        </Suspense>
      </div>
    </Container>
  );
};

export default LazyExample;
