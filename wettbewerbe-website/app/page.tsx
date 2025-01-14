import Image from "next/image";
import Head from "./head"
import Footer from "./foot";

export default function Home() {
  return (
    
    <div className="font-sans m-0 p-0 bg-gray-50 text-neutral-700">
      <Head />

      <Footer />
    </div>
  );
}


