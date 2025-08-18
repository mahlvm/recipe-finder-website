import "./ButtonToRecipes.css"
import PropTypes from "prop-types"

const ButtonToRecipes = ({text, className = ""}) => {
    const handleClick = () => {
        window.location.href = "/recipes";
    }

    return(
        <button  onClick={handleClick} className={`customButton ${className}`}>
            {text}
        </button>
    )
}

export default ButtonToRecipes;

ButtonToRecipes.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};
