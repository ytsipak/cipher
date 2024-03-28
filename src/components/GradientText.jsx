import React from 'react';

const GradientText = ({title, angle}) => {
  return (
    <span
      className={`${angle === 'left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#333] to-white bg-clip-text text-transparent`}
    >
      {title}
    </span>
  );
};

export default GradientText;
