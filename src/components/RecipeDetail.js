import React, { Component } from 'react'
import {recipe} from '../tempDetails';
export default class RecipeDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: recipe,
      url: `https://food2fork.com/api/get?key=8245181b4549e2065e02d3481a419134&rId=${this.props.id}`
    }
  }




async componentDidMount(){
  try{
    const data = await fetch(this.state.url);
    const jsonData = await data.json()
    this.setState({
      recipe : jsonData.recipe
    })
  }
  catch(error){
    console.log(error)
  }
}

  render() {
    const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;
    console.log(this.state.recipe)
    return (
        <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button type="button" className="btn btn-warning mb-5 text-capitalize">Back</button>
              <img src={image_url} className="d-block w-100"alt="" />
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">Published by {publisher}</h6>
              <a href={publisher_url} target="_blank" rel="noopenner noreferrer"
              className="btn btn-primary mt-2 text-capitalize">Publisher Webpage</a>

              <a href={source_url} target="_blank" rel="noopenner noreferrer"
              className="btn btn-info mx-2 mt-2  text-capitalize">Source URL</a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {
                  ingredients.map((item, index) => {
                    return <li key={index} className="list-group-item text-slanted">{item}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>

        </>
    )
  }
}
