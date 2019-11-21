import React from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "ff18760a0e1084696e6cfea81b16c344";

class App extends React.Component{

  state = {
    recipes: []
  }
  
  getRecipe = async (e) => {

    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=2`);
   // console.log(recipeName);
   const data = await api_call.json();
   console.log(data.recipes);
   //console.log(data.recipes[0].recipe_id);// - CORS issue - to trick it - http://cors-anywhere.herokuapp.com/
   this.setState({ recipes: data.recipes });
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
