import "./ReadyToCook.css"
import ButtonToRecipes from "./ButtonToRecipes";
import patternknife from "../assets/images/pattern-knife.svg";
import patternfork from "../assets/images/pattern-fork.svg";


const ReadyToCook = () => {
    return(
        <div className='sectionReady'>
            <img className="patternknife" src={patternknife} alt="patternsquiggle1" />
            <img className="patternfork" src={patternfork} alt="patternsquiggle1" />
            <h2 className='h2'>Ready to cook smarter?</h2>
            <p className='p'> Hit the button, pick a recipe, and get dinner on the table—fast. </p>
            <ButtonToRecipes text="Browser Recipes" className="umseteseis" />
        </div>
    )
}

export default ReadyToCook;
