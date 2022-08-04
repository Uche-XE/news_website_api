import React from 'react'

const NewsItem = ({title, author, url, image}) => {

  if(image == null) {
    return (
      <a className='news-item' rel="noreferrer" target="_blank" href='{url}'>
    <li>
      <p>{title}</p>
      <p className='author'>{author}</p>
    </li>
    </a>
    )
  } else {
  return (
    <a className='news-item' rel="noreferrer" target="_blank" href='{url}'>
    <li>
      <p>{title}</p>
      <p className='author'>{author}</p>
      <img src={image} alt={title} />
    </li>
    </a>
  )
  }
}

export default NewsItem