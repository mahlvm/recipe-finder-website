export default function Recipes() {
  return (
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
          <label>
            Max Prep Time
            <input type="number" placeholder="Minutes" />
          </label>
          <label>
            Max Cook Time
            <input type="number" placeholder="Minutes" />
          </label>
        </div>

        <input type="text" placeholder="Search by name or ingredient..." />
      </section>

      <section>
        {/* Aqui você vai popular a lista de receitas usando o data.json */}
      </section>

      <footer>Made with ❤️ and 🥑</footer>
    </main>
  );
}