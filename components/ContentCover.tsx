import React from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';

type BookCoverVariant = "small" | "default" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  small: "book-cover_small",
  default: "book-cover",
  wide: "book-cover_wide",
};

interface Props {
    className?: string;
    variant?: BookCoverVariant;
    coverImage: string;
}

const ContentCover = ({
    variant = 'default',
    coverImage = 'https://placehold.co/400x600.png',
}: Props) => {
  return (
    <div className={cn('relative transition-all duration-300', variantStyles[variant])}>
        <Image src={coverImage} alt='Book cover' width={1920} height={1080} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="rounded-sm object-fill" loading='lazy'/>
    </div>
  )
}

export default ContentCover