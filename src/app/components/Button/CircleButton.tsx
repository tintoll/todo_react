import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 36px;
  min-width: 36px;
  height: 36px;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default function CicleButton({
  className,
  onClick,
  Icon,
}: {
  className?: string;
  onClick: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <Circle className={className} onClick={onClick}>
      <Icon />
    </Circle>
  );
}
