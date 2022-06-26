import { useState } from 'react';

function Converter() {
  const [hex, setHex] = useState('#34495E');
  const [rgb, setRgb] = useState(hexToRgb(hex));
  const [currentValue, setCurrentValue] = useState('#34495E');

  function hexToRgb(hex) {
    const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (regex) {
      const r = parseInt(regex[1], 16);
      const g = parseInt(regex[2], 16);
      const b = parseInt(regex[3], 16);
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      return null;
    }
  }

  function handleChange(e) {
    setCurrentValue(e.target.value);

    const rgbFromCurrentValue = hexToRgb(e.target.value);

    if (e.target.value.length === 7 && rgbFromCurrentValue !== null) {
      setHex(e.target.value);
      setRgb(rgbFromCurrentValue);
    } else if (e.target.value.length >= 7) {
      setHex('#FF4500');
      setRgb('Ошибка!');
    }
  }

  return (
    <div
      className='d-flex justify-content-center align-items-center vw-100 vh-100'
      style={{ backgroundColor: hex }}
    >
      <form className='d-flex flex-column w-20'>
        <input
          className='fs-3 text-center p-2 mb-2'
          value={currentValue}
          onChange={handleChange}
        />
        <div
          className='fs-3 text-center p-2 bg-dark'
          style={{ color: 'white' }}
        >
          {rgb}
        </div>
      </form>
    </div>
  );
}

export default Converter;
