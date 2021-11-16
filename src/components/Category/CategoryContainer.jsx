import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getSearchResult, addFavoriteImage, removeFavoriteImage } from "../../store/images";
import Category from "./Category";
import { categories } from "../../constants/constants";

const CategoryContainer = (props) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].url === props.match.params.categoryName) {
                setTitle(categories[i].name);
                return props.getSearchResult(categories[i].name);
            }
        }
    }, [props.match.params.categoryName]);

    return (
        <Category
            title={title}
            searchKeyword={title}
            searchResult={props.searchResult}
            addFavoriteImage={props.addFavoriteImage}
            removeFavoriteImage={props.removeFavoriteImage}
            favoriteImagesIds={props.favoriteImagesIds}
            getSearchResult={props.getSearchResult}
        />
    );
};

let mapStateToProps = (state) => {
    return {
        searchResult: state.images.searchResult,
        favoriteImagesIds: state.images.favoriteImages?.results?.map((image) => image.id),
    };
};

export default connect(mapStateToProps, { getSearchResult, addFavoriteImage, removeFavoriteImage })(CategoryContainer);
