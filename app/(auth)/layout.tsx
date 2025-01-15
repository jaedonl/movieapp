import Image from 'next/image'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <main className='auth-container'>
        <section className='auth-form'>
            <div className='auth-box w-full'>
                <Image src="/icons/bumpeast_logo_whitetext_no_margin.png" alt='logo' width={150} height={0} />

                <div>{children}</div>
            </div>
        </section>

        <section className='auth-illustration'>
            <Image src="/icons/bumpeast_illustrator.png" alt='auth illustration' width={1000} height={1000} className='size-full object-cover' />
        </section>
    </main>
  )
}

export default layout