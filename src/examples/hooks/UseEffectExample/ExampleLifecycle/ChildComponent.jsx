import React, { useEffect } from "react";

const ChildComponent = () => {
  //аналог componentDidMount и componentWillUnmount
  useEffect(() => {
    console.log("Child component useEffect - MOUNT");
    return () => {
      console.log("Child component useEffect - UNMOUNT");
    };
  }, []);

  //Эффект будет выполняться при монтировании, обновлении значения count, а так же будет срабатывать
  //функция обратного вызова при изменении значения count и при размонтировании компонента
  useEffect(() => {
    console.log("Child component useEffect - MOUNT/UPDATE EVERY RENDER");
    return () => {
      console.log("Child component useEffect - UNMOUNT EVERY RENDER");
    };
  });

  return <div>Child Component</div>;
};

export default ChildComponent;
