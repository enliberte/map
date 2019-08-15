import * as a from "../constants";
import {CloseReadItemCardAction, OpenReadItemCardAction} from "./types/readItemCard";

export const openReadItemCard = (): OpenReadItemCardAction => ({type: a.OPEN_READ_ITEM_CARD});

export const closeReadItemCard = (): CloseReadItemCardAction => ({type: a.CLOSE_READ_ITEM_CARD});