import styled from "styled-components";

import { IconArrow } from "@components/SVG";
import { imagesHome } from "@constants/home";
import { ImagesHomeInterface } from "@interface/Home";

const BannerHomeSection = () => {
  return (
    <div className="relative h-full w-full md:h-[856px]">
      <picture>
        {imagesHome.map((val: ImagesHomeInterface) => (
          <source {...val} />
        ))}

        <img
          alt="heroImageMobile"
          src={
            "https://beckschulte.com/assets/images/home/hero/heroImageMobile.png"
          }
          className="h-full w-full"
        />
      </picture>

      <div className="absolute top-0 flex h-full w-full items-center justify-center text-center">
        <div className="w-full h-screen"></div>

        <div className="absolute top-0 flex h-full w-full items-center justify-center text-center">
          <Content className="mx-auto flex flex-col items-center">
            <div className="textTitle">
              <p className="mb-6 text-[34px] font-medium leading-[40px] text-white md:text-[72px] md:leading-[84px]">
                ...weil’s mit uns <br /> besser geht{" "}
                <span className="text-primary-500">.</span>
              </p>
            </div>
            <div className="textDetail flex items-center">
              <p className="text-[24px] text-white md:text-[28px]">Kontakt</p>
              <a href="/">
                <BtnArrow>
                  <IconArrow />
                </BtnArrow>
              </a>
            </div>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default BannerHomeSection;

const BtnArrow = styled.button`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(100, 189, 78);
  border-radius: 50%;
  transition: transform 0.3s ease 0s;
  width: 56px;
  height: 56px;
  margin-left: 18px;
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Content = styled.div`
  .textTitle {
    width: 100%;
    opacity: 0;
    animation: 1s ease 1s 1 normal forwards running textTitle;

    @keyframes textTitle {
      0% {
        transform: translateY(150px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
  .textDetail {
    transform: scale(0);
    animation: 1s ease 1.5s 1 normal forwards running textDetail;
    align-self: center;

    @keyframes textDetail {
      0% {
        transform: scale(0);
      }
      40% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;
