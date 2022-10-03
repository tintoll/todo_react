import { RootState } from 'types';
import { createSelector } from 'reselect';

export const baseSelector = (state: RootState) => state.todo;

export const TodoListSelector = createSelector(
  baseSelector,
  state => state.todoList,
);
