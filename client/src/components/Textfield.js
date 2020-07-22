import styled from '@emotion/styled';

const Textfield = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0px;
  background: ${props => props.theme.colors.quinary};
  color: ${props => props.theme.colors.font};
  border: none;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  margin-left: 10px;
  flex-wrap: nowrap;
  text-align: flex-start;
`;

export default Textfield;
