import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const AppID = '78ff7aa7';
  const AppKey = 'cf3dfdd97ce86e486a63f0c881b320c3';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Mango');

  useEffect(() => { 
          getRecipes();
   }, [query]);

   const getSearch = e => {
     e.preventDefault();
     setQuery(search);
     setSearch('');
   }


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppID}&app_key=${AppKey}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={ (e) => setSearch(e.target.value)} ></input>
        <button  type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
                  key={recipe.recipe.url}
                  title={recipe.recipe.label} 
                  img={recipe.recipe.image}
                  calories = {recipe.recipe.calories} 
                  ingredients = {recipe.recipe.ingredients}
                  />
        ))}
      </div>

    </div>
  );
}


export default App;
