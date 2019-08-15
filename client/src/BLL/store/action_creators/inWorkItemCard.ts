import * as a from "../constants";
import {CloseInWorkItemCardAction, OpenInWorkItemCardAction} from "./types/inWorkItemCard";

export const openInWorkItemCard = (): OpenInWorkItemCardAction => ({type: a.OPEN_IN_WORK_ITEM_CARD});

export const closeInWorkItemCard = (): CloseInWorkItemCardAction => ({type: a.CLOSE_IN_WORK_ITEM_CARD});