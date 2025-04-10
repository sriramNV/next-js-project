import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-between p-24'>
            <div className='flex flex-row items-center justify-between w-full max-w-5xl'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl font-bold'>Navbar</h1>
                    <p className='text-sm'>This is the navbar</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar