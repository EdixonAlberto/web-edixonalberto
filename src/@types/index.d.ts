type TTheme = 'theme-light' | 'theme-dark';

type THead = {
  link: {
    rel: string;
    href: string;
  }[];
  meta: {
    name: string;
    content: string;
  }[];
};

type TEmail = {
  from: string;
  to: string;
  subject: string;
  message: string;
};
