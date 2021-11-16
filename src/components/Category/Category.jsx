import SearchResult from "../SearchResult/SearchResult";
import classes from "./Category.module.css";

const Category = (props) => {
    return (
        <div className="container">
            <h1 className={classes.title}>{props.title}</h1>
            <SearchResult
                searchKeyword={props.searchKeyword}
                searchResult={props.searchResult}
                addFavoriteImage={props.addFavoriteImage}
                removeFavoriteImage={props.removeFavoriteImage}
                favoriteImagesIds={props.favoriteImagesIds}
                getSearchResult={props.getSearchResult}
            />
        </div>
    );
};

export default Category;
