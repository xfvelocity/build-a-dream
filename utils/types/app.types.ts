export interface Route {
  text: string;
  route: string;
}

export interface WorkCarousel {
  id: number;
  title: string;
  image: string;
  desc: string;
}

export interface ReviewCarousel {
  review: string;
  name: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}
