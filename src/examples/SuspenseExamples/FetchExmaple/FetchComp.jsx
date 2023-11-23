import React from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";

const fetchData = async (url) => {
  return await (await fetch(url)).json();
};

const FetchComp = ({ url, name }) => {
  const data = React.use(fetchData(url));

  return (
    <Container>
      <Title>{name}</Title>
      {data.map((el) => (
        <div key={el.id}>{el.name}</div>
      ))}
    </Container>
  );
};

export default FetchComp;
