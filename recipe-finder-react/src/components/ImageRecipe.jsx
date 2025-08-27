import { images } from "../data/images";
import "./ImageRecipe.css"

const ImageRecipe = ({slug, alt}) => {
    const image = images[slug];
 

    return(
        <div className="componentImgDiv">
            <picture className="componentImgPicture">
               <picture className="componentImgPicture">
                    {/* até 375px de largura → usa small */}
                    <source media="(max-width: 375px)" srcSet={image.small} />
                    {/* se não cair nessa condição → usa large */}
                    <img src={image.large} alt={alt} />
                </picture>
            </picture>
        </div>
    )
}

export default ImageRecipe;