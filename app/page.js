
import { Suspense } from "react";
import { motion } from "framer-motion"
import Header from "./components/Header";
import Section from "./components/Section";

const Home = async () => {
  return (
    <div>
       <Header/>
       <hr className="border-teal-400"/>
       <Section/>
    </div>
  )
}

export default Home;