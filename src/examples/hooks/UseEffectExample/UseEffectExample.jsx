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
        Хук <code>useEffect</code> выполняет побочные эффекты, не блокирует
        отображение реального DOM. С помощью данного хука реализуются функции
        жизненного цикла классового компонента такие как
        <code>componentDidMount</code>, <code>componentDidUpdate</code>,
        <code>componentWillUnmount</code>.
      </Paragraph>

      <Paragraph>
        Важно помнить что после рендера виртуального DOM, выполняются хуки
        дочерних компонентов, затем родительских.
      </Paragraph>

      <Paragraph>
        Если же мы обьявим простую переменную внутри фукции, она будет
        существовать до перерендера компонента. В отличии от <code>useRef</code>
        . Так же мы можем обьявить переменную вне функции, получится анало
        <code>useRef</code>.
      </Paragraph>
      <ExampleLifecycle />
    </Container>
  );
};

export default UseEffectExample;
