import React, { useState } from 'react';
import './ControlledForm.css';

const ControlledForm = () => {
  const [value, setValue] = useState('apple'); // 'apple' - default значение для select используемое в начальном рендеринге
//useState - это хук, который возвращает значение с состоянием value и функцию setValue для его обновления.

  const handleSelect = (event) => {
    setValue(event.target.value);
  };
  return (
    <form>
        <label className="label-conteiner">
             Pick a fruit:
            <select className="conteiner"  value={value} onChange={handleSelect}>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
      </label>
    </form>
  );
};

export default ControlledForm;