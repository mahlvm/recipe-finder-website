export default function Recipe() {
  return (
    <main>
      {/* Aqui você vai popular os detalhes da receita usando o data.json */}
      <section>
        <h1>Recipe Details</h1>
        <p>Receita específica carregada a partir do ID na URL.</p>
      </section>

      <section>
        <h2>Other Recipes</h2>
        <p>Selecione três outras receitas para exibir aqui.</p>
      </section>

      <footer>Made with ❤️ and 🥑</footer>
    </main>
  );
}