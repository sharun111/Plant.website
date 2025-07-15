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

      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="popular">
        <Popular />
      </section>

      <section id="review">
        <Review />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
