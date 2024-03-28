import ListCircle from './ListCircle';
import Button from './Button';

const PortfolioCard = ({title, content}) => (
  <div className="flex flex-col justify-center min-h-[420px] md:basis-[calc((100%-128px)/3)] px-10 py-8 rounded-[20px] bg-[#0e1315] transition-all hover:bg-primaryLime modern-border feedback-card">
    <div className="flex flex-col items-center card__container">
      <ListCircle
        dimensions="w-28 h-28"
        inset="inset-3"
        upperDivStyles="card__container-circle transition-all delay-75"
        innerDivStyles="card__container-circleBorder !border-[6px] transition-all delay-75"
      />

      <h4 className="justify-start text-center text-xl leading-[32px] mt-8 font-KronaOne font-semibold">
        {title}
      </h4>
      <p
        className={`max-md:max-w-[600px] text-[16px] leading-[32px] my-2 mb-4 text-center font-poppins font-normal text-dimWhite`}
      >
        {content}
      </p>
      <Button
        href={`https://www.google.com/search?q=Cipher+- ${title}`}
        target="blank"
        title="Learn More"
        styles="hidden font-normal bg-primaryDark text-primaryLime"
      />
    </div>
  </div>
);

export default PortfolioCard;
PortfolioCard;
