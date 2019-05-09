import React, { Component } from 'react'
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

export default class App extends Component {
  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=8245181b4549e2065e02d3481a419134"
  }
  render() {
    return (
      <>
      <RecipeList />
      <RecipeDetail />
      </>
    )
  }
}
