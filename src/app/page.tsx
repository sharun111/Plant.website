import Header from '@/header';
import Home from '@/Home';
import 'remixicon/fonts/remixicon.css';
import Services from '../Services';
import About from '@/About';
import Popular from '@/Popular';
import Review from '@/review';
import Footer from '@/Footer';
import AnimatedSection from '@//Animated section';

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Header />

      <section id="home" >
        <AnimatedSection>
          <Home />
        </AnimatedSection>
      </section>

      <section id="services" >
        <AnimatedSection delay={0.1}>
          <Services />
        </AnimatedSection>
      </section>

      <section id="about" >
        <AnimatedSection delay={0.2}>
          <About />
        </AnimatedSection>
      </section>

      <section id="popular">
        <AnimatedSection delay={0.3}>
          <Popular />
        </AnimatedSection>
      </section>

      <section id="review" >
        <AnimatedSection delay={0.4}>
          <Review />
        </AnimatedSection>
      </section>

      <section id="footer" >
        <AnimatedSection delay={0.5}>
          <Footer />
        </AnimatedSection>
      </section>
    </main>
  );
}
