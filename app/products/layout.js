import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import NavbarShow from "@/Components/product-page/NavbarShow.js";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Products",
  description: "Staring Files For Project",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        	<NavbarShow />
            {children}
       </body>
     </html>
  );
}