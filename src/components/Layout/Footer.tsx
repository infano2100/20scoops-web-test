import styled from "styled-components";

import { IconFooter } from "../SVG";
import { menu } from "@constants/menu";

const Footer = () => {
  return (
    <footer className="w-full">
      <Content className="bg-neutral-800 text-neutral-500 px-4 pt-8 pb-[32px] text-sm !leading-[17px] md:!px-8 md:!py-8 md:!text-base md:!leading-[19px] css-lcn7jo">
        <div className="max-w-[920px] lg:mx-auto lg:max-w-[1144px]">
          <div
            id="company-info"
            className="lg:flex lg:justify-between lg:!text-sm lg:!leading-[17px]"
          >
            <a href="/">
              <IconFooter />
            </a>
            <div className="mt-4 md:flex md:justify-between lg:!mt-0">
              <div id="address" className="max-w-[230px] md:!max-w-[350px] ">
                <div className="md:flex">
                  <div className="mr-1">André Beckschulte Immobilien</div>
                  <div>Management</div>
                </div>
                <div>Friedrich-Ebert-Str. 76</div>
                <div>59425 Unna</div>
              </div>
              <div id="contact" className="mt-4 md:!mt-0 lg:ml-16">
                <div id="contact-telephone" className="mb-2 cursor-pointer">
                  Telefon: 02303 / 94 237 - 0
                </div>
                <div id="contact-email" className="">
                  <a href="mailto:BIM@Beckschulte.com">
                    Email: BIM@Beckschulte.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <>
            <div
              id="footer-menu"
              className="text-neutral-50 flex text-base !leading-[19px] md:!hidden"
            >
              <div className="w-1/2">
                <div className="mt-2 cursor-pointer">
                  <a href="/verwalten">Verwalten</a>
                </div>
                <div className="mt-2 cursor-pointer">
                  <a href="/vermieten/">Vermieten</a>
                </div>
                <div className="mt-2 cursor-pointer">
                  <a href="/verkaufen/">Verkaufen</a>
                </div>
              </div>
              <div className="w-1/2">
                <div className="mt-2 cursor-pointer">
                  <a href="/uber-uns/">Über uns</a>
                </div>
                <div className="mt-2 cursor-pointer">
                  <a href="/kontakt/">Kontakt</a>
                </div>
              </div>
            </div>
            <div
              id="footer-menu"
              className="text-neutral-50 flex text-base !leading-[19px] md:justify-evenly md:!text-lg md:!leading-[22px]"
            >
              {menu.map((val: string) => (
                <div className="mt-2 hidden cursor-pointer md:flex">
                  <a href="/">{val}</a>
                </div>
              ))}
            </div>
          </>
          <div
            id="copy-right-and-data-privacy"
            className="mt-2 md:flex md:justify-between"
          >
            <div id="copy-right" className="text-base !leading-[19px]">
              © 2019 - 2022 Beckschulte All rights reserved
            </div>
            <div
              id="data-privacy"
              className="mt-4 flex text-base !leading-[19px] md:!mt-0"
            >
              <div className="cursor-pointer">
                <a href="/">Impressum</a>
              </div>
              <div className="text-neutral-700 mx-2 cursor-pointer">/</div>
              <div className="cursor-pointer">
                <a href="/">Datenschutz</a>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <div id="divider" className="bg-primary-500 h-2 w-full"></div>
    </footer>
  );
};

export default Footer;

const Content = styled.div`
  @media screen and (min-width: 1440px) {
    padding: 0px;
  }
  @media screen and (min-width: 1152px) {
    padding: 32px !important;
  }
  @media screen and (min-width: 1024px) {
    padding: 32px 16px !important;
  }
`;
