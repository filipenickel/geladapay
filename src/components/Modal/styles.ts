import styled from 'styled-components/native';

interface ModalProps {
  isOpen: boolean;
}

export const Container = styled.View<ModalProps>`
  position: absolute;
  align-items: center;
  justify-content: center;
  ${props => (props.isOpen ? 'width: 100%; height:100%' : 'width: 0; height:0')}
  background: rgba(0, 0, 0, 0.5);
`;

export const ContentBox = styled.View<ModalProps>`
  width: 82%;
  height: 68%;
  background: #fff;
  border-radius: 9px;
`;
