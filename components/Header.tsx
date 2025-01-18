'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn, getInitials } from '@/lib/utils'
import Image from 'next/image'
// import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Session } from 'next-auth'

const Header = ({session}: {session: Session}) => {
  const pathname = usePathname()
  
  return (
    <header className='my-10 flex justify-between gap-5'>      
      <Link href='/' className='flex items-center'>
        <Image src='/icons/bumpeast_logo_whitetext_no_margin.png' alt='bumpeast logo' width={120} height={50} />
      </Link>
      <ul className='flex flex-row items-center gap-8'>
        <li>
          <Link href='/library' className={cn(
            'text-base cursor-pointer capitalize',
            pathname === '/library' ? 'text-light-200' : 'text-light-100'
          )}>
            Library
          </Link>
        </li>
        <li>
          {session 
            ? <Link href='/my-profile'>
                <Avatar>
                  {/* <AvatarImage src='https://github.com/shadcn.png' /> */}
                  <AvatarFallback className='bg-amber-100'>
                    {getInitials(session?.user?.name || "Guest User")}
                  </AvatarFallback>
                </Avatar>
              </Link>

            : <Link href='/signin' className='text-base cursor-pointer capitalize text-light-100'>Sign in</Link>
          }
          
        </li>
      </ul>
    </header>
  )
}

export default Header