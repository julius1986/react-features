import React from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import FilteredListExample from "./FilteredListExample";

const useDeferredValueExample = () => {
  return (
    <Container>
      <Title>Хук useDeferredValue</Title>
      <Paragraph>
        По сути это аналог <code>debaunce</code>. Позволяет производить рендер со старым
        значением, пока новое значение изменяется(вводится)
      </Paragraph>

      <Paragraph>
        Можно использоать при фильтровании, пока мы вводим в <code>input</code>{" "}
        новое значение, рендерится список исходя из старого значения.
      </Paragraph>

      <FilteredListExample />
    </Container>
  );
};

export default useDeferredValueExample;
