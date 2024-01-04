'use client'

import { useEffect, useState } from "react";
import getIpoCalendar from "@/pages/api/ipo-calendar";
import Container from "./components/Container";
import SubscribeForm from "./components/SubscribeForm";

const Home = () => {
  const [ipoCalendarData, setIpoCalendarData] = useState([]);

  useEffect(() => {
    const fetchIpoCalendarData = async () => {
      try {
        const data = await getIpoCalendar();
        setIpoCalendarData(data)
      } catch (error) {
        console.error('Error executing server action:', error);
      }
    };

    fetchIpoCalendarData();
  }, []);

  return (
    <div>
       <Container>
          <div className="flex mb-4 pt-24">
            <div className="w-1/2 h-12">
              <div className="pt-7 gap-8 container mx-auto p-4">
                <div className="container mx-auto p-4">
                  <p className="text-teal-600 font-semibold">Don&apos;t fall behind! Subscribe now to receive notifications about upcoming Initial Public Offerings. Don&apos;t miss out on the next big investment opportunity. Start your journey to financial success today!</p>
                </div>
                    
                <div className="container mx-auto p-4">
                  <SubscribeForm/>
                </div>       
              </div>
            </div>
            <div className="w-1/2 h-12">
              <div className="container mx-auto p-4 overflow-x-auto">
                <table className="w-min bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-teal-500 border-b border-gray-300">
                      <th className="py-2 px-4 text-white">Company</th>
                      <th className="py-2 px-4 text-white">Symbol</th>
                      <th className="py-2 px-4 text-white">Estimated Volume</th>
                      <th className="py-2 px-4 text-white">Expected To Trade</th>
                      <th className="py-2 px-4 text-white">Lead Managers</th>
                      <th className="py-2 px-4 text-white">Number of Shares</th>
                      <th className="py-2 px-4 text-white">Price High</th>
                      <th className="py-2 px-4 text-white">Price Low</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipoCalendarData ? (
                      ipoCalendarData.map((company, index) => (
                        <tr className="border-b border-gray-300" key={index}>
                          <td className="py-2 px-4">{company.Company}</td>
                          <td className="py-2 px-4">{company.Symbol}</td>
                          <td className="py-2 px-4">{company.EstimatedVolume}</td>
                          <td className="py-2 px-4">{format(new Date(company.ExpectedToTrade), 'eeee MM/dd/yyyy')}</td>
                          <td className="py-2 px-4">{company.LeadManagers}</td>
                          <td className="py-2 px-4">{company.NoOfShares} mil</td>
                          <td className="py-2 px-4">{company.PriceHigh}</td>
                          <td className="py-2 px-4">{company.PriceLow}</td>
                        </tr>
                      ))
                    ): (
                      <tr>
                        <td colSpan="8" className="py-2 px-4 text-center">Loading...</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Home;