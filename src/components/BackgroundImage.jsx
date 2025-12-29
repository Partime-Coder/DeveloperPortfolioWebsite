import React from 'react'

function BackgroundImage({image, overlay=false, children}) {
    return (
        <div className='w-full h-screen bg-cover bg-center relative' style={{ backgroundImage: `url(${image})` }} >
            {overlay && (<div className='absolute inset-0 bg-black/40'/>)}
            
            <div className='relative z-10 w-full h-full'>
                {children}
            </div>
        </div>
    )
}

export default BackgroundImage