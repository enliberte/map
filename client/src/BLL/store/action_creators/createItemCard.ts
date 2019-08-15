import * as a from "../constants";
import {CloseCreateItemCardAction, OpenCreateItemCardAction} from "./types/createItemCard";

export const openCreateItemCard = (): OpenCreateItemCardAction => ({type: a.OPEN_CREATE_ITEM_CARD});

export const closeCreateItemCard = (): CloseCreateItemCardAction => ({type: a.CLOSE_CREATE_ITEM_CARD});