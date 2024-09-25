import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className=" bg-violet-600  py-4">
            <ul className="flex justify-end space-x-6 px-8 text-white">
                <li className="mx-2 cursor-pointer hover:text-gray-200">Home</li>
                  <li className="mx-2 cursor-pointer hover:text-gray-200">About</li>
                  <li className="mx-2 cursor-pointer hover:text-gray-200">Contact</li>
                  <li className="mx-2 cursor-pointer hover:text-gray-200">product</li>
            </ul>

      </nav>

      
    </div>
  )
}

export default Nav
