import React from 'react';
import { addIndex } from '../helpers';
import NewsItem from "./NewsItem";

const NewsList = ({data}) => {
  
if (data.loading) return <p>Loading...</p>;
if (data.error) return <p>{data.error}</p>;
console.log(data.results);
const newData = addIndex(data.results);
const itemsList =newData && newData.map((item) => (
<NewsItem 
key={item.id}
title={item.title}
author={item.author}
url={item.link}
image={item.media}
/>
));

return (
  <section className='main-body'>
    {newData.length > 0 ? (
      <ul>{itemsList}</ul>
    ) : (
      <h1 className='loading'>No Results Found!!</h1>
    )}
  </section>
);
}

export default NewsList