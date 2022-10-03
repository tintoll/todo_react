import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0 25p 100px -60px rgba(0, 0, 0, 0.18);
  border-radius: 15px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

export function HomePage() {
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([
    {
      id: '1',
      completed: true,
      editing: true,
      content: '할일 1',
    },
    {
      id: '2',
      completed: false,
      editing: false,
      content: '할일 2',
    },
    {
      id: '3',
      completed: false,
      editing: false,
      content: '할일 세번째',
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="A Todo" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할일</Title>
          <TodoInput
            setTodoList={todo => {
              setTodoList([todo, ...todoList]);
            }}
          />
          <TodoList>
            {todoList.map(todo => (
              <TodoItem todo={todo} />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
