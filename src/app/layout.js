"use client";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopLeftImg from "./components/TopLeftImg";
import "@/styles/globals.css";
import { Inter, Sora } from "next/font/google";

// components
import Transition from "./components/Transition";

//router
import { useRouter } from "next/navigation";

//  farmer motion
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// export const metadata = {
//   title: "Create My Portfolio",
//   description: "Divo Codes Portfolio",
// };

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={`page bg-[url('/public/site-bg.svg')] text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
