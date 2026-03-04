import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features1 } from "@/components/features-1";
// import { Cta } from "@/components/cta";
// import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
// import { Testimonial } from "@/components/testimonial";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features1 />
      {/* <Cta /> */}
      {/* <Pricing /> */}
      <Faq />
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
}
