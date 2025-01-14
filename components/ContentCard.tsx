import Link from 'next/link'
import React from 'react'
import ContentCover from './ContentCover';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';

const ContentCard = ({
    id,
    title,
    genre,
    cover,
    isSubscribed = false
}: Content) => {
    return (
        <li className={cn(
            // isSubscribed && 
            // 'xs:w-52 w-full'
        )}>
            <Link href={`/contents/${id}`} className={cn(isSubscribed && 'w-full flex flex-col')}>
                <ContentCover coverImage={cover} />
                <div className={cn('mt-4', 
                    // !isSubscribed && 
                    // 'xs:max-w-40 max-w-28'
                    )}>
                    <p className='content-title'>{title}</p>
                    <p className='content-genre'>{genre}</p>
                </div>

                {isSubscribed && (
                    <div className='mt-3 w-full'>
                        <div className='subscribed'>
                            <Image 
                                src="/icons/loyalty.svg"
                                alt="loyalty"
                                width={18}
                                height={18}
                                className='object-contain'
                            />
                            <p className='text-light-100'>Membership only content</p>
                        </div>
                        <Button className='content-btn'>Be a Member</Button>
                    </div>
                )}
            </Link>
        </li>
    )
}

export default ContentCard