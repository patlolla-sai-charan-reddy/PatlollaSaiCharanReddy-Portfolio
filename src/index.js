import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Resume from './Resume';
import Work from './Work';
import Contact from './Contact';
import SearchExample from './Search';
import $ from 'jquery';
import './lib.css';
import './style.css';


class App extends Component {
  homeCalled() {
    document.querySelector('.landing').style.display = 'inline';
  }
  render() {
    return (
      <div>
        <div className="landing">
          <h5 className="sayHello"> Hey There ! </h5>
        </div>
        <div id="dockContainer">
          <div id="dockWrapper">
            <ul className="osx-dock">
              <li>
                <Link to="/home" title="Home">
                  <img src="https://images.vexels.com/media/users/3/135263/isolated/preview/b26ee4099ae2550f79e65e41843a9198-web-home-flat-sign-by-vexels.png" alt="Home icon" onClick={() => this.homeCalled()} /></Link>
              </li>
              <li>
                <Link to="/search-technical-skills" title="Search Technical Skills">
                  <img src="https://png.icons8.com/metro/1600/search.png" alt="Search Technical Skills" /></Link>
              </li>
              <li>
                <Link to="/work-details-of-sai-charan-r-patlolla" title="Work">
                  <img src="https://icon-library.net/images/projects-icon/projects-icon-29.jpg" alt="code sample" data-toggle="modal" data-target="#exampleModal" /></Link>
              </li>
              <li>
                <Link to="/resume-of-sai-charan-r-patlolla" title="Resume"><img src="https://cdn2.iconfinder.com/data/icons/seo-web-optomization-ultimate-set/512/cv_cover_letter-512.png" alt="resume of sai charan" />
                </Link>
              </li>

              <li>
                <Link to="/contact-sai-charan-r-patlolla" title="Contact Me">
                  <img src="https://davidsilversteinblog.files.wordpress.com/2016/10/chinedu-ikedieze-contact-me.png" alt="Contact icon" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class Gather extends Component {
  render() {
    return (
      <div>
        {this.props.children}

      </div>
    )
  }
}

class Chase extends Component {
  render() {
    return <SearchExample />
  }
}

render((<Router>
        <Gather>
    <Route path="/" component={App} />
    <Route path="/work-details-of-sai-charan-r-patlolla" component={Work} />
    <Route path="/contact-sai-charan-r-patlolla" component={Contact} />
    <Route path="/resume-of-sai-charan-r-patlolla" component={Resume} />
    <Route path="/search-technical-skills" component={Chase} />
        </Gather>
</Router>), document.getElementById('root'));


$(document).ready(function () {
  $("ul.osx-dock li").each(function (type) {
    $(this).hover(function () {
      $(this).prev("li").addClass("nearby");
      $(this).next("li").addClass("nearby");
    },
      function () {
        $(this).prev("li").removeClass("nearby");
        $(this).next("li").removeClass("nearby");
      });
  });

});
