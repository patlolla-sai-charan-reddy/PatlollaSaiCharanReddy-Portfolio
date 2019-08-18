import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Work extends Component {
  componentDidMount() {
    document.querySelector('.landing').style.display = 'none';
  }
  render() {

    return (
      <div>
      <section className="sec-cards">
	<div className="cards">
		<div className="card">
			<div className="card__bg"></div>
			<ul className="card__list">
        <h5 className="client">Fitch Ratings</h5>
				<li className=" card__listitem">Create Reusable React Components</li>
				<li className=" card__listitem">Creating pages for Different Regions</li>
				<li className=" card__listitem">Using ES6 template literals</li>
				<li className=" card__listitem">Following Agile Methodology</li>
			</ul>
			<a className="card__button card__button--green" href="https://www.fitchratings.com" target="_blank" rel="noopener noreferrer">
			<div className="card__btn">
				Launch Website
			</div>
      </a>
		</div>
		
		<div className="card">
			<div className="card__bg card__bg--orange"></div>
			
			<ul className="card__list">
      <h5 className="client">American Express</h5>
				<li className=" card__listitem">Developing the components in Angular</li>
				<li className=" card__listitem">Deploy to enterprise cloud platform (eCP)</li>
				<li className=" card__listitem">Creating POC's for new tech. implementations</li>
				<li className=" card__listitem">Assisting junior developers.</li>
				<li className=" card__listitem">Creating reusable components in React.</li>
			</ul>
			<div className="card__btn">
				<a className="card__button card__button--orange" href="https://www.americanexpress.com/us/credit-cards/compare-cards/" target="_blank" rel="noreferrer noopener">Launch Website</a>
			</div>
		</div>
		
		<div className="card">
			<div className="card__bg card__bg--blue"></div>
			
			<ul className="card__list">
      <h5 className="client">Sricom Inc</h5>
				<li className=" card__listitem">Design the prototypes</li>
				<li className=" card__listitem">maintain existing applications.</li>
				<li className=" card__listitem">Working on wordpress cms.</li>

			</ul>
			<div className="card__btn">
				<a className="card__button card__button--blue" href="http://sricominc.com/" target="_blank" rel="noreferrer noopener">Launch Website</a>
			</div>
		</div>
	</div>
</section>
    </div>
    )

  }
}

export default Work;
