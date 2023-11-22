import React, { useEffect, useState } from "react";
import Title from "../../../../components/Title";
import Button from "../../../../components/Button";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount((count) => count + 1);
  };

  //аналог componentDidMount и componentWillUnmount
  useEffect(() => {
    console.log("Parent component useEffect - MOUNT");
    return () => {
      console.log("Parent component useEffect - UNMOUNT");
    };
  }, []);

  //Эффект будет выполняться при монтировании, обновлении значения count, а так же будет срабатывать
  //функция обратного вызова при изменении значения count и при размонтировании компонента
  useEffect(() => {
    console.log("Parent component useEffect - MOUNT/UPDATE WITH COUNT");
    return () => {
      console.log("Parent component useEffect - UNMOUNT WITH COUNT");
    };
  }, [count]);

  useEffect(() => {
    console.log("Parent component useEffect - MOUNT EVERY RENDER");
    return () => {
      console.log("Parent component useEffect - UNMOUNT EVERY RENDER");
    };
  });

  return (
    <div>
      <Button clickHandler={clickHandler} text="Increase count" />
      <Title>Count is: {count}</Title>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
