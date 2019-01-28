import React from 'react'
import pic11 from '../assets/images/loafie-formies-white.png'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="image fit">
            <img src={pic11} alt="" />
          </span>
          {/* <span className="icon major fa-tint" /> */}
          <h1>
            Global Game Jam 2019 <br />
            Daugherty Business Solutions
            <br />
            Team Fancy Guppie
          </h1>
          <p>
            Delivering the world of underwater exploration via
            <br />
            the light of an Angler fish named Loafie.
          </p>
          <ul className="actions">
            <li>
              <a href="#four" className="button scrolly">
                Play Now!
              </a>
            </li>
            <li>
              <a href="https://globalgamejam.org/2019/games/loafie-formies" className="button scrolly">Visit game at Global Game Jam</a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
