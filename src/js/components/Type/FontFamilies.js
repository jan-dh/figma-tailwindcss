import React, { useGlobal } from 'reactn';
import Family from './FontFamily';

const FontFamilies = () => {
  const [fontFamilies] = useGlobal('fontFamily');
  return (
    <div className="code-block text-white mt-4">
      {Object.keys(fontFamilies).map((i) => (
        <Family key={i} {...fontFamilies[i]} />
      ))}
    </div>
  );
};

export default FontFamilies;
