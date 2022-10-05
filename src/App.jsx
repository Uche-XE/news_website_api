import {useState, useEffect, useRef} from 'react';
import { getDate } from './helpers';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

import './App.css';

const App = () => {
const [data, setData] = useState({
  results: null, 
  loading: true, 
  error: null
})
const search = useState(`Berlin`)
const [language, setLanguage] = useState(`en`)



const footerDate = useRef(new Date().getFullYear())
const searchRef = useRef()
const API_KEY = process.env.NEWSCATCHER_API_KEY
console.log(API_KEY);
//const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY} `
//const URL =`https://newsdata.io/api/1/news?apikey=${API_KEY}&country=de,ca`
const URL = `https://api.newscatcherapi.com/v2/search?q=Bitcoin&lang=en&sort_by=relevancy&page=1`
useEffect(() => {
  setData({
    results: null,
    loading: true,
    error: null,
  })

  fetch(URL, {
    headers: {
      'x-api-key': `GzniaVPFrikK_n7UvzrGZAcsgHBttbS4bJZbOmdOaGY`
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then((response) => {
    return response.json()}
    )
  .then((data) => {
    const { articles } = data;
    setData({results: articles, loading: false, error: null})
  }).catch((error) => setData({results: null, loading: false, error}))
},[URL])

const handleSubmit = (e) => {
  e.preventDefault()
  search[1](searchRef.current.value)
  searchRef.current.value = ''
  searchRef.current.focus()
}

const languageHandler = (e) => {
  setLanguage(e.target.value)
  searchRef.current.focus()
}


  return (
    <main>
     <Header 
     handleSubmit={handleSubmit}
     language={language}
     languageHandler={languageHandler}
     searchRef={searchRef}
     todaysDateDisplay={getDate()}
     />
     <NewsList data={data}/>
     <Footer footerDate={footerDate} />
    </main>
  );
}

export default App;

