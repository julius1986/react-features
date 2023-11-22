import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "../../../components/Button";
import Paragraph from "../../../components/Paragraph";

const textInit = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero adipisci laboriosam placeat itaque quisquam accusantium eum quae 
laudantium optio iusto harum aperiam facilis ipsum quaerat, autem maxime id molestiae fugit similique aliquam saepe? Odit libero porro 
enim excepturi. A voluptas temporibus consectetur optio nulla nesciunt aut facilis est, similique pariatur. Itaque debitis corporis nisi 
harum, suscipit temporibus hic distinctio eos eius excepturi, voluptatum iste nemo molestias magnam tenetur earum? Debitis atque quae illum 
quisquam, minus placeat, at expedita similique porro fuga ut blanditiis perferendis deserunt magni nostrum magnam repudiandae quis praesentium 
animi aut. Temporibus laborum aspernatur quas totam atque?
`;
const anotherText = "Small text";

const divStyles = {
  width: 300,
  verticalAlign: "top",
  border: "3px solid black",
  display: "inline-block",
};

const ExampleObject = () => {
  const [someTextUseEffect, setSomeTextUseEffect] = useState(textInit);
  const [someTextUseLayoutEffect, setSomeTextUseLayoutEffect] =
    useState(textInit);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setSomeTextUseEffect(anotherText);
  }, [show]);

  useLayoutEffect(() => {
    setSomeTextUseLayoutEffect(anotherText);
  }, [show]);

  const showClickHandler = () => {
    setShow((show) => !show);
    setSomeTextUseEffect(textInit);
    setSomeTextUseLayoutEffect(textInit);
  };

  return (
    <div>
      <div>
        <Button clickHandler={showClickHandler} />
      </div>

      <Paragraph>
        В данном примере у нас есть 2 блока див, которые стилизированы
        одинаково. Есть 2 переменные в которых хранится текст(изначально текст
        большой). При инициализации приложения эти 2 переменные заполняются
        большим текстом. После чего выполняются хуки useEffect и useLayoutEffect
        в которых, 2 переменные заполняются маленьким текстом. Тоже самое
        происходит при клике на кнопку. Мы можем видеть, что левый блок, который
        использует useEffect мерцает. Это из-за того, что выводится начальное
        значение(большой текст), а затем в переменную помещается маленький
        текст. Второй блок выводится корректно, там используется
        useLayoutEffect. useLayoutEffect блокирует вывод реального дом,
        выполняет setState и после обновления корректного текста отображает в
        реальном DOM.
      </Paragraph>
      {show && (
        <div>
          <div style={divStyles}>{someTextUseEffect}</div>
          <div style={divStyles}>{someTextUseLayoutEffect}</div>
        </div>
      )}
    </div>
  );
};

export default ExampleObject;
