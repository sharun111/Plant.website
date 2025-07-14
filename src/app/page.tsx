import Header from '@/header';
import Home from '@/Home';
import 'remixicon/fonts/remixicon.css';
import Services from '../Services';
import About from '@/About';


export default function Page() {
  return(
    <main >
      <Header/>
      <Home/>
      <Services/>
      <About/>
    </main>
  )
}