import React from "react";
import Container from "../../../components/Container/Container";
import Title from "../../../components/Title/Title";
import Paragraph from "../../../components/Paragraph/Paragraph";
import CountExample from "./CountExample";

const UseStateExample = () => {
  return (
    <Container>
      <Title>Хук "useState"</Title>
      <Paragraph>
        Заменяет конструктор в классовых компонентах. Выполняется 1 раз при
        монтировании компонента и возвращает 2 параметра. Первый параметр - это
        переменная(реактивное состояние) содержащая проинициализированные
        данные. Второй параметр - это функция(меморизированная) для установки
        значения состояния. Реактивное состояние - это когда значение переменной
        изменяется компонент должен перерендериться, соответсвенно и дочерние
        компоненты тоже должны перерендериться.
      </Paragraph>
      <Paragraph>
        Если же мы хотим установить значение состояния используя значение
        старого состояния, то мы должны в <code>setState</code> передать функцию
        с одним аргументом(предыдущее состояние).
      </Paragraph>
      <CountExample />
    </Container>
  );
};

export default UseStateExample;
