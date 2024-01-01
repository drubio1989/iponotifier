import axios from "axios";
import { format } from 'date-fns';
import Container from "./components/Container";

async function getIpoCalendar() {
  const res = await fetch('')
  return res.json()
}

export default async function Home() {
  const data = await getIpoCalendar()

  return (
    <div>
      <Container>
        <div className="pt-24 gap-8 container mx-auto p-4">
        {/* <div className="container mx-auto p-4"> */}
          <p className="text-emerald-800">Stay Ahead of the Market! Sign up now to receive instant notifications about upcoming Initial Public Offerings (IPOs). Don't miss out on the next big investment opportunity. Join our community of informed investors and be the first to know about new IPOs, market trends, and exclusive insights. Start your journey to financial success today!</p>
        </div>
      </Container>

      <Container>   
        <div className="container mx-auto p-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="py-2 px-4">Company</th>
                <th className="py-2 px-4">Symbol</th>
                <th className="py-2 px-4">Estimated Volume</th>
                <th className="py-2 px-4">Expected To Trade</th>
                <th className="py-2 px-4">Lead Managers</th>
                <th className="py-2 px-4">Number of Shares</th>
                <th className="py-2 px-4">Price High</th>
                <th className="py-2 px-4">Price Low</th>
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
                  <td className="py-2 px-4">{company.NoOfShares}</td>
                  <td className="py-2 px-4">{company.PriceHigh}</td>
                  <td className="py-2 px-4">{company.PriceLow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  

       {/* React Hook Form Code */}
        <div className="container mx-auto p-4">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input clasName="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Full name"/>
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div> 
      </Container>  
    </div>
  )
}
