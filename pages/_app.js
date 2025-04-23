import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import MailSideBar from "@/components/MailSideBar";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StarsBackground />
      <ShootingStars />
      <Navigation />
      <SocialLinks />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
      <MailSideBar />
      <Footer />
      <ScrollToTop />
      {/* <SpeedInsights /> */}
    </>
  );
}
