/* eslint-disable no-param-reassign */
import React, { useGlobal } from 'reactn';
import FontSize from './FontSize';
import { calculatePosition } from '../../helpers/helpers';

const FontSizes = () => {
  const [fontSizes, setFontSizes] = useGlobal('fontSize');
  const [baseFontSize, setBaseFontSize] = useGlobal('baseFontSize');
  const [borderRadii, setBorderRadii] = useGlobal('borderRadius');

  const updateBorderRadii = (base) => {
    const newRadii = [];
    borderRadii.forEach((radius, i) => {
      const name = `rounded-${i}`;
      const value = `${radius.value / base}rem`;
      newRadii.push({ name, value });
    });
    setBorderRadii(newRadii);
  };

  const updateFontSizes = (e) => {
    // Find index of selected value
    const basePosition = fontSizes.findIndex((x) => x.value === e.target.value);
    const size = Object.keys(fontSizes).length;
    const newFontSizes = fontSizes;
    // Loop over fontsizes and set appropriate name
    newFontSizes.forEach((item, i) => {
      item.name = calculatePosition(i, basePosition, size);
    });
    setBaseFontSize(Number(e.target.value));
    updateBorderRadii(Number(e.target.value));
    setFontSizes(newFontSizes);
  };

  return (
    <React.Fragment>
      <label htmlFor="sizeSelect" className="block mt-4">
        Pick a base font-size
      </label>
      <select
        className="form-control form-control--select mt-2"
        value={baseFontSize}
        onChange={updateFontSizes}
      >
        <option value="">-</option>
        {Object.keys(fontSizes).map((i) => (
          <option value={fontSizes[i].value} key={i}>
            {fontSizes[i].value}px
          </option>
        ))}
      </select>
      <div className="mt-4 code-block">
        {Object.keys(fontSizes).map((i) => (
          <FontSize key={i} {...fontSizes[i]} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default FontSizes;
