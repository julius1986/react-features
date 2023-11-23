import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import LazyExample from "./LazyExample";
import FetchExample from "./FetchExmaple/FetchExample";

const SuspenseExamples = () => {
  return (
    <Container>
      <Title>Suspense</Title>
      <Paragraph>
        Еще не законченная технология, в данный момент применяется в
        SSR(next.js, remix).
      </Paragraph>
      <Paragraph>
        Используется для вывода спиннера(загрузки) при ленивой загрузке, а так
        же при получении данных с сервера(пока только next.js в обычном react в
        разработке React.use).
      </Paragraph>
      <LazyExample />
    </Container>
  );
};

export default SuspenseExamples;
