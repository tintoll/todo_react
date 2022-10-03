import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import CicleButton from '../Button/CircleButton';
import CheckBox from '../CheckBox';
import TodoInput from '../TodoInput';

const Box = styled.div<{ isEditing: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props =>
    props.isEditing ? '11px 15px 11px 25px' : '15px 15px 15px 25px'};
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }

  &:hover {
    padding: 10px 15px 10px 25px;
    & > .delete-button {
      display: flex;
    }
  }
`;

const TodoContent = styled.span<{
  checked?: boolean;
}>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box isEditing={todo.editing}>
      <div style={{ width: '100%', display: 'flex', alignContent: 'center' }}>
        <CheckBox checked={todo.completed} />
        <Block marginLeft="10px" />
        {todo.editing ? (
          <TodoInput isEditing={todo.editing} />
        ) : (
          <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
        )}
      </div>
      <CicleButton
        className="delete-button"
        onClick={() => {}}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            viewBox="0 0 48 48"
          >
            <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z" />
          </svg>
        )}
      />
    </Box>
  );
}
