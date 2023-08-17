import { data } from "../data";

export const productsData = (state = data, action) => {
    switch (action.type) {
      case "ACTION_TYPE":
        return;
      default:
        return state;
    }
}