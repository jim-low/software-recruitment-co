import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaJava, FaLinkedinIn, FaPython, FaTwitter } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const COMPANY_NAME = 'Software Recruitment co.';

export const WHO_WE_WORK_WITH_LIST = [
  { src: 'microsoft.png', alt: 'Microsoft' },
  { src: 'oracle.png', alt: 'Oracle' },
  { src: 'atlassian.png', alt: 'Atlassian' },
  { src: 'cloudflare.png', alt: 'Cloudflare' },
  { src: 'vmware.png', alt: 'VmWare' },
];

export enum EProgrammingLanguage {
  PYTHON = 'PYTHON',
  JAVA = 'JAVA',
  C_PLUS_PLUS = 'C_PLUS_PLUS',
  C_HASHTAG = 'C_HASHTAG', // :P
};

export type ProgrammingLanguageInfo = {
  text: string;
  icon: IconType;
};

export const PROGRAMMING_LANGUAGES: Record<EProgrammingLanguage, ProgrammingLanguageInfo> = {
  [EProgrammingLanguage.PYTHON]: {
    text: 'Python',
    icon: FaPython,
  },
  [EProgrammingLanguage.JAVA]: {
    text: 'Java',
    icon: FaJava,
  },
  [EProgrammingLanguage.C_PLUS_PLUS]: {
    text: 'C++',
    icon: SiCplusplus,
  },
  [EProgrammingLanguage.C_HASHTAG]: {
    text: 'C#',
    icon: TbBrandCSharp,
  },
};

export const FOOTER_ICONS = [
  {
    icon: FaLinkedinIn,
    link: '#'
  },
  {
    icon: FaFacebook,
    link: '#'
  },
  {
    icon: FaInstagram,
    link: '#'
  },
  {
    icon: FaTwitter,
    link: '#'
  },
];
