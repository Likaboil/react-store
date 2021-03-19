import { createSelector } from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.BOOKS;

const selectState = (state) => state[NAME_SPACE];

export const selectBooks = createSelector(selectState, (state) => state.books);
export const selectStatus = createSelector(selectState, (state) => state.status);
