import React, { useState } from "react";
import Container from "../../../../components/Container";
import ParentComponent from "./ParentComponent";
import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import Paragraph from "../../../../components/Paragraph";

const ExampleLifecycle = () => {
  const [isShow, setIsShow] = useState(true);
  const clickHandler = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <Container>
      <Title>Пример жизненного цикла компонентов</Title>
      <Paragraph>
        <b>
          В данном примере мы видим какие хуки раньше выполняются. Нужно
          выключить strict mode в index.
        </b>
      </Paragraph>
      <Paragraph>
        Сначала выполняются хуки дочерних компонентов затем родителя.
        Очередность может меняться только, если компонент был удален из DOM в
        этом случае хуки удаленного компонента при размонтировании выполнятся
        позже.
      </Paragraph>
      <Button clickHandler={clickHandler} />
      {isShow && <ParentComponent />}
    </Container>
  );
};

export default ExampleLifecycle;
