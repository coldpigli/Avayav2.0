import React from 'react'
import appStore from "../assets/appstore-btn.png"
const Footer = () => {
  return (
    <section class="footer w-75 flex-vertical children-middle">
    <h1 class="heading2">Download Our App</h1>
    <div class="footer-download flex">
        <div class="download-img">
            <img src={appStore} alt="appstore"/>
        </div>
    </div>
    <p>Made with <span class="txt-brand-color">	&#10084;</span> by Piyush Das. <a class="txt-brand-color" href="https://github.com/coldpigli">Github</a></p>
</section>
  )
}

export default Footer