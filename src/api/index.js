import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

export const fetchAds = () => API.get('/advertisements/v1');
export const fetchAd = (id) => API.get(`/advertisements/v1/${id}`);
export const signIn = (formData) => API.post('/users/v1/login', formData);
export const fetchUser = (id) => API.get(`/users/v1/${id}`);
export const fetchUserAds = (id) => API.get(`/advertisements/v1/user/${id}`);
export const createNewAd = (formData) =>
    API.post('/advertisements/v1', formData);

export const fetchCarTypes = () => API.get('/cartypes/v1');
export const fetchCarModels = (formData) =>
    API.post('/carmodels/v1/cartype', formData);
export const fetchBodyTypes = (formData) =>
    API.post('/bodytypes/v1/cartype', formData);
export const fetchCarByBodyTypeAndModel = (formData) =>
    API.post('/cars/v1/carmodel/bodytype', formData);
