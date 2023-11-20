import React from "react";
import ListItem from "../ListItem";

const List = ({ textArray = [] }) => {
  return (
    textArray.length > 0 &&
    textArray.map((item) => <ListItem key={item.id} text={item.text} />)
  );
};

export default List;
