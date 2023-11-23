import React, {
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";
import Container from "../../../../components/Container";
import Title from "../../../../components/Title";
import Paragraph from "../../../../components/Paragraph";
import SlowLIst from "./SlowLIst";

const initValue = () => {
  let i = 30000;
  const arr = [];
  while (i > 0) {
    i--;
    arr.push(String(Math.trunc(Math.random() * 1000)));
  }
  return arr;
};

const FilteredListExample = () => {
  const [originList] = useState(initValue());
  const [isPending, startTransition] = useTransition();
  const [inputWithLag, setInputWithLag] = useState("");
  const [inputGood, setInputGood] = useState("");
  const goodValue = useDeferredValue(inputGood);

  const [inputGoodSecond, setInputGoodSecond] = useState("");
  const goodValueSecond = useDeferredValue(inputGoodSecond);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    startTransition(() => {
      setFilteredList(originList.filter((el) => el.includes(goodValueSecond)));
    });
  }, [goodValueSecond, originList]);

  const changeHandlerLag = (e) => {
    setInputWithLag(e.target.value);
  };
  const changeHandlerGood = (e) => {
    setInputGood(e.target.value);
  };
  const changeHandlerGoodSecond = (e) => {
    setInputGoodSecond(e.target.value);
  };
  return (
    <Container>
      <Title>Пример с фильтрованным списком.</Title>
      <Paragraph>
        В данном примере у нас будет 2 поля input и список из чисел. В одном
        input мы будем использовать useDefferedValue во втором нет.
        <b>Для лучшей наглядности можно замедлить процессор.</b>
      </Paragraph>
      <Paragraph>
        В первой колонке мы просто выводим список как только у нас меняется
        input.
      </Paragraph>
      <Paragraph>
        Во второй колонке мы передает отложенное значение для фильтра.
        Используем useDeferredValue. Пу сути это аналог debounce.
      </Paragraph>
      <Paragraph>
        В третьей колонке мы используем отложенное значение, а так же прерывания
        рендера с помощь useTransition. Однако так как у нас элементы списка это
        простые числа не требующие вычислений это не сильно эффективно.
      </Paragraph>

      <Paragraph>
        В третьем примере мы могли бы использовать useTransition вместо
        useDeferredValue. Однако теоретически лучше все сразу использовать.
      </Paragraph>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div>
            <h4>Без хуков</h4>
            <input type="text" onChange={changeHandlerLag} />
          </div>
          <div>
            <SlowLIst list={originList} search={inputWithLag} />
          </div>
        </div>
        <div>
          <div>
            <h4>useDeferredValue</h4>
            <input type="text" onChange={changeHandlerGood} />
          </div>
          <div>
            <SlowLIst list={originList} search={goodValue} />
          </div>
        </div>
        <div>
          <div>
            <h4>useDeferredValue + useTransition</h4>
            <input type="text" onChange={changeHandlerGoodSecond} />
          </div>
          <div>
            {isPending ? (
              <div>LOADING</div>
            ) : (
              filteredList.map((el2, index) => <div key={index}>{el2}</div>)
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FilteredListExample;
