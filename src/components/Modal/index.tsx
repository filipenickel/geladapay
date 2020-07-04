import React from 'react';

import { Container, ContentBox } from './styles';

const Modal: React.FC = ({ children }) => {
  return (
    <Container>
      <ContentBox>{children}</ContentBox>
    </Container>
  );
};

export default Modal;
