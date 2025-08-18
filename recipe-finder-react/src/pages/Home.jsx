import './Home.css'
import Navbar from "../components/Navbar";
import ButtonToRecipes from "../components/ButtonToRecipes";
import carrot from "../assets/images/icon-whole-food-recipes.svg";
import fuss from "../assets/images/icon-minimum-fuss.svg";
import search from "../assets/images/icon-search-in-seconds.svg";
import imagehomeherosmall from "../assets/images/image-home-hero-small.webp";
import patternsquiggle1 from "../assets/images/pattern-squiggle-1.svg";
import imagehomereallifesmall from "../assets/images/image-home-real-life-small.webp";

const Home = () => {
  return (
    <div className='homeContainer'>
        <Navbar/>
        <img className="backgroundIcon" src={patternsquiggle1} alt="patternsquiggle1" />
        <main className='mainHome'>
        <section className='section1'>
            <h1 className='h1'>Healthy meals, zero fuss</h1>
            <p className='p'>
            Discover eight quick, whole-food recipes that you can cook tonight—no
            processed junk, no guesswork.
            </p>
            <ButtonToRecipes text="Start exploring" className="umnoveoito" />
            <div className='imgPhotoSone'>
                <img className="photo" src={imagehomeherosmall} alt="image-home-hero-small" />
            </div>
            
        </section>

        <section className='section2'>
            <h2 className='h2'>What you'll get</h2>
            <div className='divSection2'>
                <div className='blockSection2' >
                    <img src={carrot} alt="Carrots" />
                    <h3 className='h3'>Whole-food recipes</h3>
                    <p className='p'>Each dish uses everyday, unprocessed ingredients.</p>
                </div>
                <div className='blockSection2'>    
                    <img src={fuss} alt="Fuss" />
                    <h3 className='h3'>Minimum fuss</h3>
                    <p className='p'>All recipes are designed to make eating healthy quick and easy.</p>
                </div>    
                <div className='blockSection2'>
                    <img src={search} alt="Search" />
                    <h3 className='h3'>Search in seconds</h3>
                    <p className='p'>Filter by name or ingredient and jump straight to the recipe you need.</p>
                </div>
            </div>
        </section>

        <section className='section3'>
            <h2 className='h2'>Built for real life</h2>
            <p className='p'>
            Cooking shouldn't be complicated. These recipes come in under 30
            minutes of active time, fit busy schedules, and taste good enough to
            repeat.
            </p>
            <p className='p'>
            Whether you're new to the kitchen or just need fresh ideas, we've got
            you covered.
            </p>

            <div className='imgPhotoSthree'>
                <img className="photo2" src={imagehomereallifesmall} alt="imagehomereallifesmall" />
            </div>    

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