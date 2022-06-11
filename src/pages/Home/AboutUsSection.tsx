import { imagesDetailHome } from "@constants/home";
import { AboutUsDataInterface } from "@interface/Home";

const AboutUsSection = () => {
  return (
    <>
      {imagesDetailHome.map((val: AboutUsDataInterface) => {
        const { className, type, textDetail, imgClass } = val;
        const { title, titleDes, describe } = textDetail;
        return (
          <div className={`${className}`}>
            <div className="lg:flex lg:justify-end xl:justify-center">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`https://beckschulte.com/assets/images/home/about-us/aboutUs${type}.webp`}
                />

                <img
                  className={imgClass}
                  alt={`about-us-${type}`}
                  src={`https://beckschulte.com/assets/images/home/about-us/aboutUs${type}.png`}
                />
              </picture>
            </div>
            <div
              className={`mx-auto md:max-w-[704px] lg:ml-[88px] lg:max-w-[443px] xl:ml-0 xl:flex xl:max-w-[564px] xl:items-center`}
            >
              <div className="mt-8 px-4 text-left md:px-0 lg:mt-0 lg:px-0 lg:pr-8 xl:mt-8">
                <p className="mb-8 text-center text-2xl font-medium md:text-5xl lg:text-left">
                  {title}
                  <span className="text-primary-500">
                    <span>{titleDes}</span>
                  </span>
                </p>
                <p className="mb-8 leading-[19px]">{describe}</p>
                <div className="text-center lg:text-left">
                  <button className="w-fit h-14 text-lg font-semibold lg:w-[168px] xl:w-[216px] border-primary-500 text-primary-500 hover:bg-primary-100 hover:border-primary-600 hover:text-primary-600 hover:border-primary-600 hover:text-primary-600 active:border-primary-700 active:text-primary-700 active:bg-primary-300 min-w-[140px] rounded-[100px] border-2 border-solid px-4 py-2.5 leading-4">
                    weitere Infos
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </>
  );
};

export default AboutUsSection;
