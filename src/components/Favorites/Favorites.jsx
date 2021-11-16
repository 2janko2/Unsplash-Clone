import SearchResult from "../SearchResult/SearchResult.jsx";
import classes from "./Favorites.module.css";

const Favorites = (props) => {
    return (
        <div className="container">
            <h1 className={classes.title}>Favorites</h1>
            {props.favoriteImages.results?.length ? (
                <SearchResult
                    searchResult={props.favoriteImages}
                    favoriteImagesIds={props.favoriteImagesIds}
                    removeFavoriteImage={props.removeFavoriteImage}
                />
            ) : (
                <div className={classes.emptyMessage}>Please add your first favorite photo</div>
            )}
        </div>
    );
};

export default Favorites;
