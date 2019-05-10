import React, { Component } from 'react'
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

export default class App extends Component {
  //initial empty state
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=8245181b4549e2065e02d3481a419134"
  };

//   //try to get the data using async method
// async getRecipes() {
//   try{
//     const data = await fetch(this.state.url);
//     const jsonData = await data.json()
//     this.setState({
//       recipes : jsonData.recipes
//     })
//   }
//   catch(error){
//     console.log(error)
//   }
// }


// //mount the component using componentdidmount
// componentDidMount(){
//   this.getRecipes();
// }
  render() {
    console.log(this.state.recipes)

    return (
      <>
      <RecipeList recipes={this.state.recipes} />
      <RecipeDetail />
      </>
    )
  }
}
