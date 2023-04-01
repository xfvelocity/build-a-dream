export interface Route {
  text: string;
  route: string;
}

export interface WorkCarousel {
  id: number;
  location: string;
  title: string;
  images: string[];
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
