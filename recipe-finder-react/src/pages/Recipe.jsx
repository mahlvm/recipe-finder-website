import { useLocation } from "react-router-dom";
import ImageRecipe from "../components/ImageRecipe";

const Recipe = () => {
  const location = useLocation();
  // verificar se location.state existe
  const recipe = location.state?.recipe; 

  if (!recipe) {
    return <p>Receita não encontrada. Volte à página de receitas.</p>;
  }

  return (
    <main>
      <section>
        <div>
          <ImageRecipe slug={recipe.slug} alt={recipe.title} />
        </div>
        <h1>Recipe Details</h1>
        <p>{recipe.title}</p>
        <p>Receita específica carregada a partir do ID na URL.</p>
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
