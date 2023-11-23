import React from "react";

const SlowLIst = React.memo(({ list = [], search }) => {
  return (
    <>
      {list
        .filter((el) => el.includes(search))
        .map((el2, index) => (
          <div key={index}>{el2}</div>
        ))}
    </>
  );
});

export default SlowLIst;
