import { createSelector } from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.CART;

const selectState = (state) => state[NAME_SPACE];

export const selectItems = createSelector(selectState, (state) => state.items);

export const selectTotal = createSelector(selectState, (state) => state.total);

export const selectItemsAmount = createSelector(
  selectItems,
  (items) => items.reduce((count, item) => count + item.count, 0)
);
