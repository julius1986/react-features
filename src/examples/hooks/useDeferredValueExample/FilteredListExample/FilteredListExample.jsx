import React, { useDeferredValue, useState } from "react";
import Container from "../../../../components/Container";
import Title from "../../../../components/Title";
import Paragraph from "../../../../components/Paragraph";
import SlowLIst from "./SlowLIst";

const initValue = () => {
  let i = 10000;
  const arr = [];
  while (i > 0) {
    i--;
    arr.push(String(Math.trunc(Math.random() * 1000)));
  }
  return arr;
};

const FilteredListExample = () => {
  const [originList] = useState(initValue());
  const [inputWithLag, setInputWithLag] = useState("");
  const [inputGood, setInputGood] = useState("");
  const goodValue = useDeferredValue(inputGood);

  const changeHandlerLag = (e) => {
    setInputWithLag(e.target.value);
  };
  const changeHandlerGood = (e) => {
    setInputGood(e.target.value);
  };
  return (
    <Container>
      <Title>Пример с фильтрованным списком.</Title>
      <Paragraph>
        В данном примере у нас будет 2 поля input и список из чисел. В одном
        input мы будем использовать useDefferedValue во втором нет.
        <b>Для лучшей наглядности можно замедлить процессор.</b>
      </Paragraph>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div>
            <input type="text" onChange={changeHandlerLag} />
          </div>
          <div>
            <SlowLIst list={originList} search={inputWithLag} />
          </div>
        </div>
        <div>
          <div>
            <input type="text" onChange={changeHandlerGood} />
          </div>
          <div>
            <SlowLIst list={originList} search={goodValue} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FilteredListExample;
