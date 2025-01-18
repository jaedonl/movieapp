import { Button } from '@/components/ui/button'
import React from 'react'
import { auth, signOut } from '@/auth'
import ContentList from '@/components/ContentList'
import { sampleContents } from '@/constants'
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await auth()
    if (!session) redirect('/signin')
        
    return (
        <>
            <form className='mb-10' action={async () => {
                'use server';

                await signOut()            
            }}>
                <Button>Logout</Button>
            </form>

            <ContentList title='Liked contents' contents={sampleContents} />
        </>
  )
}

export default page