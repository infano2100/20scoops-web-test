import { ContactUsData } from "@constants/home";
import { ContactUsDataInterface } from "@interface/Home";
import { IconEmail } from "@components/SVG";

const ContactUsSection = () => {
  return (
    <div className="pb-[60px] md:pb-24 lg:grid lg:grid-cols-2 lg:py-10 lg:pt-16 lg:pb-20">
      <picture>
        {ContactUsData.map((val: ContactUsDataInterface) => (
          <>
            <source
              type="image/webp"
              srcSet={`https://beckschulte.com/assets/images/home/contact-us/contactUs${val.size}.webp`}
            />
            <img
              src={`https://beckschulte.com/assets/images/home/contact-us/contactUs${val.size}.png`}
              alt="contact us"
              className={val.className}
            />
          </>
        ))}
      </picture>

      <div className="grid grid-cols-1 content-center px-4 md:pl-28 md:pr-60 lg:pl-20 lg:pr-0">
        <p className="mb-3 md:whitespace-pre-wrap text-primary-500 text-xl ">
          Beckschulte
        </p>
        <p className="mb-3 md:whitespace-pre-wrap">
          {`André Beckschulte Immobilien-Management - 
Friedrich-Ebert-Str. 76 - 59425 Unna.`}
        </p>
        <p className="mb-3 md:whitespace-pre-wrap cursor-pointer ">
          Telefon 02303 / 94 237 - 0
        </p>
        <p className="mb-3 md:whitespace-pre-wrap cursor-pointer ">
          Email BIM@Beckschulte.com
        </p>
        <div>
          <button className="null mx-auto !h-14 w-[244px] items-center justify-center text-lg md:mx-0 flex bg-primary-500 hover:bg-primary-600 active:bg-primary-700 min-w-[140px] rounded-[100px] px-4 py-3 font-semibold leading-4 text-white">
            <IconEmail />
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
