import { connect } from "react-redux";
import { useEffect } from "react";

import FrontPage from "./FrontPage";
import { getRandomImages, addFavoriteImage, getPhotoOfTheDay, removeFavoriteImage } from "../../store/images";

const FrontPageContainer = (props) => {
    useEffect(() => {
        props.getRandomImages(24);
        props.getPhotoOfTheDay();
    }, []);

    return (
        <FrontPage
            randomImages={props.randomImages}
            addFavoriteImage={props.addFavoriteImage}
            photoOfTheDay={props.photoOfTheDay}
            favoriteImagesIds={props.favoriteImagesIds}
            removeFavoriteImage={props.removeFavoriteImage}
        />
    );
};

let mapStateToProps = (state) => {
    return {
        randomImages: state.images.randomImages,
        photoOfTheDay: state.images.photoOfTheDay,
        favoriteImagesIds: state.images.favoriteImages?.results?.map((image) => image.id),
    };
};

export default connect(mapStateToProps, { getRandomImages, addFavoriteImage, getPhotoOfTheDay, removeFavoriteImage })(
    FrontPageContainer
);
