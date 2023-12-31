import axios from "axios";
import Container from "./components/Container";

export default function Home() {
  return (
    <div>

      <Container>
        <div className="pt-24 gap-8">
          <p className="text-emerald-800">Stay Ahead of the Market! Sign up now to receive instant notifications about upcoming Initial Public Offerings (IPOs). Don't miss out on the next big investment opportunity. Join our community of informed investors and be the first to know about new IPOs, market trends, and exclusive insights. Start your journey to financial success today!</p>
        </div>
      </Container>

      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">30</td>
              <td className="py-2 px-4">john.doe@example.com</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 px-4">2</td>
              <td className="py-2 px-4">Jane Smith</td>
              <td className="py-2 px-4">25</td>
              <td className="py-2 px-4">jane.smith@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
    
  )
}
