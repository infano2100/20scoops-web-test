import { IconInfo } from "@components/SVG";
import { CardInterface } from "@interface/Home";

const Card = ({
  title,
  describe,
  renderType = "",
  classContainer = "",
  path = "/",
  infoText = "weitere Infos",
}: CardInterface) => {
  return (
    <>
      <a href={path}>
        <div className={classContainer}>
          <picture>
            <source
              type="image/webp"
              srcSet={`https://beckschulte.com/assets/images/Details/${title.toLowerCase()}${renderType}.webp`}
            />

            <img
              alt={`${title}`}
              src={`https://beckschulte.com/assets/images/Details/${title.toLowerCase()}${renderType}.png`}
              className="rounded-lg"
            />
          </picture>
          <div className="absolute bottom-0 z-10 p-4 lg:px-4 lg:py-8">
            <p className="text-[28px] font-semibold text-white lg:mb-2">
              {`${`${title}`}`}
            </p>
            <p className="text-white lg:h-[110px] xl:h-[110px] xl:text-lg">
              {`${`${describe}`}`}
            </p>
            <div className="mt-6 flex items-center">
              <span className="text-primary-500 mr-3 text-lg font-semibold">
                {infoText}
              </span>
              <IconInfo />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
