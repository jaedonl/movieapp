import React from 'react'
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className='admin-sidebar'>
        <div>
            <div className='logo'>
                <Image src='/icons/be_logo.png' alt='logo' width={37} height={37} />
                <h1>BumpEast</h1>
            </div>

            <div className='mt-10 flex flex-col gap-5'>
                
            </div>
        </div>
    </aside>
  )
}

export default Sidebar