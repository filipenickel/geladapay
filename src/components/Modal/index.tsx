import React from 'react';

import { Container, ContentBox } from './styles';

interface Props {
  isOpen: boolean;
  isOpenQr: boolean;
}
const Modal: React.FC<Props> = ({ children, isOpen, isOpenQr }) => {
  return (
    <Container isOpen={isOpen} isOpenQr={isOpenQr}>
      <ContentBox>{children}</ContentBox>
    </Container>
  );
};

export default Modal;
