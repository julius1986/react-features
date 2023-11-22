import React from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import ExampleLifecycle from "./ExampleLifecycle";

const UseEffectExample = () => {
  return (
    <Container>
      <Title>Хук useEffect</Title>
      <Paragraph>
        Хук useEffect выполняет побочные эффекты, не блокирует отображение
        реального DOM. С помощью данного хука реализуются функции жизненного
        цикла классового компонента такие как componentDidMount,
        componentDidUpdate, componentWillUnmount.
      </Paragraph>

      <Paragraph>
        Важно помнить что после рендера виртуального DOM, выполняются хуки
        дочерних компонентов, затем родительских.
      </Paragraph>

      <Paragraph>
        Если же мы обьявим простую переменную внутри фукции, она будет
        существовать до перерендера компонента. В отличии от useRef. Так же мы
        можем обьявить переменную вне функции, получится анало useRef.
      </Paragraph>
      <ExampleLifecycle />
    </Container>
  );
};

export default UseEffectExample;
