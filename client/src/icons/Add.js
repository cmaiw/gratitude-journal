import React from 'react';
import styled from '@emotion/styled';

const AddPath = styled.path`
  fill: ${props => (props.active ? props.theme.colors.quaternary : props.theme.colors.tertiary)};
`;

function AddIcon(props) {
  return (
    <svg
      enable-background="new 0 0 24 24"
      height="38px"
      viewBox="0 0 24 24"
      width="38px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <AddPath d="m14.25 0h-11.5c-1.52 0-2.75 1.23-2.75 2.75v15.5c0 1.52 1.23 2.75 2.75 2.75h6.59c-.54-1.14-.84-2.41-.84-3.75 0-1.15.22-2.25.63-3.26-.04.01-.08.01-.13.01h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.38 0 .72.22.88.54.65-1.01 1.49-1.87 2.48-2.54h-8.36c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1 0 .05 0 .09-.01.13.93-.38 1.95-.6 3.01-.62v-5.76c0-1.52-1.23-2.75-2.75-2.75zm-6.25 6h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1z" />
      <AddPath d="m17.25 10.5c-3.722 0-6.75 3.028-6.75 6.75s3.028 6.75 6.75 6.75 6.75-3.028 6.75-6.75-3.028-6.75-6.75-6.75zm2.75 7.75h-1.75v1.75c0 .552-.448 1-1 1s-1-.448-1-1v-1.75h-1.75c-.552 0-1-.448-1-1s.448-1 1-1h1.75v-1.75c0-.552.448-1 1-1s1 .448 1 1v1.75h1.75c.552 0 1 .448 1 1s-.448 1-1 1z" />
    </svg>
  );
}
export default AddIcon;
