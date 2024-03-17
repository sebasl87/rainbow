import { atomWithStorage } from "jotai/utils";
const initialState = undefined;

export const productsList = atomWithStorage("productsList", initialState);
productsList.debugLabel = "productsList";

export const itemsListInCart = atomWithStorage("itemsListInCart", initialState);
itemsListInCart.debugLabel = "itemsListInCart";
