import PortfolioCard from '../components/PortfolioCard';
import GradientText from '../components/GradientText';
import {functionality} from '../constants';
import styles from '../style';

const CryptoPortfolio = () => (
  <section
    className={`${styles.flexCenter} flex-col relative sm:py-16 pt-8 pb-10 sm:pb-16`}
  >
    <div className="flex justify-between items-center flex-col w-full relative sm:mb-14 mb-6 z-[1]">

      <h1 className={`${styles.heading2} text-center`}>
        <GradientText title="Build your" angle="right" /> {''}
        <span className="text-primaryLime">crypto</span> {''}
        <GradientText title="portfolio" angle="left" />
      </h1>
      <p className={`max-w-[700px] mt-6 text-center text-dimWhite`}>
        Craft your ideal cryptocurrency portfolio with ease. Explore diverse assets, tailor your investments, and pave your path to financial growth in the exciting world of digital currencies.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-8 sm:gap-10 z-10">
      {functionality.map (card => <PortfolioCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default CryptoPortfolio;
