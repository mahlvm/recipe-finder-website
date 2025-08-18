import './Home.css'
import Navbar from "../components/Navbar";
import ButtonToRecipes from "../components/ButtonToRecipes";
import carrot from "../assets/images/icon-whole-food-recipes.svg";
import fuss from "../assets/images/icon-minimum-fuss.svg";
import search from "../assets/images/icon-search-in-seconds.svg";
import imagehomeherosmall from "../assets/images/image-home-hero-small.webp";
import patternsquiggle1 from "../assets/images/pattern-squiggle-1.svg";

const Home = () => {
  return (
    <div className='homeContainer'>
        <Navbar/>
        <img className="backgroundIcon" src={patternsquiggle1} alt="patternsquiggle1" />
        <main className='mainHome'>
        <section className='section1'>
            <h1>Healthy meals, zero fuss</h1>
            <p>
            Discover eight quick, whole-food recipes that you can cook tonight—no
            processed junk, no guesswork.
            </p>
            <ButtonToRecipes text="Start exploring" className="umnoveoito" />
            <div className='imgPhotoSone'>
                <img className="photo" src={imagehomeherosmall} alt="image-home-hero-small" />
            </div>
            
        </section>

        <section className='section2'>
            <h2>What you'll get</h2>
            <div>
                <img src={carrot} alt="Carrots" />
                <h3>Whole-food recipes</h3>
                <p>Each dish uses everyday, unprocessed ingredients.</p>

                <img src={fuss} alt="Fuss" />
                <h3>Minimum fuss</h3>
                <p>All recipes are designed to make eating healthy quick and easy.</p>

                <img src={search} alt="Search" />
                <h3>Search in seconds</h3>
                <p>Filter by name or ingredient and jump straight to the recipe you need.</p>
            </div>
        </section>

        <section>
            <h2>Built for real life</h2>
            <p>
            Cooking shouldn't be complicated. These recipes come in under 30
            minutes of active time, fit busy schedules, and taste good enough to
            repeat.
            </p>
            <p>
            Whether you're new to the kitchen or just need fresh ideas, we've got
            you covered.
            </p>
        </section>

        <section>
            <h2>Ready to cook smarter?</h2>
            <p>
            Hit the button, pick a recipe, and get dinner on the table—fast.
            </p>
            <button>Browse recipes</button>
        </section>

        <footer>Made with ❤️ and 🥑</footer>
        </main>
    </div>
   
  );
}

export default Home;