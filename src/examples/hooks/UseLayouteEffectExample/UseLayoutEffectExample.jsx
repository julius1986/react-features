import React from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import List from "../../../components/List";
import ExampleObject from "./ExampleObject";

const UseLayoutEffectExample = () => {
  return (
    <>
      <Container>
        <Title>Хук "useLayoutEffect"</Title>
        <Paragraph>
          Хук аналогичен <code>useEffect</code>, за исключением того, что
          блокирует отрисовку виртуального DOM в реальный.
        </Paragraph>
        <Paragraph>
          Выполняется сразу после рендеринга компонента(так же как и
          <code>useEffect</code>). Выполняется раньше <code>useEffect</code>.
          Аналог useDidMount в классовых компонентах.
        </Paragraph>
        <Paragraph>Используется если необходимо:</Paragraph>
        <List
          textArray={[
            {
              id: 1,
              text: "Работать с виртуальным DOM до того как будет отрисован реальный DOM.",
            },
            {
              id: 2,
              text: "Необходимо именно те параметры обьектов DOM которые будут отрисованы.",
            },
            {
              id: 3,
              text: "Могут быть проблемы с стейтом, если он учавствует в отрисовке реального DOM",
            },
            {
              id: 4,
              text: "Получение ширины, высоты(страницы, обьекта). Мерцание обьектов.",
            },
          ]}
        />
      </Container>
      <ExampleObject />
    </>
  );
};

export default UseLayoutEffectExample;
