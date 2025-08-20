
import { useParams } from "react-router-dom";
import ImageRecipe from "../components/ImageRecipe";
import recipesData from "../data/data.json";
import { useEffect, useState } from "react";

const Recipe = () => {
  const params = useParams();
  const id = params.id;
  const recipeId = recipesData.find(recipe => recipe.id === Number(id));
    if (!recipeId) return <p>Carregando...</p>;

  return (
    <main>
      <section>
          <div>
             <div>
              <ImageRecipe slug={recipeId.slug} alt={recipeId.title} />
            </div>
            <h1>Recipe Details</h1>
            <p>{recipeId.title}</p>
            <p>Receita específica carregada a partir do ID na URL.</p>
        </div>
      </section>

      <section>
        <h2>Other Recipes</h2>
        <p>Selecione três outras receitas para exibir aqui.</p>
      </section>

      <footer>Made with ❤️ and 🥑</footer>
    </main>
  );
};

export default Recipe;
