import ImagesModal from "./components/ImagesModal";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartContext";
import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | E-commerce product page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <CartProvider>
          <ImagesModal />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
