import React, { useMemo } from "react";
import Container from "../../../../components/Container";

const Tab = ({ itemsList, ...props }) => {
  const list = useMemo(() => {
    let i = itemsList;
    const arr = [];
    while (i > 0) {
      arr.push({ id: i, text: i });
      i--;
    }
    return arr;
  }, [itemsList]);
  return (
    <Container>
      {list.map((item) => (
        <Item key={item.id} item={item} {...props} />
      ))}
    </Container>
  );
};

const Item = ({ item, itemCount }) => {
  let i = itemCount;
  while (i > 0) {
    i--;
  }
  return <div>{item.text}</div>;
};

export default Tab;
