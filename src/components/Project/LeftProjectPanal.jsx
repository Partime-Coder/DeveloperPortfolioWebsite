import React from 'react'

function LeftProjectPanal({title , disc}) {
  return (
    <div className='p-5 text-white '>
        <div className='text-2xl pb-2.5 sm:text-3xl text-purple-400'>{title}</div>
        <div className='text-purple-300' >{disc}</div>    
    </div>
    
  )
}

export default LeftProjectPanal