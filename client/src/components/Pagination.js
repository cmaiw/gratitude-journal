import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Li = styled.li`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border-radius: 8px;
  margin-right: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props => props.theme.colors.background};
  padding: auto;
  text-decoration: none;
  }
  &&:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`;

const Pagination = ({ entriesPerPage, totalEntries, paginate }) => {
  const pageNumbers = [];
  const history = useHistory()

  for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav id="pagination_container">
      <Ul id="pagination">
        {pageNumbers.map(pageNumber => (
          <Li key={pageNumber} id="page-item">
            <Button 
            id="page-link" onClick={() => {paginate(pageNumber)
            history.push(`page-${pageNumber}`)}}>
              {pageNumber}
            </Button>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default Pagination;

Pagination.propTypes = {
  entriesPerPage: propTypes.number,
  totalEntries: propTypes.number,
  paginate: propTypes.func,
};
