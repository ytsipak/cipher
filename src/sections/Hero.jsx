import GradientText from '../components/GradientText';
import {ethereumImg, symbols} from '../assets';
import {onlineUsersData} from '../constants';
import styles from '../style';

const UsersAvatarSection = ({totalCount, category, usersList}) => (
  <div className="w-full flex max-lg:justify-center items-center gap-6 mb-10 py-10 hero-border-gradient">
    <div className="order-2">
      <h3 className="text-3xl font-bold font-KronaOne">
        {totalCount}
      </h3>
      <p className="text-dimWhite">{category}</p>
    </div>
    <div className="flex">
      {usersList.map ((userList, index) => (
        <div
          key={userList.id}
          className={`relative w-12 h-12 sm:w-20 sm:h-20 ${index === usersList.length - 1 ? 'mr-0' : 'mr-[-20px]'}  overflow-hidden border-2 border-white rounded-full`}
        >
          <img src={userList.avatar} alt={userList.id} />
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => (
  <section
    id="home"
    className={`relative flex md:flex-row flex-col justify-start pt-36 sm:pt-44 pb-16`}
  >
    <div className="relative flex items-center justify-between">
      <div
        className={`${styles.flexStart} flex-col xl:px-0 max-lg:items-center`}
      >
        <p
          className={`${styles.paragraph} max-lg:text-[14px] uppercase tracking-widest font-KronaOne`}
        >
          Keep your money safe
          {' '}
          <span className="text-3xl font-bold text-primaryLime">!</span>
        </p>

        <div className="w-full flex flex-col justify-center items-center pb-8">
          <h1 className="flex-1 ss:text-5xl text-3xl leading-[40px] ss:leading-[60px] font-KronaOne text-center lg:text-start">
            Best <GradientText title="crypto" angle="left" />
            <br className="max-lg:hidden" /> {''}
            <span className="text-primaryLime">investing platform</span> {''}
            <br className="max-lg:hidden" />
            <GradientText title="for your future" angle="right" />
          </h1>
        </div>

        {onlineUsersData.map (user => (
          <UsersAvatarSection key={user.category} {...user} />
        ))}

        <div className="flex gap-6">
          <div className="flex self-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mr-[-20px] rounded-full border-2 border-primaryLime" />
            <div className="flex align-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primaryLime">
              <svg className="w-14 h-14 object-contain self-center fill-primaryDark">
                <use href={`${symbols}#icon-arrow-up`} />
              </svg>
            </div>
          </div>
          <p className="max-w-96 text-[16px] sm:text-[18px] text-dimWhite text-wrap">
            Discover unparalleled opportunities in the world of digital assets with our investment platform. Join us today!
          </p>
        </div>
      </div>

      <img
        className="max-lg:hidden w-[45%]"
        src={ethereumImg}
        alt="Hero Image"
      />
      <div className="max-lg:top-0 max-sm:opacity-80 gradient_01" />
    </div>
  </section>
);

export default Hero;
