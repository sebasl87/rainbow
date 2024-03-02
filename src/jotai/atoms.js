import { atomWithStorage } from "jotai/utils";
const initialState = undefined;

export const cartAtom = atomWithStorage("cartAtom", initialState);
cartAtom.debugLabel = "cartAtom";

export const itemsListInCart = atomWithStorage("itemsListInCart", initialState);
itemsListInCart.debugLabel = "itemsListInCart";
