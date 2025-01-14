import React from 'react'
import ContentCard from './ContentCard';

interface Props {
    title: string;
    contents: Content[];
    containerClassName?: string;
}

const ContentList = ({title, contents, containerClassName}: Props) => {
  return (
    <section className={containerClassName}>
        <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>

        <ul className='content-list'>
          {contents.map((content) => (
              <ContentCard key={content.title} {...content} />
          ))}
        </ul>
    </section>
  )
}

export default ContentList