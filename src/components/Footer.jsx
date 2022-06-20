import React from 'react'
import {BiCopyright} from "react-icons/bi";

const Footer = ({footerDate}) => {
  return (
    <footer>
<span> <BiCopyright /></span>
<p>{footerDate.current} © Uche Nwaogu</p>

    </footer>
  )
}

export default Footer