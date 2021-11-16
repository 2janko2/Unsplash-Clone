import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { setSearchKeyword } from "../../store/app";
import { getSearchResult } from "../../store/images";
import classes from "./Search.module.css";

const Search = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const searchKeyWord = useSelector((state) => state.app.searchKeyword);

    const onChange = (e) => {
        dispatch(setSearchKeyword(e.target.value));
    };

    const search = () => {
        dispatch(getSearchResult(searchKeyWord));
        history.push("/search");
    };

    return (
        <div className={classes.wrapper}>
            <input
                className={classes.search}
                onChange={(e) => onChange(e)}
                placeholder="Search free high-resolution photos"
            />
            <button className={classes.searchBtn} onClick={search}></button>
        </div>
    );
};

export default Search;
