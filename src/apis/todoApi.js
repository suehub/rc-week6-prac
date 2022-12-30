import axios from "axios";

/*
* API 1.11
*/

export const getTodoById = (id) => 
axios.get(process.env.REACT_APP_BASE_URL + `/todos/${id}`);

