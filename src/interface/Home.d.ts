export interface ImagesHomeInterface {
  media: string;
  type: string;
  srcSet: string;
}

export interface CardInterface {
  title: string;
  describe: string;
  renderType?: string;
  classContainer?: string;
  path?: string;
  infoText?: string;
}

export interface ProductivityContentInterface {
  title: string;
  describe: string;
}

interface AboutUsTextDetailInterface {
  title: string;
  titleDes: string;
  describe: string;
}

export interface AboutUsDataInterface {
  className: string;
  type: string;
  imgClass: string;
  textClass: string;
  textDetail: AboutUsTextDetailInterface;
}

export interface CertificatesDataInterface {
  name: string;
  className: string;
}

export interface ContactUsDataInterface {
  size: string;
  className: string;
}
