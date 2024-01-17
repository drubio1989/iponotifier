import SubscribeForm from "./SubscribeForm";

const Header = () => {
  return (
    <header>
      <div className="max-w-5xl mx-auto py-16 px-14 sm:px-6 lg:px-8">
        <h1 className="mt-10 font-m font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-teal-600">
          Never miss an I.P.O. unicorn again!
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="font-mono mt-10 text-gray-500 text-center text-xl lg:text-3xl">
            Seize the next big investment opportunity and embark on your path to financial success today!
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center w-full mx-auto">
          <SubscribeForm/>
        </div>
      </div>
    </header>
  )
}

export default Header;