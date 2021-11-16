import Search from "../Search/Search";
import SearchResult from "../SearchResult/SearchResult";
import classes from "./FrontPage.module.css";

const FrontPage = ({ photoOfTheDay, randomImages, ...props }) => {
    return (
        <div>
            <div className={classes.photoOfTheDayWrapper}>
                <div className={classes.searchWrapper}>
                    <Search />
                </div>
                {photoOfTheDay && (
                    <img
                        className={classes.photoOfTheDay}
                        src={photoOfTheDay.urls.full}
                        alt={photoOfTheDay.alt_description || "photo of the day"}
                    />
                )}
                <div className={classes.author}>
                    Photo of the Day by{" "}
                    <a
                        className={classes.authorLink}
                        href={photoOfTheDay?.user?.links?.html}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {photoOfTheDay?.user?.first_name} {photoOfTheDay?.user?.last_name}{" "}
                    </a>
                </div>
            </div>
            <div className="container">
                <SearchResult
                    searchResult={randomImages}
                    addFavoriteImage={props.addFavoriteImage}
                    favoriteImagesIds={props.favoriteImagesIds}
                    removeFavoriteImage={props.removeFavoriteImage}
                />
            </div>
        </div>
    );
};

export default FrontPage;
