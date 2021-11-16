import axios from "axios";

const axiosInstance = axios.create({
    async: true,
    crossDomain: true,
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID qXCBYZN4wpl1CgwUetVO065t1KDgVr8ZDY-LVFemqQo",
    },
});

export const unsplashAPI = {
    getSearchResult(keyword, page = 1, per_page = 12) {
        return axiosInstance.get(`search/photos?page=${page}&per_page=${per_page}&query=${keyword}`).then((response) => {
            return response.data;
        });
    },

    getRandomImages(count = 1) {
        return axiosInstance.get(`photos/random?count=${count}`).then((response) => {
            return response.data;
        });
    },

    getCollectionsPhotos(id, per_page = 10) {
        return axiosInstance.get(`/collections/${id}/photos?per_page=${per_page}`).then((response) => {
            return response.data;
        });
    },
};
