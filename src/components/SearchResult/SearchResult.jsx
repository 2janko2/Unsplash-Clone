import { useState } from "react";
import classes from "./SearchResult.module.css";

const SearchResult = (props) => {
    const [page, setPage] = useState(1);

    const download = (e, fileName) => {
        e.preventDefault();
        fetch(e.target.href, {
            method: "GET",
            headers: {},
        })
            .then((response) => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", fileName);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loadMore = () => {
        setPage(page + 1);
        props.getSearchResult(props.searchKeyword, true, page + 1);
    };

    return (
        <>
            <div className={classes.wrapper}>
                {props.searchResult?.results?.map((image) => (
                    <div key={image.id} className={classes.imageWrapper}>
                        <img src={image.urls.small} className={classes.img} alt={image.alt_description} />
                        <button
                            onClick={() =>
                                props.favoriteImagesIds.includes(image.id)
                                    ? props.removeFavoriteImage(image.id)
                                    : props.addFavoriteImage(image)
                            }
                            className={`${classes.favoriteBtn}
                            ${
                                props.favoriteImagesIds.includes(image.id)
                                    ? classes.removeFromFavorite
                                    : classes.addToFavourite
                            }
                        `}
                            title={
                                props.favoriteImagesIds.includes(image.id) ? "Remove from favorite" : "Add to favourite"
                            }
                        >
                            Add to favorite
                        </button>
                        <div className={classes.meta}>
                            <div className={classes.author}>
                                <img
                                    src={image.user.profile_image.small}
                                    alt={`${image.user.first_name} ${image.user.last_name}`}
                                    className={classes.authorImg}
                                />
                                <div className={classes.authorName}>
                                    {image.user.first_name} {image.user.last_name}
                                </div>
                            </div>
                            <a
                                className={classes.download}
                                href={image.urls.full}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => download(e, `${image.id}.jpg`)}
                            >
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {props.searchResult?.results?.length < props.searchResult?.total && (
                <button className={classes.loadMore} onClick={loadMore}>
                    Load more
                </button>
            )}
        </>
    );
};

export default SearchResult;
