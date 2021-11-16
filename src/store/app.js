import { getFavoriteImages } from "./images";

const IS_INITIALIZED = "gallery/app/IS_INITIALIZED";
const SEARCH_KEYWORD = "gallery/app/SEARCH_KEYWORD";

let initialState = {
    isInitialized: false,
    searchKeyword: "",
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case IS_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            };
        case SEARCH_KEYWORD:
            return {
                ...state,
                searchKeyword: action.payload,
            };
        default:
            return state;
    }
};

const initializeAC = () => ({ type: IS_INITIALIZED });
export const setSearchKeyword = (payload) => ({ type: SEARCH_KEYWORD, payload });

export const initializeApp = () => {
    return (dispatch) => {
        let favoriteImagesPromise = dispatch(getFavoriteImages());
        let initializePromises = [favoriteImagesPromise];

        Promise.all(initializePromises).then(() => {
            dispatch(initializeAC());
        });
    };
};

export default app;
