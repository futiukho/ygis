import React from "react"
import SEO from '../components/seo';
import "./../css/global.css"
import Header from "./../components/header/header"
import HomeHero from "./../components/homeHero/homeHero"
import HomeTxt from "./../components/homeTxt/homeTxt"
import Contact from "./../components/contact/contact"
import Footer from "./../components/footer/footer"

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentName: "default"
    };
  }

  handleProjectHover = (event) => {
    this.setState({
      currentName: event.currentTarget.querySelector(".home__head").id.toLowerCase()
    })
  }

  handleHeaderHover = (event) => {
    this.setState({
      currentName: "default"
    })
  }

  render() {
    return (
      <React.Fragment>
        <SEO title="Yana Gevorgyan" description="I am a multi-disciplinary designer based in Seattle, obsessed with users, systems and design accelerators."/>
        <main className="home">
          <div className="hero__wrapper">
            <Header mouseOverCallback={this.handleHeaderHover}/>
            <HomeHero currentHover={this.state.currentName}/>
            <HomeTxt  currentHover={this.state.currentName}
                      projects={['cluse', 'ditto', 'fisqual', 'semaphore', 'trunks', 'phisher', 'webx']}
                      mouseOverCallback={this.handleProjectHover}/>
          </div>
          <Contact/>
          <Footer/>
        </main>
      </React.Fragment>
    )
  }
}

export default Index