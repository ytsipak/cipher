import GradientText from '../components/GradientText';
import ListCircle from '../components/ListCircle';
import {latestFeatures} from '../constants';
import styles, {layout} from '../style';
import {stockImg} from '../assets';

const WhatsNew = () => (
  <section
    id="whatsnew"
    className={`${layout.section} relative justify-around items-center pt-0 whatsNew-gradient`}
  >
    <div className="gradient_03" />
    <div
      className={`${styles.flexCenter} flex-col lgCustom:items-start text-center lgCustom:text-start`}
    >
      <h2 className={styles.heading2}>
        What's <span className="text-primaryLime">new </span>
        <GradientText title="we" angle="left" /> {''}
        <br className="sm:block hidden" />
        <GradientText title="provide for" angle="right" /> you ?
      </h2>
      <p
        className={`${styles.paragraph} max-w-[480px] my-10 pl-4 border-l-2 text-dimWhite border-primaryLime`}
      >
        This platform unites and secures a rapidly
        {' '}
        <span className="font-bold">expanding ecosystem</span>
        {' '}
        of specialized blockchains known as parachains.
      </p>
      <div className="flex items-center gap-8">
        <ul className="flex flex-wrap items-center max-lgCustom:justify-center gap-14">
          {latestFeatures.map (item => (
            <li key={item.title} className="flex items-center gap-6">
              <ListCircle />
              <div>
                <h4 className="font-semibold text-2xl">
                  {item.title}
                </h4>
                <p className="max-w-[240px] mt-2 text-dimWhite">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <img
      src={stockImg}
      alt="Cryptocurrency Stock"
      className={`${layout.statsImg} max-lgCustom:hidden`}
    />
  </section>
);

export default WhatsNew;
