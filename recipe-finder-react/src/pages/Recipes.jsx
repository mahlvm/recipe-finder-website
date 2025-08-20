import "./Recipes.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageRecipe from "../components/ImageRecipe"
import { useState } from "react";
import recipesData from "../data/data.json";
import { useNavigate } from "react-router-dom";


const Recipes = ()=> {
  const navigate = useNavigate();
  const[findRecipe, setFindRecipe] = useState("");
  const[maxPrepTime, setMaxPrepTime] = useState("");
  const[maxCookTime, setMaxCookTime] = useState("");
  const[recipes, setRecipes] = useState(recipesData);
  


 const handleSearch = () => {

     const filteredTitle = recipesData.filter(
        (item) =>
          item.title.toLowerCase().includes(findRecipe.toLowerCase()) || 
          item.ingredients.some((ingredient) => ingredient.toLocaleLowerCase().includes(findRecipe.toLocaleLowerCase())) 
      )

      const results = filteredTitle.filter(
        (result) =>
          (maxPrepTime === "" || maxPrepTime === "clear" || result.prepMinutes <= Number(maxPrepTime)) &&
          (maxCookTime === "" || maxCookTime === "clear" ||result.cookMinutes <= Number(maxCookTime)) 
      )
      
    setRecipes(results);
  

};

const handleViewRecipe = (recipe) => {
  navigate(`/recipe/${recipe.id}`, {state: {recipe}});
}



  return (
    <div className="recipesContainer">
      <Navbar />
      <main>
      <section>
        <h1>Explore our simple, healthy recipes</h1>
        <p>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </section>

      <section>
        <div>
          <select onChange={(e) => setMaxPrepTime(e.target.value)}>
            <option value="">Max Prep Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="clear">Clear</option>
          </select>
        </div>

        <div>
           <select onChange={(e) => setMaxCookTime(e.target.value)}>
            <option value="">Max Cook Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
            <option value="clear">Clear</option>
          </select>
        </div>

        <div>
          <input 
            placeholder="Search by name or ingredient…"
            type="text"
            value={findRecipe}
            onChange={(e) => setFindRecipe(e.target.value) }
            onKeyDown={(e) => {
              if(e.key === "Enter"){
                handleSearch();
              }
            }}
          />
        </div>
      </section>

      <section>
            {recipes.map((recipe) => (
              <div  key={recipe.id}>
                <div>
                  <ImageRecipe slug={recipe.slug} alt={recipe.title} />
                </div>
                <h2>{recipe.title}</h2>
                <p>{recipe.overview}</p>
                <div>
                  <p>Servings:{recipe.servings}</p>
                  <p>Prep:{recipe.prepMinutes}</p>
                </div>
                <div>
                  <p>Cook:{recipe.cookMinutes}</p>
                </div>
                <div>
                  <button onClick={() => handleViewRecipe(recipe)}>View Recipe</button>
                </div>
              </div>
            ))}
      </section>
      </main>
      <Footer />
    </div>
    
  );
}

export default Recipes;