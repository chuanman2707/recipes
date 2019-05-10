import React, { Component } from 'react'
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

export default class App extends Component {
  //initial empty state
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=f5c91eec1a4638b6b8b888b29495752c",
    base_url: "https://www.food2fork.com/api/search?key=f5c91eec1a4638b6b8b888b29495752c",
    details_id:35352 ,
    pageIndex: 1,
    search:"",
    query:'&q=',
    error: ""
    };

  //try to get the data using async method
async getRecipes() {
  try{
    const data = await fetch(this.state.url);
    const jsonData = await data.json()
    console.log(jsonData)
    if(jsonData.recipes.length === 0) {
      this.setState(() => {
        return {error:'sorry, but your search did not return any result'}
      })
    }
    else{
      this.setState(() => {
        return {recipes: jsonData.recipes}
      })
    }
  }
  catch(error){
    console.log(error)
  }
}


//mount the component using componentdidmount
componentDidMount(){
  this.getRecipes();
}

handleIndex = index => {
  this.setState({
    pageIndex:index
  })
}

handleDetails = (index, id) => {
  this.setState({
    pageIndex:index,
    details_id:id
  })
}

handleChange = (e) => {
  this.setState({
    search: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  const{base_url, query, search} = this.state;
  this.setState(() => {
    return{
      url: `${base_url}${query}${search}`, search:""
    }
  },() => {
    this.getRecipes();
  })

}
displayPage = (index) => {
  switch(index) {
    default:
    case 1:
    return(<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails}
    value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
    error={this.state.error}
    />)
    case 0:
    return (<RecipeDetail id={this.state.details_id} handleIndex={this.handleIndex}/>)
  }
}
  render() {
    // console.log(this.state.recipes)

    return (
      <>
        {this.displayPage(this.state.pageIndex)}
      </>
    )
  }
}
