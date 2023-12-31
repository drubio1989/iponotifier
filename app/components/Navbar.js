'use client'

import Container from "./Container"

const Navbar = () => {
  return (
    <div className='fixed w-full bg-green-400 z-10 shadow-sm'>
      <div
        className='
          py-4 
          border-b-[1px]
        '
      >
        <Container>
          <div
            className='
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0a
            '
          >
           <p className="text-white">Ipo Notifier</p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar