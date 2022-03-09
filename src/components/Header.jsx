import React from 'react';
import Forms from "./Forms"

const Header = ({
  handleSubmit, 
  language, 
  languageHandler, 
  searchRef, 
  todaysDateDisplay}) => {
  return (
    <header>
      <h1>News</h1>
      <h3>{todaysDateDisplay}</h3>
<aside>
  <Forms 
  handleSubmit={handleSubmit}
  language={language}
  languageHandler={languageHandler}
  searchRef={searchRef}
  />
</aside>

</header>
  )
}

export default Header