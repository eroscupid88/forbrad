import React, { Component } from 'react'
import Paragraph from './Paragraph'
import Something from './Something'
class About extends Component {
  render() {
    return (
      <div id="parallax-world-of-ugg">
        <section>
          <div className="parallax one">
            <h2>This is An Example</h2>
          </div>
        </section>
        <section>
          <Paragraph
            header="What is NFT"
            first="Non-Fungible Tokens (NFTs) are digital assets that are unique and cannot be exchanged for other tokens or assets on a one-to-one basis. They are stored on a blockchain and are used to represent ownership of a particular item, such as artwork, music, or collectibles. NFTs have gained popularity in recent years as a way for creators to monetize their digital creations and for collectors to own unique pieces of digital art."
          />
        </section>

        <section>
          <div className="parallax two">
            <h2>WHAT WE DO</h2>
          </div>
        </section>

        <section>
          <Paragraph
            header="What is cryptocurrency"
            first="Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates independently of a central bank. It is a decentralized form of currency that is not controlled by any government or financial institution. Cryptocurrency transactions are recorded on a public ledger called a blockchain, which ensures transparency and immutability. The most well-known cryptocurrency is Bitcoin, but there are many others such as Ethereum, Litecoin, and Ripple. Cryptocurrency has gained popularity in recent years as a means of investment and as a payment method for goods and services."
          />
        </section>
        <section>
          <div className="parallax one">
            <h2>WHAT WE DO</h2>
          </div>
        </section>

        <section id="one" className="our services">
          <div className="container">
            <h2>Our services</h2>
            <ul>
              <li>
                <a href="#" className="box30 services">
                  <div className="static-content">
                    {/* <img src="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg" alt="kitchen"> */}
                    <h3>home maintenence</h3>
                  </div>
                  <div className="overlay-content"></div>
                  <i className="fas fa-home"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box30 services">
                  <div className="static-content">
                    {/* <img src="https://cdn.pixabay.com/photo/2017/08/28/22/00/machine-2691439__340.jpg" alt="machine"> */}
                    <h3>carpentry</h3>
                  </div>
                  <div className="overlay-content"></div>
                  <i className="fas fa-gavel"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box30 services">
                  <div className="static-content">
                    {/* <img src="https://cdn.pixabay.com/photo/2015/12/07/10/55/electric-1080584__340.jpg" alt="electrical repair"> */}
                    <h3>electrical repair</h3>
                  </div>
                  <div className="overlay-content"></div>
                  <i className="fas fa-plug"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box30 services">
                  <div className="static-content">
                    {/* <img src="https://cdn.pixabay.com/photo/2012/04/02/13/05/painting-24439__340.png" alt="painting illustration"> */}
                    <h3>painting</h3>
                  </div>
                  <div className="overlay-content"></div>
                  <i className="fas fa-paint-roller"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box30 services">
                  <div className="static-content">
                    {/* <img src="https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010__340.jpg" alt="plumber"> */}
                    <h3>plumbing services</h3>
                  </div>
                  <div className="overlay-content"></div>
                  <i className="fas fa-wrench"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box30 services">
                  <div className="static-content">
                    {/* <img src="https://cdn.pixabay.com/photo/2017/04/08/12/59/girlfriends-2213259__340.jpg" alt="girls"> */}
                    <h3>renovation</h3>
                  </div>
                  <div className="overlay-content"></div>
                  <i className="fas fa-cogs"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default About
