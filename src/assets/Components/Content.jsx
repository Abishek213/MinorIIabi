import React from 'react'

const Content = () => {
  return (
    <div className='bg-fuchsia-100 flex '>
      <header>
        <div className=" h-90 py-40 pl-8">
          <div className="text-6xl ">Events Come True</div>
          <p className='py-3 w-1/3 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere pariatur illo delectus error dolores, fugiat labore omnis, quae possimus autem earum ipsum ea.</p>
          <div>
            <button className="bg-purple-800 px-5 py-2 mx-2 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-900">Enroll</button>
            <button className="bg-purple-800 px-5 py-2 mx-2 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-900 ">Visit</button>

          </div>
        </div>
      </header>


      <main >
        <img src="https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg" className="h-20 w-60 mt-4 pr-4" alt="" />
      </main>

    </div>
  )
}

export default Content
