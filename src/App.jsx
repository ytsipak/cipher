import styles from './style';

import {Navbar, Footer} from './components';
import {
  Hero,
  Services,
  AboutPlatform,
  CryptoPortfolio,
  WhatsNew,
} from './sections';

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} relative`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} bg-[#070c0e] hero_gradient`}>
      <div className={styles.boxWidth}>
        <div className={styles.paddingX}><Hero /></div>
      </div>
    </div>

    <div className={`${styles.flexStart} bg-primaryDark`}>
      <div className={styles.boxWidth}>
        <div className={styles.paddingX}>
          <Services />
          <AboutPlatform />
          <CryptoPortfolio />
          <WhatsNew />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
