import React from 'react'

function TargetListITem({target}) {
  return (
    <div className='flex relative items-center justify-center rounded-md p-4 transition duration-300 hover:-translate-y-2 cursor-pointer bg-white shadow'>
         <h4 className='font-semibold text-xl'>{target}</h4>




         <p className='absolute w-full h-1 top-0 bg-purple-700'></p>
    </div>
  )
}

export default TargetListITem