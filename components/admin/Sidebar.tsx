'use client';
import React from 'react'
import Image from 'next/image';
import { adminSideBarLinks } from "@/constants";
import Link from 'next/link';
import { cn, getInitials } from '@/lib/utils';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";
import { usePathname } from 'next/navigation';


const Sidebar = ({session}: {session: Session}) => {
  const pathname = usePathname();
  
  return (
    <aside className='admin-sidebar'>
      <div>
        <div className='logo'>
            <Image src='/icons/be_logo.png' alt='logo' width={37} height={37} />
            <h1>BumpEast</h1>
        </div>

        <div className='mt-10 flex flex-col gap-5'>
            { adminSideBarLinks.map((link) => {
              const isSelected = (link.route !== '/admin' && pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

              return (
                <Link href={link.route} key={link.route}>
                  <div className={cn("link", isSelected && 'bg-primary-admin shadow-sm')}>
                    <div className='relative size-5'>
                      <Image src={link.img} alt={`${link.text} icon`} fill className=
                      {`${isSelected ? "brightness-0 invert" : "brightness-50"} object-contain`} />
                    </div>

                    <p className={cn(isSelected ? "text-white" : "text-dark")}>
                      {link.text}
                    </p>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>

      <div className='user'>
        <Avatar>
          {/* <AvatarImage src='https://github.com/shadcn.png' /> */}
          <AvatarFallback className='bg-amber-100'>
            {getInitials(session?.user?.name || "Guest User")}
          </AvatarFallback>
        </Avatar>

        <div className='flex flex-col max-md:hidden'>
          <p className='font-semibold'>{session?.user?.name}</p>
          <p className='text-light-500 text-xs'>{session?.user?.email}</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar