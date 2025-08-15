import "./ButtonToRecipes.css"
import PropTypes from "prop-types"

const ButtonToRecipes = ({text, className = ""}) => {
    return(
        <button className={`customButton ${className}`}>
            {text}
        </button>
    )
}

export default ButtonToRecipes;

ButtonToRecipes.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};