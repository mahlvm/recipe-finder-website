import "./ReadyToCook.css"
import ButtonToRecipes from "./ButtonToRecipes";

const ReadyToCook = () => {
    return(
        <div className='sectionReady'>
            <h2 className='h2'>Ready to cook smarter?</h2>
            <p className='p'> Hit the button, pick a recipe, and get dinner on the table—fast. </p>
            <ButtonToRecipes text="Browser Recipes" className="umseteseis" />
        </div>
    )
}

export default ReadyToCook;