/* eslint-disable default-case */
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_SORT } from "../actions"

const filter_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return { ...state, all_products: [...action.payload], filtered_products: [...action.payload] }
    }

    if (action.type === SET_GRIDVIEW) {
        return { ...state, grid_view: true }
    }
    if (action.type === SET_LISTVIEW) {
        return { ...state, grid_view: false }
    }
    if (action.type === UPDATE_SORT) {
        return { ...state, sort: action.payload }
    }
    if (action.type === SORT_PRODUCTS) {
        const { sort, filtered_products } = state;
        let tempProducts = [...filtered_products];

        switch (sort) {
            case "price-lowest":
                tempProducts = tempProducts.sort((a,b)=>a.price-b.price )
                break;
            case "price-highest":
                tempProducts = tempProducts.sort((a,b)=>b.price-a.price )
                break;
            case "name-a":
                tempProducts = tempProducts.sort((a,b)=>a.name.localeCompare(b.name))
                break;
            case "name-z":
                tempProducts = tempProducts.sort((a,b)=>b.name.localeCompare(a.name))
                break;
        }

        return { ...state,filtered_products:tempProducts }
    }
    return state;
}

export default filter_reducer;