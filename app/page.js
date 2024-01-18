import { Suspense } from "react";
import { motion } from "framer-motion"
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const Home = async () => {
  return (
    <div>
       <Header/>
       <hr className="border-teal-400"/>
       <Section/>
       <Footer/>
    </div>
  )
}

export default Home;