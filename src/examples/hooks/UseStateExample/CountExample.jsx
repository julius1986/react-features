import React, { useState } from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import Button from "../../../components/Button";

const CountExample = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const firstCountClickHandler = () => {
    setFirstCount(firstCount + 1);
    setFirstCount(firstCount + 1);
    setFirstCount(firstCount + 1);
  };
  const secondCountClickHandler = () => {
    setSecondCount((prevCount) => prevCount + 1);
    setSecondCount((prevCount) => prevCount + 1);
    setSecondCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <Title>Пример со счетчиком</Title>
      <Paragraph>
        В данном примере у нас будет 2 счетчика. Один будет изменяться с помощью
        функции <b>setCount(count+1)</b>. Второй будет изменяться с помощью
        функции <b>setCount(prevCount=&gt;prevCount+1)</b> В обоих случая мы
        будем увеличивать счетчик 3 раза(3 раза будем вызывать функцию
        setCount).
      </Paragraph>
      <Container>Счетчик setCount(count + 1): {firstCount}</Container>
      <Container>
        Счетчик setCount(prevCount =&gt; count + 1): {secondCount}
      </Container>
      <Container>
        <Button
          clickHandler={firstCountClickHandler}
          text="Increase first count"
        />
        <Button
          clickHandler={secondCountClickHandler}
          text="Increase second count"
        />
      </Container>
    </Container>
  );
};

export default CountExample;
