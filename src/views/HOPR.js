import React from 'react'
import AboutUs from '../components/sections/AboutUs'
import Governance from '../components/sections/Governance'
import Clients from '../components/sections/Clients'
import Investors from '../components/sections/Investors'
import Token from '../components/sections/Token'
import Values from '../components/sections/Values'
import Team from '../components/sections/Team'
import Jobs from '../components/sections/Jobs'
import ContactTabs from '../components/sections/ContactTabs'

class HOPR extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AboutUs id="about" />
        <Governance id="governance" hasBgColor invertColor />
        <Clients id="clients" showQuestion />
        <Investors id="investors" hasBgColor invertColor showQuestion />
        <Token id="token" />
        <Values id="values" hasBgColor invertColor />
        <Team id="team" />
        <Jobs id="jobs" hasBgColor invertColor />
        <ContactTabs id="contact" redirect />
      </React.Fragment>
    )
  }
}

export default HOPR
