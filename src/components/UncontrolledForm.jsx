import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const ref= useRef(null); //useRef это React Hook, позволяющий ссылаться на значение, которое не требуется для рендеринга.
  //useRef даст один и тот же объект с рефом при каждом рендере.
  const clickHandler = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    console.log(ref.current.value)//ссылается на значение введенное в поле ввода
  };
  return (
    <form >
      <label>
        Ім'я:
        <input ref={ref}/>
      </label>
      <button onClick={clickHandler}>Надіслати</button>
    </form>
  );
};

export default UncontrolledForm;