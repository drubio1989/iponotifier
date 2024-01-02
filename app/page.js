import axios from "axios";
import { format } from 'date-fns';
import Container from "./components/Container";
import SubscribeForm from "./components/SubscribeForm";

// async function getIpoCalendar() {
//   // const res = await fetch('https://l7123ls80c.execute-api.us-east-1.amazonaws.com/prod/ipo-calendar')
//   return res.json()
// }

export default function Home() {
  // const data = await getIpoCalendar()

  return (
    <div>
       <Container>   

        <div className="flex mb-4 pt-24">
          <div className="w-1/2h-12">

            {/* <div className="pt-7 gap-8 container mx-auto p-4"> */}
            {/* <div className="container mx-auto p-4"> */}
              {/* <p className="text-teal-600 font-semibold">Don't fall behind! Subscribe now to receive notifications about upcoming Initial Public Offerings. Don't miss out on the next big investment opportunity. Start your journey to financial success today!</p>
            </div> */}
                 
            <div className="container mx-auto p-4">
              <SubscribeForm/>
              {/* <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                  <input clasName="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Email"/>
                  <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded ml-auto" type="button">
                    Subscribe
                  </button>
                </div>
              </form> */}
            </div>       
          </div>
          {/* <div class="w-1/2 h-12">
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
                  {data.map((company, index) => (
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
                  ))}
                </tbody>
              </table>
            </div> */}
           
          {/* </div> */}
        </div>
      </Container>  
    </div>
  )
}
