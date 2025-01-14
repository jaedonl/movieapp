import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import ContentCover from './ContentCover'

const ContentOverview = ({
    title, 
    author, 
    genre, 
    rating, 
    views, 
    description, 
    cover 
}: Content) => {
  return (
    <section>
      <div className='content-overview'>
        <div className='flex flex-1 flex-col gap-5'>
          <h1>{title}</h1>
          <div className="content-info">
            <p>
              By <span className="font-semibold text-light-200">{author}</span>
            </p>

            <p>
              Category{" "}
              <span className="font-semibold text-light-200">{genre}</span>
            </p>

            <div className="flex flex-row gap-1">
              <Image src="/icons/thumb_up.svg" alt="thumb up" width={22} height={22} />
              <p>{rating}%</p>
            </div>
          </div>

          <div className="total-views">
            <p>
              Total Views <span>{views.toLocaleString()}</span>
            </p>
          </div>

          <p className="book-description">{description}</p>

          <Button className='content-overview_btn'>
              <Image src="/icons/loyalty.svg" alt="thumb up" width={22} height={22} />
              <p className='font-bebas-neue text-xl text-dark text-light-100'>Subscribe Membership</p>
          </Button>
        </div>

        <div className='relative flex flex-1 justify-center'>
          <div className='relative'>
              <ContentCover 
                  coverImage={cover}
              />
          </div>
        </div>
      </div>

      {/* <div className='mt-20 flex justify-center'>
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/7ts34mXUF_s?si=osjfqRSt4boZIpQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
       */}
    </section>
  )
}

export default ContentOverview