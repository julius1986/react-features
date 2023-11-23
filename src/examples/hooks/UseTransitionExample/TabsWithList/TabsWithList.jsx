import React, { useState, useTransition } from "react";
import Container from "../../../../components/Container";
import Title from "../../../../components/Title";
import Paragraph from "../../../../components/Paragraph";
import Tab from "./Tab";
import Button from "../../../../components/Button";

const TabsWithList = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("");
  const clickHandler = (tabName) => {
    startTransition(() => {
      setTab(tabName);
    });
  };
  return (
    <Container>
      <Title>Пример вкладок с вложенными списками</Title>
      <Paragraph>
        В данном примере у нас будет 3 вкладки с вложенными списками элементы
        которых долго отрисовываются. Отрисовка этих списков будет занимать
        много времени. Нам необходимо будет переходить между вкладками не
        дожидаясь окончания их отрисовки.
      </Paragraph>
      <Paragraph>
        Выглядит так, что при изменении состояния в transition, сначала
        выполняются вычисления и только потом меняется состояние и происходит
        рендер реального DOM.
      </Paragraph>
      <Button text={"Tab1"} clickHandler={clickHandler.bind(null, "tab1")} />
      <Button text={"Tab2"} clickHandler={clickHandler.bind(null, "tab2")} />
      <Button text={"Tab3"} clickHandler={clickHandler.bind(null, "tab3")} />
      <Button text={"Clear"} clickHandler={clickHandler.bind(null, "")} />
      {tab === "tab1" && !isPending && (
        <Tab itemsList={10000} itemCount={1000000} />
      )}
      {tab === "tab2" && !isPending && (
        <Tab itemsList={10000} itemCount={100000} />
      )}
      {tab === "tab3" && !isPending && (
        <Tab itemsList={10000} itemCount={10000} />
      )}
      {isPending && <div>Loading {tab}</div>}
    </Container>
  );
};

export default TabsWithList;
