import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';
import { loadTodoData, saveTodoData } from 'store/localStroage';
import { TodoState } from './types';

export const initialState: TodoState = {
  todoList: loadTodoData(),
};

const slice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodoItem>) => {
        state.todoList.push(action.payload);
        saveTodoData(state.todoList);
      },
      prepare: (content: string) => {
        // prepare에서 데이터 받고 ITodoItem객체로 만들어준다.
        const id = nanoid();
        return {
          payload: {
            id: id,
            content: content,
            completed: false,
            editing: false,
          },
        };
      },
    },
    checkTodo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      saveTodoData(state.todoList);
    },
    editModeTodo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;

      // 에디트 모드는 하나만 동작하도록 하기 위해 다른것들을 모둔 false로 만든다
      for (const todo of state.todoList) {
        if (todo.id === id) continue;
        if (todo.editing) todo.editing = false;
      }

      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.editing = !todo.editing;
      }
      saveTodoData(state.todoList);
    },
    editTodo(state, action: PayloadAction<{ id: string; content: string }>) {
      const id = action.payload.id;
      const content = action.payload.content;
      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.content = content;
      }
      saveTodoData(state.todoList);
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const filteredTodos = state.todoList.filter(todo => todo.id !== id);
      state.todoList = filteredTodos;
      saveTodoData(state.todoList);
    },
  },
});

export const { actions: TodoActions } = slice;
export const useTodoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { TodoActions: slice.actions };
};
