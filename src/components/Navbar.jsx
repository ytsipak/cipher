import {navLinks} from '../constants';
import {symbols} from '../assets';
import {useState} from 'react';
import Button from './Button';

const NavLinksSection = ({
  active,
  setActive,
  title,
  index,
  id,
  margin,
  textSize,
  bold,
}) => (
  <li
    className={`${textSize || 'text-[18px]'} ${index === navLinks.length - 1 ? 'mr-0' : `${margin || 'mr-16'}`} font-poppins ${bold || 'font-normal'} cursor-pointer ${active === title ? 'text-white' : 'text-dimWhite'} `}
    onClick={() => setActive (title)}
  >
    <a href={`#${id}`}>{title}</a>
  </li>
);

const Navbar = () => {
  const [active, setActive] = useState ('Home');
  const [toggle, setToggle] = useState (false);

  return (
    <nav className="w-full flex justify-between items-center absolute py-8 navbar z-10">
      <a href="#home" className="flex items-center gap-4">
        <p className="text-[18px] sm:text-[30px] font-KronaOne font-bold tracking-widest uppercase text-primaryLime">
          Cipher.
        </p>
      </a>

      <ul className="md:flex justify-end items-center list-none hidden">
        {navLinks.map ((nav, index) => (
          <NavLinksSection
            {...nav}
            key={nav.id}
            active={active}
            setActive={setActive}
            index={index}
          />
        ))}
      </ul>

      <div className="flex flex-1 justify-end items-center md:hidden">

        <svg
          className="w-[28px] h-[28px] object-contain fill-primaryWhite"
          onClick={() => setToggle (!toggle)}
        >
          <use
            href={toggle ? `${symbols}#icon-close` : `${symbols}#icon-menu`}
          />
        </svg>

        <div
          className={`${!toggle ? 'hidden' : 'flex'} absolute min-w-[140px] top-20 right-0 mx-4 my-2 p-6 bg-black-gradient rounded-xl sidebar`}
        >
          <ul className="flex flex-1 flex-col justify-end items-start list-none">
            {navLinks.map ((nav, index) => (
              <NavLinksSection
                {...nav}
                key={nav.id}
                active={active}
                setActive={setActive}
                index={index}
                margin="mb-4"
                textSize="text-[16px]"
                bold="font-medium"
              />
            ))}
          </ul>
        </div>
      </div>

      <Button
        href="https://www.google.com/search?q=Cipher+-+Crypto+Investing+Platform"
        target="blank"
        title="Explore now"
        styles="bg-primaryLime max-md:hidden"
      />
    </nav>
  );
};

export default Navbar;
