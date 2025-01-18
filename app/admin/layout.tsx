import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'
import Sidebar from '@/components/admin/Sidebar';
import '@/styles/admin.css';

const layout = async ({ children }: {children: ReactNode}) => {
    const session = await auth();
    if (!session?.user?.id) redirect('/signin');

    return (
        <main className='flex min-h-screen w-full flex-row'>
            <Sidebar />

            <div className='admin-container'>
                <p>Header</p>
                {children}
            </div>
        </main>
    )
}

export default layout