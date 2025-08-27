
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ImageRecipe from "../components/ImageRecipe";
import recipesData from "../data/data.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Recipe.css"
import cooktime from "../assets/images/icon-cook-time.svg";
import preptime from "../assets/images/icon-prep-time.svg";
import serving from "../assets/images/icon-servings.svg";
import iconbulletpoint from "../assets/images/icon-bullet-point.svg"



const Recipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const recipeId = recipesData.find(recipe => recipe.id === Number(id));
    if (!recipeId) return <p>Carregando...</p>;


  const handleViewRecipe = (event) => {
    const idRecipe = event.target.value
    navigate(`/recipe/${idRecipe}`);
  }

  
  return (
    <div className="recipeContainer"> 
      <Navbar />
      <main className="mainRecipe">
        <section className="recipeSecOne">
          <div className="recipeDiv">
              <div className="imgDivRecipe">
                <ImageRecipe slug={recipeId.slug} alt={recipeId.title} />
              </div>
              <h2 className="h2">{recipeId.title}</h2>
              <p className="p">{recipeId.overview}</p>
              <div className="iconDivRecipe">
                <div className="iconDivRecipeLeft">
                  <div className="iconTxt">
                    <img src={serving} alt="Serving" />
                    <p className="p">Servings: {recipeId.servings}</p>
                  </div>
                  <div className="iconTxt">
                    <img src={cooktime} alt="Cook Time" />
                      <p className="p">Cook: {recipeId.cookMinutes}</p>
                  </div>
                </div>
                <div className="iconDivRecipeRight">
                  <div className="iconTxt">
                  <img src={preptime} alt="Prep Time" />
                  <p className="p">Prep: {recipeId.prepMinutes}</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="ingredients">
            <h4 className="h4">Ingredients:</h4>
            <div>
            {recipeId.ingredients.map((ingridient) => (
              <div className="eachTopic">
                <div>
                  <img src={iconbulletpoint} alt="iconbulletpoint" />
                </div>  
                <div>
                  <p className="p">{ingridient}</p>
                </div> 
              </div>
            ))}
            </div>
          </div>

          <div className="instructions">
            <h4 className="h4">Instructions:</h4>
            <div>
            {recipeId.instructions.map((instruction) => (
              <div className="eachTopic">
                <div>
                  <img src={iconbulletpoint} alt="iconbulletpoint" />
                </div>  
                <div>
                  <p className="p">{instruction}</p>
                </div> 
              </div>
            ))}
            </div>
          </div>
        </section>

        <section className="recipeSecTwo">
          <h1>Other Recipes</h1>
          {recipesData
            .filter((recipe) => recipe.id !== recipeId)
            .slice(0, 3)
            .map(item => (
              <div className="itemDiv" key={item.id}>
                <div className="imgItemDiv">
                    <ImageRecipe slug={item.slug} alt={item.title} />
                </div>
                <h5 className="h5">{item.title}</h5>
                <p className="smalltxt">{item.overview}</p>

                <div className="iconDivItem">
                  <div className="iconDivItemLeft">
                    <div className="iconTxt">
                      <img src={serving} alt="Serving" />
                      <p className="smalltxt">Servings: {item.servings}</p>
                    </div>
                  
                    <div className="iconTxt">
                      <img src={cooktime} alt="Cook Time" />
                      <p className="smalltxt">Cook: {item.cookMinutes}</p>
                    </div>
                  </div> 
                                      
                                
                  
                  <div className="iconDivItemRight">
                    <div className="iconTxt">
                      <img src={preptime} alt="Prep Time" />
                      <p className="smalltxt">Prep: {item.prepMinutes}</p>
                    </div>
                  </div>
                </div>
                
                <div className="itemDivButton">
                  <button className="viewRecipeButton" value={item.id} onClick={handleViewRecipe}>View Recipe</button>
                </div>
              </div>

            ))
          
            }
        </section>
      </main>
      <Footer /> 
     </div>
  );
};

export default Recipe;
