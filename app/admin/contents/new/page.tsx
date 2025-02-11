import ContentForm from '@/components/admin/forms/CotentForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <Button asChild className='back-btn'>
            <Link href='/admin/contents'>Go back</Link>
        </Button>

        <section className='w-full max-w-2xl'>
            <ContentForm />
        </section>
    </>
  )
}

export default page