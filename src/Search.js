import React, { Component } from 'react';

class FilteredList extends Component {
  constructor() {
    super();
    this.state = {
      initialItems: [
         "ReactJS",
         "AJAX",
         "HTML5",
         "CSS3",
         "Angular",
         "Agile Methodology",
         "API",
         "ES6 JavaScript",
         "VueJs",
         "SASS",
         "Chrome Debugging Tools",
         "SCSS",
         "Flexbox",
         "Data Grid",
         "React Data Table",
         "CryptoJS",
         "JSEncrypt",
         "FTL",
         "JSON",
         "ES6 Template Literals",
         "Bootstrap",
         "Magnolia CMS",
         "Fetch API",
         "Mongo Db",
         "NodeJS",
         "NPM",
         "Webpack",
         "Parcel",
         "JIRA",
         "Forms",
         "Elastic Search",
         "JQuery",
         "LESS",
         "Pug",
         "JavaScript",
         "Material Design",
         "Interactive Forms",
         "AXIOS"
       ],
       items: []
    };
  }
  componentDidMount() {
    document.querySelector('.landing').style.display = 'none';
  }
  filterList(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.sort().filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  componentWillMount(){
    this.setState({items: this.state.initialItems})
  }
  render(){
    return (
      <div id="mount-point">
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={(e) => this.filterList(e)}/>
      <List className="searchItems" items={this.state.items}/>
      </div>
      </div>
    );
  }
};

class List extends Component{
  render(){
    return (
      <ul>
      {
        this.props.items.sort().map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )  
  }
};

export default FilteredList;