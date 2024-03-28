import GradientText from '../components/GradientText';
import Button from '../components/Button';
import styles, {layout} from '../style';
import {starIcons} from '../constants';
import {cryptostats} from '../assets';

const AboutPlatform = () => {
  return (
    <section
      id="about"
      className={`${layout.section} relative justify-around items-center gap-20 trustedPlatform-gradient`}
    >
      <div className="gradient_02" />
      <img
        src={cryptostats}
        alt="Crypto Stats"
        className={`${layout.statsImg} max-md:hidden`}
      />
      <div className={layout.sectionCircleImg}>
        <h2 className={styles.heading2}>
          <GradientText title="Trusted" angle="right" />
          {' '}
          <span className="text-primaryLime">platform</span>
          {' '}
          <br />
          <GradientText title="anytime & anywhere." angle="left" />
        </h2>
        <div className="flex gap-4 my-6">
          {starIcons.map (star => (
            <svg key={star.id} className="w-4 h-4 object-contain fill-white">
              <use href={star.link} />
            </svg>
          ))}
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mb-6 text-dimWhite`}>
          Invest with confidence on our reliable cryptocurrency platform, accessible wherever you are.
          Seamlessly navigate the world of digital assets knowing you're supported by a trusted and secure environment.
        </p>
        <img
          src={cryptostats}
          alt="Crypto Stats"
          className={`${layout.statsImg} mb-8 md:hidden`}
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href="https://www.google.com/search?q=Cipher+-+Learn+More"
            target="blank"
            title="Learn More"
            styles=" font-normal bg-primaryLime text-primaryDark"
          />
          <Button
            href="https://www.google.com/search?q=Cipher+-+Ask+Question?"
            target="blank"
            title="Ask question ?"
            styles="font-normal border-2 border-dimWhite bg-primaryDark text-dimWhite"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
