import React from 'react'

function MobilePreview({image}) {
  return <img src={image} alt="Project on Deckstop" className='w-full h-full object-cover rounded-lg' />;
}

export default MobilePreview