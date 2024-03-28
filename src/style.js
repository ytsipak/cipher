const styles = {
  boxWidth: "xl:max-w-[1440px] w-full",

  heading2:
    "font-KronaOne font-semibold xs:text-[48px] max-sm:!text-3xl text-4xl xs:leading-[58px] leading-[55px] w-full",
  paragraph: "font-normal text-[16px] sm:text-[16px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-8",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionCircleImg: `flex justify-center items-center md:items-start flex-col text-center md:text-start`,

  advantagesCard: `flex-1 flex ${styles.flexCenter} md:mb-0  relative`,
  statsImg: `w-[85%] sm:max-w-[600px] object-contain relative z-[5] mx-auto sm:mx-0`,

  iconStar: `w-[18px] h-[18px] object-contain fill-sunsetYellow`,
  iconStarContainer: `flex flex-row items-center py-[6px] px-4  bg-secondaryDarkgrey rounded-full mb-4`,
};

export default styles;
