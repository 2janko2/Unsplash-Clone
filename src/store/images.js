import { unsplashAPI } from "../api/api";

const SET_SEARCH_RESULT = "gallery/images/SET_SEARCH_RESULT";
const SET_FAVORITE_IMAGES = "gallery/images/SET_FAVORITE_IMAGES";
const SET_RANDOM_IMAGES = "gallery/images/SET_RANDOM_IMAGES";
const SET_PHOTO_OF_THE_DAY = "gallery/images/SET_PHOTO_OF_THE_DAY";

let initialState = {
    searchResult: { results: [] },
    favoriteImages: {},
    randomImages: {},
    photoOfTheDay: null,
};

const images = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            let searchResult;
            if (action.payload.isLoadMore) {
                searchResult = {
                    ...action.payload,
                    results: [...state.searchResult.results, ...action.payload.results],
                };
            } else {
                searchResult = action.payload;
            }

            return { ...state, searchResult };
        case SET_FAVORITE_IMAGES:
            return { ...state, favoriteImages: { results: action.payload } };
        case SET_RANDOM_IMAGES:
            return { ...state, randomImages: { results: action.payload } };
        case SET_PHOTO_OF_THE_DAY:
            return { ...state, photoOfTheDay: action.payload };
        default:
            return state;
    }
};

const setSearchResult = (payload) => ({ type: SET_SEARCH_RESULT, payload });
const setFavoriteImages = (payload) => ({ type: SET_FAVORITE_IMAGES, payload });
const setRandomImages = (payload) => ({ type: SET_RANDOM_IMAGES, payload });
const setPhotoOfTheDay = (payload) => ({ type: SET_PHOTO_OF_THE_DAY, payload });

export const getSearchResult = (keyword, isLoadMore = false, page, per_page) => {
    return (dispatch) => {
        unsplashAPI.getSearchResult(keyword, page, per_page).then((data) => {
            dispatch(setSearchResult({ ...data, isLoadMore }));
        });
    };
};

export const addFavoriteImage = (image) => {
    return (dispatch) => {
        let favoriteImages = JSON.parse(localStorage.getItem("favoriteImages")) || [];
        favoriteImages.push(image);
        localStorage.setItem("favoriteImages", JSON.stringify(favoriteImages));
        dispatch(getFavoriteImages());
    };
};

export const removeFavoriteImage = (imageId) => {
    return (dispatch) => {
        let favoriteImages = JSON.parse(localStorage.getItem("favoriteImages")) || [];
        let filteredFavoriteImages = favoriteImages.filter((image) => image.id !== imageId);
        localStorage.setItem("favoriteImages", JSON.stringify(filteredFavoriteImages));
        dispatch(getFavoriteImages());
    };
};

export const getFavoriteImages = () => {
    return (dispatch) => {
        let favoriteImages = JSON.parse(localStorage.getItem("favoriteImages")) || [];
        dispatch(setFavoriteImages(favoriteImages));
    };
};

export const getRandomImages = (count) => {
    return (dispatch) => {
        unsplashAPI.getRandomImages(count).then((data) => {
            dispatch(setRandomImages(data));
        });
    };
};

export const getPhotoOfTheDay = () => {
    return (dispatch) => {
        unsplashAPI.getCollectionsPhotos(1459961, 1).then((data) => {
            dispatch(setPhotoOfTheDay(data[0]));
        });
    };
};

export default images;
