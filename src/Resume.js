import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Resume extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  componentDidMount() {
    document.querySelector('.landing').style.display = 'none';
  }
  render() {
    return (
      <div id="root">
        <div className="row register-form">
          <div className="col-md-8 col-md-offset-2">
            <form className="form-horizontal custom-form" id="formoid" name="formoid">

              <header className="text-center makeBold">
                <div className="socialI">
                  <a href="https://www.linkedin.com/in/scrpatlolla/" title="Linkedin" target="_blank" rel="noreferrer noopener"><img className="socialThing" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/151734/linkedin-icon.png" alt="linkedin icon" /></a>

                  <a href="https://github.com/scrpatlolla" title="Github" target="_blank" rel="noreferrer noopener"><img className="socialThing" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="github icon" /></a>
                  
                </div>
                <div>
                  <p>Sai Charan</p>
                  <p>Front End Developer</p>
                </div>
              </header>
              <hr />
              <p className="text-left makeBold">
                <i className="fa fa-bullseye" aria-hidden="true"></i>&nbsp;&nbsp;Objective:
                </p>
              <p>
                A talented IT professional with passion for tailored
                    solutions seeks the position of Front End Developer in a
                    thriving, exciting, and growing company. Comes with
                    Master&rsquo;s degree in computer science and six
                    years&rsquo; experience with advanced knowledge of
                    Object-Oriented JavaScript, React, modern JS libraries, CSS3,
                    HTML5, Angular, ES 6, and Responsive tactics.
                </p>
              <p className="text-left makeBold">
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;&nbsp;Education:
                </p>
              <div className="row education">
                <div className="col-md-6">
                  <p>
                    July 2016
                        </p>
                  <p>
                    Master of Science in Computer Science
                        </p>
                  <p>
                    Virginia International University, Fairfax, VA, USA
                        </p>
                  <p>
                    GPA: 3.8
                        </p>
                </div>
                <div className="col-md-6">
                  <p>
                    May 2012
                        </p>
                  <p>
                    Bachelor of Science in Computer Science
                        </p>
                  <p>
                    Maheshwara Engineering College, Hyderabad, India
                        </p>
                  <p>
                    GPA: 3.5
                        </p>
                </div>
              </div><br />
              <p className="text-left technical">
                Technical Skills:
                </p>
              <p>
                Magnolia CMS, SASS, Grunt, Webpack, ReactJS, ES6 JavaScript,
                    Bootstrap, JIRA, Agile Methodology, Fetch API, AWS,
                    Publishing, Invision, Babel, jshint, Sublime, Media Queries,
                    HTTPS, JSON, URLs
                </p>
              <p className="text-left technical">
                Professional Experience:
                </p>
              <div>
                <div className="row">
                  <p className="col-md-12 comp">
                    <strong>RSC Solutions / Fitch Ratings</strong>
                  </p>
                  <p className="col-md-12 comp">
                    Feb 2017 - Present
                        </p>
                  <p className="col-md-12 comp">
                    Allentown, PA
                        </p>
                  <p className="col-md-12 comp">
                    Programmer Analyst
                        </p>
                </div><br />
                <p className="makeBold">
                  Description:
                    </p>
                <p>
                  Fitch Group is a global leader in financial information
                        services with operations in more than 30 countries. Fitch
                        Group is comprised of: Fitch Ratings, a global leader in
                        credit ratings and research;
                    </p>
                <p className="makeBold">
                  <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;&nbsp;Applications:
                    </p>
                <div className="allApps">
                  <div className="education">
                    <p>
                      <strong>GWS (FitchRatings Global
                                Website):</strong>&nbsp;&nbsp;
                            </p>
                    <ul>
                      <li>Developed the reusable react components and
                                integrated with Magnolia CMS, so that Digital
                                Management team (DMT) can add the components on
                                multiple pages.
                                </li>
                      <li>Rewrote the legacy code which was in JSP to
                                jQuery and ReactJS, Created new pages, delivered
                                enhancements as per the wireframes, mockups and
                                invision shared by UX Designers
                                </li>
                      <li>Added new features to the global website such
                                as made press release and report pages as AMP,
                                Language Translations, Reading data from
                                different endpoints for each country, Downloading
                                the pdf from S3 bucket etc.
                                </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> Magnolia CMS,
                                SASS, Grunt, Webpack, ReactJS, ES6 JavaScript,
                                Bootstrap, JIRA, Agile Methodology, Fetch API,
                                AWS, Publishing, Invision, Babel, jshint,
                                Sublime, Media Queries, HTTPS, JSON, URLs
                            </p>
                  </div><br />
                  <div className="education">
                    <p>
                      <strong>DPT (Data Privacy Tracker):</strong>
                      &nbsp;&nbsp;
                            </p>
                    <ul>
                      <li>Created an interactive web forms using
                                ReactJS, which has three different views.
                                </li>
                      <li>Added encryption to the data posted from
                                front-end to back end using CryptoJS, RSA
                                Algorithm and jsEncrypt.
                                </li>
                      <li>Created webpack for bundling and exporting
                                the application, deployed the application on dev,
                                qa and prod environments.
                                </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> Web forms,
                                Designing, ReactJS, Webpack, Stackblitz,
                                Bootstrap, CryptoJS, RSA, jsEncrypt, SPA, ES6
                                JavaScript, State, Promises, Client-side
                                validation, NodeJS
                            </p>
                  </div><br />
                  <div className="education">
                    <p>
                      <strong>ElasticSearch:</strong>&nbsp;&nbsp;
                            </p>
                    <ul>
                      <li>Created the custom URLs based on filters
                                chosen by user and posted the filter to backend
                                to fetch results from ElasticSearch.
                                </li>
                      <li>Changed the URLs across the application to
                                read the data from ElasticSearch and Delivered
                                the feature to retain the filters across the
                                Research, Entity, Issue and Surveillance Tabs
                                </li>
                      <li>Added Google Analytics and logger services to
                                track the user activity.
                                </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> AJAX, Creating
                                Filters, jQuery, Cookies, Google Analytics, AMP
                                (Accelerated Mobile Pages), local storage,
                                session storage, POST calls, Changing links
                            </p>
                  </div><br />
                  <div className="education">
                    <p>
                      <strong>GDPR (European General Data Protection
                                Regulation):</strong> &nbsp;&nbsp;
                            </p>
                    <ul>
                      <li>Created the cards for Entity Tab and Issue
                                tab using ReactJS, React DOM, Routers and to
                                persist the user experience as a SPA, made a API
                                call on click of ellipsis button.
                                </li>
                      <li>Added the JWT token to the header while
                                making AJAX call to secure the API and avoid data
                                leakage and supported the direct URL
                                functionality for cards on Entity and Issue Tab.
                                </li>
                      <li>Created multiple reusable components such as
                                Premium Research, Headlines, Criteria, Summary
                                and Rating Keys. Used sass for styling the
                                components.
                                </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> Bootstrap Modals,
                                ReactJS, Direct Links, Wireframes, Invision,
                                SASS, , SPA (Single Page Applications), Async,
                                Promises, Store, CSS3, Logger Services, Modular
                                JavaScript, Flexbox, Lodash
                            </p>
                  </div>
                </div><br />
                <div>
                  <div className="row">
                    <p className="col-md-12 comp">
                      <strong>American Express</strong>
                    </p>
                    <p className="col-md-12 comp">
                      Sep 2016 &ndash; Jan 2017
                            </p>
                    <p className="col-md-12 comp">
                      New York City, NY
                            </p>
                    <p className="col-md-12 comp">
                      Software Engineer
                            </p>
                  </div><br />
                  <p className="makeBold">
                    Description:
                        </p>
                  <p>
                    The American Express Company, also known as Amex, is
                            an American multinational financial services
                            corporation headquartered in Manhattan's Three World
                            Financial Center in New York City.
                        </p>
                  <p className="makeBold">
                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;&nbsp;Applications:
                        </p>
                  <div className="education">
                    <p>
                      <strong>Bento (Eligibility Checker):</strong>
                    </p>
                    <ul>
                      <li>Delivered User Interaction screens using
                                HTML5, CSS3, JavaScript, AngularJS and Bootstrap.
                                </li>
                      <li>Utilized AngularJS to achieve the client-side
                                elements Hide, Show, Event Handling and AJAX Call
                                on JSON response, and implemented card carousels
                                using AngularJS.
                                </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> HTML5, CSS3,
                                Bootstrap, ES6 JavaScript, JSON, AJAX, MongoDB,
                                jQuery, Angular JS, React JS, NodeJS, Gulp,
                                babel, eCP, PaaS, IaaS and Balsamiq.
                            </p>
                  </div><br />
                  <div className="row">
                    <p className="col-md-12 comp">
                      <strong>Sricom Information Technologies</strong>
                    </p>
                    <p className="col-md-12 comp">
                      Nov 2011 &ndash; Apr 2015
                            </p>
                    <p className="col-md-12 comp">
                      Hyderabad, India
                            </p>
                    <p className="col-md-12 comp">
                      Trainee Software Engineer
                            </p>
                  </div><br />
                  <p className="makeBold">
                    Description:
                        </p>
                  <p>
                    Sricom,Inc offers the complete spectrum of Software Development, Strategic Staffing, IT Consulting, Remote DBA and training services to its clients to help them focus on their core processes and meet their evolving business objectives.
                        </p>
                  <p className="makeBold">
                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;&nbsp;Applications:
                        </p>
                  <div className="education">
                    <p>
                      <strong>Roles and Responsibilities:</strong>
                    </p>
                    <ul>
                      <li>Responsible for creating the efficient design
                                and developing User Interaction screens as per
                                the client requirements using HTML, CSS,
                                JavaScript, jQuery, AJAX and JSON.
                                </li>
                      <li>Used JavaScript, jQuery for making the web
                                application user interactive.
                                </li>
                      <li>Added dynamic functionality to the
                                application by implementing JQuery, NodeJS.
                                </li>
                    </ul>
                    <p>
                      <strong>Technologies:</strong> HTML5, CSS3,
                                JavaScript, jQuery, AJAX, JSON, AngularJS,
                                NodeJS, W3C, MVC, SQL, Apache, MAC OS, AWS
                                (Amazon Web Services), jqGrid, S3, ECLIPSE.
                            </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Resume;