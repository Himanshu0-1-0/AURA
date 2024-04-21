import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Bootstrapjs from "@/InstallBSJS";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Project X",
  description: "Staring Files For Project",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Bootstrapjs/>
      <body className={inter.className}>{children}
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
     </html>
  );
}
