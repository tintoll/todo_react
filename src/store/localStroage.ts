export const saveTodoData = (todoData: ITodoItem[]) => {
  localStorage.setItem('todo', JSON.stringify(todoData));
};

export const loadTodoData = (): ITodoItem[] => {
  const todoData = localStorage.getItem('todo');
  if (todoData) {
    return JSON.parse(todoData);
  } else {
    return [];
  }
};
