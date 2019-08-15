import * as a from "../constants";
import {SetFiltersArchiveAction, SetFiltersDoneAction, SetFiltersInWorkAction, SetFiltersNewAction} from "./types/filtrationPanel";


export const setFiltersNew = (filter: boolean): SetFiltersNewAction => ({type: a.SET_FILTERS_NEW, payload: filter});

export const setFiltersInWork = (filter: boolean): SetFiltersInWorkAction => ({type: a.SET_FILTERS_IN_WORK, payload: filter});

export const setFiltersDone = (filter: boolean): SetFiltersDoneAction => ({type: a.SET_FILTERS_DONE, payload: filter});

export const setFiltersArchive = (filter: boolean): SetFiltersArchiveAction => ({type: a.SET_FILTERS_ARCHIVE, payload: filter});
