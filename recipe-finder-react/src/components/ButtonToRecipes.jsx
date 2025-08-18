import { useNavigate } from "react-router-dom"
import "./ButtonToRecipes.css"
import PropTypes from "prop-types"

const ButtonToRecipes = ({text, className = ""}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/recipes");
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
