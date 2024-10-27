
import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Skills from "./Skills/page";





export default function Home(){
  return(
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow container mx-auto p-8 bg-ffuchsia-200">
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
