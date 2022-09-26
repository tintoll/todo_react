interface ITodoItemContent {
  content: String;
}

interface ITodoItem extends ITodoItemContent {
  id: String;
  completed: boolean;
  editing: boolean;
}
