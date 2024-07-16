import React from 'react'

function App() {
  return (
    
    <div class = ' flex flex-col justify-center  items-center gap-4 sm:gap-5 bg-slate-300 rounded-md p-10 sm:p-20 md:p-32 w-full '>

      <i class="fa-solid fa-shield-halved  text-7xl "></i>
      <h1 class = ' text-2xl font-semibold sm:text-3xl md:text-4xl text-center'>Your privacy is our responsibility</h1>
      <p class = ' text:md sm:text-lg md:text-xl text-center '  >We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly 
        do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.</p>

      
      <button className=' flex justify-center text-center border border-blue-700 rounded-sm text-blue-700 p-2 md:p-3'>
        <i class="fa-brands fa-square-youtube text-red-700 pr-5 pt-1 "> </i>
        <div className=' text-sm md:text-lg'>
          Watch Video
        </div>
      </button>
    
    </div>
    
    
  )
}

export default App