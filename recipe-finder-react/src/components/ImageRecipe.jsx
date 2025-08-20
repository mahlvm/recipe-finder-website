import { images } from "../data/images";

const ImageRecipe = ({slug, alt}) => {
    const image = images[slug];
 

    return(
        <div>
            <picture>
                {/* Small para telas até 375px */}
                <source media="(max-width: 375px)" srcSet={image.small} />
                {/* Large para telas maiores */}
                <img src={image.large} alt={alt} />
        </picture>
        </div>
    )
}

export default ImageRecipe;