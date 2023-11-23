import React, { Suspense } from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import FetchComp from "./FetchComp";

const FetchExample = () => {
  return (
    <Container>
        <h1>Пока в разработке еще не работает в основной версии.</h1>
      <Title>Пример с загрузкой компонентов по готовности запроса.</Title>
      <Paragraph>
        В данном примере мы создадим 3 компонента с запросами и отрендерим их
        после получения данных.
      </Paragraph>


<Suspense fallback={<div>LOADING...</div>}>

      <FetchComp name={"Comments"} url={"https://jsonplaceholder.typicode.com/comments"}/>
</Suspense>
    </Container>
  );
};

export default FetchExample;
