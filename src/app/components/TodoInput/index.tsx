import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.isEditing ? '5px 0px' : '15px 25px')};
  width: 100%;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  setTodoList,
  isEditing,
  editContent,
  editTodo,
  editModeTodo,
}: {
  setTodoList?: (todo: ITodoItem) => void;
  isEditing?: boolean;
  editContent?: string;
  editTodo?: (content) => void;
  editModeTodo?: () => void;
}) {
  const [content, setContent] = useState<string>('');
  return (
    <Box isEditing={isEditing}>
      <Input
        placeholder="할일을 입력하여 주세요"
        value={content}
        onBlur={e => {
          if (e.currentTarget === e.target) {
            editTodo && editTodo(content);
          }
        }}
        onChange={e => setContent(e.target.value)}
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            setTodoList &&
              setTodoList({
                id: '4',
                completed: false,
                editing: false,
                content: content,
              });
            setContent('');
          }
        }}
      />
    </Box>
  );
}
