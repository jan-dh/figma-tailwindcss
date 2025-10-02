import React from 'react';
import Tailwind from '../../icons/tailwind';
import Github from '../../icons/github';

const Footer = () => {
  return (
    <div className="w-full bg-gray-50 py-4">
      <div className="px-4 flex text-xs text-tailwind font-medium">
        <div className="w-1/2">
          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center"
          >
            <Tailwind />
            <span className="ml-2">tailwindcss</span>
          </a>
        </div>
        <div className="w-1/2 text-right">
          <a
            href="https://github.com/jan-dh/figma-tailwindcss/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center"
          >
            <Github />
            <span className="ml-2">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// https://tailwindcss.com/
