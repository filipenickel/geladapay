import React from 'react';

import { Container, ContentBox } from './styles';

interface Props {
  isOpen: boolean;
}
const Modal: React.FC<Props> = ({ children, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <ContentBox>{children}</ContentBox>
    </Container>
  );
};

export default Modal;
