import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/loafie-profile.png'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/trollface.png'
import pic05 from '../assets/images/starfish-placeholder.png'
import pic06 from '../assets/images/jellyfish-placeholder.png'
import pic07 from '../assets/images/squid-frand-placeholder.png'
import pic08 from '../assets/images/whale-placeholder.png'
import pic09 from '../assets/images/turtle-placeholder.png'
import pic10 from '../assets/images/eel-frand-placeholder.png'
import pic12 from '../assets/images/fancy-guppie-website-logo.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Loafie the Lophiiforms Finds Friends.'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Loafie the Lophiiformes Forms Friends.</h2>
              </header>
              <p>
                Home is where you are happy. Loafie is happiest with her
                friends. She and her friends live in the deep dark ocean.
                Everyday the ocean becomes more polluted and Loafie has grown
                tired.
              </p>
              <p>
                Help Loafie find all her friends before the ocean becomes too
                polluted to support life and escape to where she feels the
                safest.
              </p>
              <p>Home with friends.</p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  {/* <span className="icon style1 major fa-code" /> */}
                  <span className="icon image fit">
                    <img src={pic05} alt="Loafie First Version" />
                  </span>
                </li>
                <li>
                  {/* <span className="icon style2 major fa-bolt" /> */}
                  <span className="icon image fit">
                    <img src={pic06} alt="Jelly Fish" />
                  </span>
                </li>
                <li>
                  {/* <span className="icon style3 major fa-camera-retro" /> */}
                  <span className="icon image fit">
                    <img src={pic07} alt="Squid" />
                  </span>
                </li>
                <li>
                  {/* <span className="icon style4 major fa-cog" /> */}
                  <span className="icon image fit">
                    <img src={pic08} alt="Whale" />
                  </span>
                </li>
                <li>
                  {/* <span className="icon style5 major fa-desktop" /> */}
                  <span className="icon image fit">
                    <img src={pic09} alt="turtle" />
                  </span>
                </li>
                <li>
                  {/* <span className="icon style6 major fa-calendar" /> */}
                  <span className="icon image fit">
                    <img src={pic10} alt="eel" />
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Meet all of Loafie's frands...</h2>
                <h2>Can you save them all?</h2>
              </header>
              <p>
                The object of the game is to find a way to gather all your
                friends that have been scattered through out the dark cave.
              </p>
              <p>
                Using only the light on your head, navigate through the
                treacherous depths the dark unknown to find and lead all your
                friends to safety.
              </p>
              <p>
                Time is not on your side. The ocean is growing more and more
                toxic as time progresses. Be sure to find and lead all your
                friends through the trench before you can no longer live in the
                ocean.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <span className="image fit">
                <img src={pic12} alt="Fancy Guppie Team" />
              </span>
              <header className="major">
                <h2>Meet our Team</h2>
              </header>
              <p>
                Team Fancy Guppie is the second half of the Daugherty Business
                Solutions Global Game Jam team.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Mike</h3>
              <p>Developer</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Kat</h3>
              <p>Artist</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Josh</h3>
              <p>Developer</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Chris</h3>
              <p>Artist</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Devon</h3>
              <p>Developer</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Brad</h3>
              <p>Developer</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Tyler</h3>
              <p>Audio</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Brett</h3>
              <p>Project Manager</p>
            </div>
            <div className="col-4" />
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Do you have what it takes?</h2>
            </header>
            <p>Play our game today!</p>
            <ul className="actions uniform">
              <li>
                <a
                  href="https://francisb1996.github.io/loafie-formies-hosted/general/Loafie/#"
                  className="button special"
                >
                  Play Now!
                </a>
              </li>
              {/* <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li> */}
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
