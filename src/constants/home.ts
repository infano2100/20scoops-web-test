export const imagesHome = [
  {
    media: "(min-width:1440px)",
    type: "image/webp",
    srcSet:
      "https://beckschulte.com/assets/images/home/hero/heroImageDesktop.webp",
  },
  {
    media: "(min-width:1024px)",
    type: "image/webp",
    srcSet:
      "https://beckschulte.com/assets/images/home/hero/heroImageLaptop.webp",
  },
  {
    media: "(min-width:768px)",
    type: "image/webp",
    srcSet:
      "https://beckschulte.com/assets/images/home/hero/heroImageTablet.webp",
  },
  {
    media: "(min-width:1440px)",
    type: "image/png",
    srcSet:
      "https://beckschulte.com/assets/images/home/hero/heroImageDesktop.png",
  },
  {
    media: "(min-width:1024px)",
    type: "image/png",
    srcSet:
      "https://beckschulte.com/assets/images/home/hero/heroImageLaptop.png",
  },
  {
    media: "(min-width:768px)",
    type: "image/png",
    srcSet:
      "https://beckschulte.com/assets/images/home/hero/heroImageTablet.png",
  },
];

export const productivityContent = [
  {
    title: "Verwalten",
    describe:
      "Seit mehr als 25 Jahren vertrauen unsere Kunden auf unseren Sachverstand und legen die Betreuung ihrer Immobilien in unsere Hände. ",
  },
  {
    title: "Vermieten",
    describe:
      "Mieter und Vermieter haben mit uns einen Partner an Ihrer Seite der Sie engagiert und kompetent betreut.",
  },
  {
    title: "Verkaufen",
    describe:
      "Käufer und Verkäufer profitieren von unserer langjährigen Erfahrung und unserer professionellen Vorgehensweise.",
  },
];

const textDetail = {
  title: "Wir sind",
  titleDes: "Beckschulte",
  describe: `Wir sind ein Team von Spezialisten und befassen uns seit mehr als 25
            Jahren erfolgreich mit der Verwaltung, der Vermietung und dem
            Verkauf von Wohn- u. Gewerbe-Immobilien im Kreis Unna und dem
            gesamten Ruhrgebiet. Seriosität, Kompetenz und Engagement sind die
            Grundlagen unseres Handelns. Besonderen Wert legen wir auf die
            Qualifikation unserer Mitarbeiter, die über ausgezeichnete,
            fachspezifische Kenntnisse und Berufserfahrung verfügen. So erwartet
            Sie bei uns Professionalität verbunden mit Persönlichkeit.`,
};

export const imagesDetailHome = [
  {
    className:
      "hidden mx-auto lg:grid lg:grid-cols-2 lg:py-16 xl:max-w-screen-2xl",
    type: "Desktop",
    imgClass: "hidden min-h-[640px] w-[448px] rounded-lg lg:block",
    textClass:
      "mx-auto md:max-w-[704px] lg:ml-[88px] lg:max-w-[443px] xl:ml-0 xl:flex xl:max-w-[564px] xl:items-center",
    textDetail,
  },
  {
    className:
      "hidden mx-auto lg:grid lg:grid-cols-2 lg:py-16 xl:max-w-screen-2xl lg:hidden md:hidden ",
    type: "Tablet",
    imgClass: "hidden min-h-[440px] w-full md:block lg:hidden",
    textClass:
      "mx-auto md:max-w-[704px] lg:ml-[88px] lg:max-w-[443px] xl:ml-0 xl:flex xl:max-w-[564px] xl:items-center",
    textDetail,
  },
  {
    className:
      "mx-auto lg:grid lg:grid-cols-2 lg:py-16 xl:max-w-screen-2xl lg:hidden",
    type: "Mobile",
    imgClass: "block min-h-[184px] w-full",
    textClass:
      "mx-auto md:max-w-[704px] lg:ml-[88px] lg:max-w-[443px] xl:ml-0 xl:flex xl:max-w-[564px] xl:items-center",
    textDetail,
  },
];

export const CertificatesData = [
  {
    name: "ivdCertificate",
    className:
      "mx-auto h-[79px] w-[231px] cursor-pointer lg:h-[126px] lg:w-[369px]",
  },
  {
    name: "vdivCertificate",
    className:
      "mx-auto h-[100px] w-[200px] cursor-pointer lg:h-[160px] lg:w-[320px]",
  },
  {
    name: "dekraCertificate",
    className:
      "mx-auto h-[79px] w-[79px] cursor-pointer lg:h-[126px] lg:w-[126px]",
  },
];

export const ContactUsData = [
  {
    size: "Desktop",
    className: "mb-16 hidden w-full md:mb-12 lg:mb-0 xl:block",
  },
  {
    size: "Tablet",
    className: "mb-16 hidden md:mb-12 lg:mb-0 lg:block xl:hidden",
  },
  {
    size: "Mobile",
    className: "mb-16 block w-full md:mb-12 lg:mb-0 lg:hidden",
  },
];
