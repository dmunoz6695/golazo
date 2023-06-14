import Link from 'next/link'
import React from 'react'
import { GiSoccerField } from 'react-icons/gi'

const secctions = [
  {
    name: 'Inicio',
    href: './'
  },
  {
    name: 'Posiciones',
    href: '/posiciones/'
  },
  {
    name: 'Equipos',
    href: './equipos'
  }
]

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">

              <span className="text-white"><GiSoccerField fontSize={40}/></span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center items-center space-x-4">

              {
                secctions.map((secction) => (
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href={secction.href}
                    key={secction.name}
                  >
                    {secction.name}
                  </Link>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
