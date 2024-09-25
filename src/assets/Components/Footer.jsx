import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="bg-gray-800 text-white py-6">
        <div className='px-4 mx-3'>CATEGORIES </div>
    <div class="container mx-auto flex justify-between items-center">
        <div class="flex-1">
            <ul class="space-y-2">
                <li><a href="#" class=" mx-5 px-4 hover:text-gray-300">Category 1</a></li>
                <li><a href="#" class="mx-5 px-4  hover:text-gray-300">Category 2</a></li>
                <li><a href="#" class="mx-5 px-4  hover:text-gray-300">Category 3</a></li>
            </ul>
        </div>


        <div class="flex-1 text-center">
            <p>© 2024 eventA</p>
        </div>

        <div class="flex-1 text-right">
            <p><a href="#" class="hover:underline">Contact Info</a> | <a href="#" class="hover:underline">Terms of Service</a> | <a href="#" class="hover:underline">Privacy Policy</a></p>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
