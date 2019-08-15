import * as a from "../constants";
import {CloseDoneItemCardAction, OpenDoneItemCardAction} from "./types/doneItemCard";

export const openDoneItemCard = (): OpenDoneItemCardAction => ({type: a.OPEN_DONE_ITEM_CARD});

export const closeDoneItemCard = (): CloseDoneItemCardAction => ({type: a.CLOSE_DONE_ITEM_CARD});