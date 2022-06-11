import styled from "styled-components";

import { productivityContent } from "@constants/home";
import Card from "@components/Card/Card";
import { ProductivityContentInterface } from "@interface/Home";

const ProductivitySection = () => {
  return (
    <>
      <Content className="mx-auto grid max-w-xs grid-cols-1 gap-4 px-4 py-12 md:max-w-[704px] md:px-0 lg:max-w-[1152px] lg:grid-cols-3 lg:px-8 xl:max-w-screen-2xl ">
        {productivityContent.map((val: ProductivityContentInterface) => (
          <>
            <Card
              title={val.title}
              describe={val.describe}
              renderType="Desktop"
              classContainer="min-h-[440px] w-full grid gap-4 relative hidden lg:block hover:cursor-pointer"
            />
          </>
        ))}

        <div className="hidden md:grid md:grid-cols-1 lg:hidden">
          {productivityContent.map((val: ProductivityContentInterface) => (
            <Card
              title={val.title}
              describe={val.describe}
              renderType="Tablet"
              classContainer="min-h-[334px] rounded-lg hover:bg-primary-700 hover:bg-opacity-[100%] w-[704px] mx-auto relative mb-4 hover:cursor-pointer"
            />
          ))}
        </div>

        <div className="mx-auto grid grid-cols-1 gap-4 md:hidden">
          {productivityContent.map((val: ProductivityContentInterface) => (
            <Card
              title={val.title}
              describe={val.describe}
              renderType="Mobile"
              classContainer="min-h-[326px] rounded-lg relative hover:cursor-pointer "
            />
          ))}
        </div>
      </Content>
    </>
  );
};

export default ProductivitySection;

const Content = styled.div`
  @media screen and (max-width: 1023px) {
    padding-top: 0;
  }
`;
