import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100% auto;
  font-size: 1.1em;
  border: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  setTodoList,
}: {
  setTodoList: (todo: ITodoItem) => void;
}) {
  const [content, setContent] = useState<string>('');
  return (
    <Box>
      <Input
        placeholder="할일을 입력하여 주세요"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          setTodoList({
            id: '4',
            completed: false,
            editing: false,
            content: content,
          });
          setContent('');
        }}
      />
    </Box>
  );
}
