import { useEffect } from "react";
import { connect } from "react-redux";

import { getFavoriteImages, removeFavoriteImage } from "../../store/images";
import Favorites from "./Favorites";

const FavoritesContainer = (props) => {
    useEffect(() => {
        props.getFavoriteImages();
    }, []);

    return (
        <Favorites
            favoriteImages={props.favoriteImages}
            favoriteImagesIds={props.favoriteImages?.results?.map((image) => image.id)}
            removeFavoriteImage={props.removeFavoriteImage}
        />
    );
};

let mapStateToProps = (state) => ({
    favoriteImages: state.images.favoriteImages,
});

export default connect(mapStateToProps, { getFavoriteImages, removeFavoriteImage })(FavoritesContainer);
