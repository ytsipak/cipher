import GradientText from '../components/GradientText';
import styles, {layout} from '../style';
import {services} from '../constants';

const ServiceCard = ({title, content, number}) => (
  <div
    className={`flex flex-col gap-6 p-6 ${number === '02.' ? 'md:bg-primaryLime md:w-[40%] md:min-h-[340px] md:mb-10' : 'min-h-[300px]'} rounded-[20px] bg-[#0e1315] services-card modern-border`}
  >
    <div className="flex flex-1 flex-col ml-3 card__container">
      <p className="text-2xl mb-4 font-bold text-white">{number}</p>
      <h4 className="text-2xl leading-[30px] max-w-[340px] mb-4 font-KronaOne font-semibold text-white">
        {title}
      </h4>
      <p
        className={`max-w-[560px] text-[16px] lg:text-[18px] leading-[24px] mb-1 ${number === '02.' ? 'visible' : 'invisible'} font-poppins font-normal max-md:text-white text-primaryDark`}
      >
        {content}
      </p>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className={`${styles.paddingY} flex flex-col`}>
    <div className={`flex flex-col items-center mb-8`}>
      <h2
        className={`${styles.heading2} md:mb-16 max-md:text-center normal-case`}
      >
        Your
        {' '}
        <span className="text-primaryLime">trusted</span>
        {' '}
        <GradientText title="partner of" angle="left" /> <br />
        <GradientText title="cryptocurrency." angle="right" /> <br />
      </h2>
    </div>

    <div
      className={`${layout.advantagesCard} flex-col md:flex-row max-md:gap-8 z-10`}
    >
      {services.map ((feature, index) => (
        <ServiceCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Services;
