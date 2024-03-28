import {footerLinks, socialMedia} from '../constants';
import ListCircle from './ListCircle';
import styles from '../style';

const FooterLinksSection = ({title, links}) => (
  <div className="flex flex-col min-w-[150px] ss:my-0 my-4">
    <h4 className="text-[18px] leading-[27px] font-KronaOne text-white">
      {title}
    </h4>
    <ul className="list-none mt-4">
      {links.map ((link, index) => (
        <li
          key={link.name}
          className={`text-[16px] leading-[24px] ${index !== links.length - 1 ? 'mb-4' : 'mb-0'} font-poppins font-normal text-dimWhite hover:text-primaryLime duration-150 cursor-pointer`}
        >
          <a href={`#${link.linkUrl}`}>{link.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} !pb-4 flex-col`}>
    <div
      className={`${styles.flexStart} w-full flex-col md:flex-row py-12 sm:mb-8 border-t-[1px] sm:border-b-[1px] border-[#3F3E45]`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <a href="#home" className="flex items-center gap-4">
          <p className="text-[22px] text-primaryLime font-KronaOne font-bold tracking-widest uppercase">
            Cipher.
          </p>
        </a>

        <div className="flex flex-row gap-4 mt-4">
          {socialMedia.map ((social, index) => (
            <div key={social.id} className="relative">
              <ListCircle />
              <svg
                className={`absolute w-[40px] h-[40px] p-2 ${index !== socialMedia.length - 1 ? 'mr-4' : 'mr-0'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain cursor-pointer fill-primaryDark bg-primaryLime rounded-full`}
                onClick={() => window.open (social.link)}
              >
                <use href={social.icon} />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between gap-8 mt-10 md:mt-0">
        {footerLinks.map (footerLink => (
          <FooterLinksSection key={footerLink.title} {...footerLink} />
        ))}
      </div>

    </div>
    <div className="max-sm:pt-8 text-center max-sm:border-t-[1px] max-sm:border-t-[#3F3E45]">
      <p className="footer-copyright">
        Copyright &#169; 2024 &#x2758; All Rights Reserved
      </p>
      <div className="flex max-sm:flex-col">
        <p className="footer-copyright mr-1">
          Coded by: <a
            target="blank"
            href="https://github.com/ytsipak"
            className="font-KronaOne underline-offset-2 hover:underline text-primaryLime"
          >
            Yuriy Tsipak
          </a>
        </p>
        <p className="footer-copyright">
          <span className="max-sm:hidden"> &#x2758; </span>
          Design: <a
            target="blank"
            className="font-KronaOne underline-offset-2 hover:underline text-primaryLime"
            href="https://dribbble.com/shots/19410787-Cryptocurrency-Landing-Page-Website-Design#"
          >
            Towshif Mahir
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
