import "./Recipes.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageRecipe from "../components/ImageRecipe"
import { useState } from "react";
import recipesData from "../data/data.json";
import { useNavigate } from "react-router-dom";
import cooktime from "../assets/images/icon-cook-time.svg";
import preptime from "../assets/images/icon-prep-time.svg";
import serving from "../assets/images/icon-servings.svg";
import arrow from "../assets/images/icon-chevron-down.svg";
import iconsearch from "../assets/images/icon-search.svg";


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
  const findId = event.target.value
  navigate(`/recipe/${findId}`);
}



  return (
    <div className="recipesContainer">
      <Navbar />
      <main className="mainRecipes">
      <section className="recipesSecOne">
        <h2 className="h2">Explore our simple, healthy recipes</h2>
        <p className="p">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </section>

      <section className="recipesSecTwo">
        <div className="recipesFilter">
          <select className="recipesSelect" onChange={(e) => setMaxPrepTime(e.target.value)}>
            <option value="">Max Prep Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="clear">Clear</option>
          </select>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="recipesFilter">
           <select className="recipesSelect" onChange={(e) => setMaxCookTime(e.target.value)}>
            <option value="">Max Cook Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
            <option value="clear">Clear</option>
          </select>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="recipesFilterInput">
          <img src={iconsearch} alt="icon-search" />
          <input 
            className="recipesInput"
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

      <section className="recipesSecThree">
            {recipes.map((recipe) => (

              <div  className="recipesDiv" key={recipe.id}>
                <div className="imgDivRecipes">
                  <ImageRecipe slug={recipe.slug} alt={recipe.title} />
                </div>
                
                <h5 className="h5">{recipe.title}</h5>
                <p className="smalltxt">{recipe.overview}</p>

                <div className="iconDivRecipes">
                  <div className="iconDivRecipesLeft">
                    <div className="iconTxt">
                      <img src={serving} alt="Serving" />
                      <p className="smalltxt">Servings: {recipe.servings}</p>
                    </div>

                    <div className="iconTxt">
                      <img src={cooktime} alt="Cook Time" />
                      <p className="smalltxt">Cook: {recipe.cookMinutes}</p>
                    </div>
                   </div> 
                    
              

                  <div className="iconDivRecipesRight">
                    <div className="iconTxt">
                       <img src={preptime} alt="Prep Time" />
                      <p className="smalltxt">Prep: {recipe.prepMinutes}</p>
                    </div>
                  </div>
                </div>
               
                <div className="recipesDivButton">
                  <button className="viewRecipeButton" value={recipe.id} onClick={handleViewRecipe}>View Recipe</button>
                </div>
              </div>
            ))}
      </section>
      </main>
      <div className="recipesFooter"> 
         <Footer />
      </div>
    </div>
    
  );
}

export default Recipes;