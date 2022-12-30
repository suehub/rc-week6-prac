import axios from "axios";
import { atom, selector } from "recoil";
import { getTodoById } from "../apis/todoApi";

export const todoIdState = atom({
    key: "todoIdState",
    default: 1
});

export const todoItemQuery = selector({
    key: "todoItemQuery",
    get: async ({get}) => {
        const id = get(todoIdState);

        try{
            const response = await getTodoById(id);

            if(response.data.title === 'illo expedita consequatur quia in') console.log('check');
            return response.data;
        } catch(err) {
            throw err;
        }
    }
  })