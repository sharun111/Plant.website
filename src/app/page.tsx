import Header from '@/header';
import Home from '@/Home';
import 'remixicon/fonts/remixicon.css';
import Services from '../Services';
import About from '@/About';
import Popular from '@/Popular';
import Review from '@/review';
import Footer from '@/Footer';

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Header />

      <section id="home" className="lg:pt-10">
        <Home />
      </section>

      <section id="services" className="lg:pt-10">
        <Services />
      </section>

      <section id="about" className="lg:pt-10">
        <About />
      </section>

      <section id="popular" className="lg:pt-10">
        <Popular />
      </section>

      <section id="review" className="lg:pt-10">
        <Review />
      </section>

      <section id="footer" className="lg:pt-10">
        <Footer />
      </section>
    </main>
  );
}
