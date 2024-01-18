import { Suspense } from "react";
import Loader from "./Loader";
import { fetchIPOs } from "../actions";

const listItems = [
  {
    title: `Subscribe`,
    description: `Subscribe to the newsletter to be notified.`,
  },
  {
    title: `Get Notified`,
    description: `The day before the initial public offering trades, a notification email will land in your mailbox.`,
  },
  {
    title: `Unsubscribe`,
    description: `Done with notifications? No problem. Unsubscribe anytime by clicking the unsubscribe link located in the email notifications.`,
  },
];

const Section = async () => {
  const ipoData = await fetchIPOs();

  return(
    <section className="lg:py-10">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-teal-600">
            How It Works
          </p>
        </div>

       
        <div className="flex flex-wrap my-12">
          {listItems.map((item, index) => (
              <div className="w-full border-b border-t md:w-1/2  lg:w-1/3 p-8"  key={index}>
                <div className="px-4">
                  <span
                    className="flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-teal-100 text-teal-500"
                  >
                    {index + 1}
                  </span>
                </div>
                <div className="flex items-center mb-6 mt-7">
                  <div className="font-mono ml-4 text-xl text-center w-full">{item.title}</div>
                </div>
                <p className="leading-loose text-gray-500 font-mono text-center">
                  {item.description}
                </p>
              </div>
          ))}
        </div>


        <div className="flex flex-wrap -mx-8 items-center">
          <div className="w-full px-8">
            <div className="lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0">
                <div className="container mx-auto p-4 overflow-x-auto">
                  <table
                    className="
                      w-full 
                      bg-white 
                      border 
                      border-gray-300
                      max-w-[2520px] 
                      mx-auto 
                      xl:px-20 
                      md:px-10 
                      sm:px-2
                      px-4"
                  >
                    <thead>
                      <tr className="bg-teal-500 border-b border-gray-300">
                        <th className="py-2 px-4 text-white font-mono">Company</th>
                        <th className="py-2 px-4 text-white font-mono">Symbol</th>
                        <th className="py-2 px-4 text-white font-mono">Estimated Volume</th>
                        <th className="py-2 px-4 text-white font-mono">Expected To Trade</th>
                        <th className="py-2 px-4 text-white font-mono">Lead Managers</th>
                        <th className="py-2 px-4 text-white font-mono">Number of Shares</th>
                        <th className="py-2 px-4 text-white font-mono">Price High</th>
                        <th className="py-2 px-4 text-white font-mono">Price Low</th>
                      </tr>
                    </thead>
                    <Suspense fallback={<Loader />}>
                      <tbody>
                          {ipoData.map((company, index) => (
                            <tr className="even:bg-teal-100 odd:bg-white dark:even:bg-teal-100" key={index}>
                              <td className="py-2 px-4 ">{company.Company}</td>
                              <td className="py-2 px-4">{company.Symbol}</td>
                              <td className="py-2 px-4">{company.EstimatedVolume}</td>
                              <td className="py-2 px-4">{new Date(company.ExpectedToTrade).toLocaleDateString()}</td>
                              <td className="py-2 px-4">{company.LeadManagers}</td>
                              <td className="py-2 px-4">{company.NoOfShares} mil</td>
                              <td className="py-2 px-4">${company.PriceHigh}</td>
                              <td className="py-2 px-4">${company.PriceLow}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Suspense>
                  </table>
                </div>
              </div>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Section;
