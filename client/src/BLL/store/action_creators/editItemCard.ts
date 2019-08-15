import * as a from "../constants";
import {CloseEditItemCardAction, OpenEditItemCardAction} from "./types/editItemCard";

export const openEditItemCard = (): OpenEditItemCardAction => ({type: a.OPEN_EDIT_ITEM_CARD});

export const closeEditItemCard = (): CloseEditItemCardAction => ({type: a.CLOSE_EDIT_ITEM_CARD});