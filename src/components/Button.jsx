import React from 'react';

const Button = ({href, target, title, styles}) => {
  return (
    <button
      type="button"
      className={`text-[18px] px-6 py-[10px] font-poppins font-medium text-primary outline-none rounded-xl ${styles} hover:scale-105 duration-150`}
    >
      <a href={href} target={target}>{title}</a>
    </button>
  );
};

export default Button;
