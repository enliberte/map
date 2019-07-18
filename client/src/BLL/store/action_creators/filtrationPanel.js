import {actions as a} from "../constants";


export const setFiltersNew = (filter) => ({type: a.SET_FILTERS_NEW, payload: filter});

export const setFiltersInWork = (filter) => ({type: a.SET_FILTERS_IN_WORK, payload: filter});

export const setFiltersDone = (filter) => ({type: a.SET_FILTERS_DONE, payload: filter});

export const setFiltersArchive = (filter) => ({type: a.SET_FILTERS_ARCHIVE, payload: filter});
