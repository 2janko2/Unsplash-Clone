import { connect } from "react-redux";

import SearchResult from "./SearchResult";
import { getSearchResult, removeFavoriteImage, addFavoriteImage } from "../../store/images";

const SearchResultContainer = (props) => {
    return (
        <SearchResult
            searchResult={props.searchResult}
            favoriteImagesIds={props.favoriteImagesIds}
            addFavoriteImage={props.addFavoriteImage}
            removeFavoriteImage={props.removeFavoriteImage}
            searchKeyword={props.searchKeyword}
            getSearchResult={props.getSearchResult}
        />
    );
};

let mapStateToProps = (state) => {
    return {
        searchResult: state.images.searchResult,
        favoriteImagesIds: state.images.favoriteImages?.results?.map((image) => image.id),
        searchKeyword: state.app.searchKeyword,
    };
};

export default connect(mapStateToProps, { getSearchResult, addFavoriteImage, removeFavoriteImage })(
    SearchResultContainer
);
