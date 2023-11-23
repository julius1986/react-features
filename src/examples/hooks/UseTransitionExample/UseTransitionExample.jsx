import React from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import TabsWithList from "./TabsWithList";

const UseTransitionExample = () => {
  return (
    <Container>
      <Title>Хук UseTransition</Title>
      <Paragraph>
        Хук используется для прерывания рендера, при изменении состояния. Дает
        возможность обновления состояния без блокирования отрисовки реального
        DOM.
      </Paragraph>
      <Paragraph>
        Возвращает 2 параметра. 1й - происходит ли transition, 2й -
        функция(только синхронная) для старта transition в которую передают
        логику которая изменяет состояние setState. Если мы не используем
        setState то для этого есть хук useDefferedValue.
      </Paragraph>
      <Paragraph>
        Можно использовть при фильтрации, а так же при переходе страниц или
        табов(если долго грузятся страницы).
      </Paragraph>
      <TabsWithList />
    </Container>
  );
};

export default UseTransitionExample;
