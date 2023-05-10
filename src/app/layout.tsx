export const metadata = {
  title: "Build A Dream",
  description: "",
};

import "../assets/styles/index.scss";
import BdFooter from "../components/Footer/BdFooter";
import BdNav from "../components/Nav/BdNav";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BdNav />
        <main>{children}</main>
        <BdFooter />
      </body>
    </html>
  );
}
