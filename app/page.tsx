import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Albums from "./components/Albums";
import Link from "next/link";

export default function Home() {
  return( <>
        <Navbar><Link href="/about">About</Link></Navbar>

        <Albums/>
        <Footer/>
      </>);    
}
