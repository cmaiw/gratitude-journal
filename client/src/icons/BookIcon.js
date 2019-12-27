import React from 'react';
import styled from '@emotion/styled';

const BookPath = styled.path`
  fill: ${props => (props.active ? props.theme.colors.quaternary : props.theme.colors.tertiary)};

  &:hover {
    fill: ${props => props.theme.colors.quaternary};
  }
`;

function BookIcon(props) {
  return (
    <svg
      height="38px"
      viewBox="0 0 510 510"
      width="38px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <BookPath d="m62.333 416.884v.01c0 27.534 22.407 49.94 49.941 49.94h27.584v-49.94c0-8.367 6.783-15.14 15.14-15.14h292.669v-34.811h-335.393c-27.534.001-49.941 22.407-49.941 49.941z" />
      <BookPath d="m269.615 466.835h173.005c2.787 0 5.047-2.259 5.047-5.047v-29.754h-178.052z" />
      <BookPath d="m123.407 336.665v-336.665h-11.133c-27.534 0-49.941 22.407-49.941 49.951v304.195c21.224-16.958 39.558-17.481 61.074-17.481z" />
      <BookPath d="m153.686 0v336.665h293.981v-331.618c0-2.787-2.259-5.047-5.047-5.047zm242.304 140.051c0 8.357-6.783 15.14-15.14 15.14h-160.338c-8.367 0-15.14-6.783-15.14-15.14v-74.648c0-8.357 6.772-15.14 15.14-15.14h160.339c8.357 0 15.14 6.783 15.14 15.14v74.648z" />
      <BookPath d="m170.137 504.944c0 4.268 4.969 6.608 8.26 3.891 16.5-13.622 13.775-11.372 16.7-13.79 5.595-4.626 13.675-4.632 19.278 0 2.923 2.416.218.183 16.7 13.79 3.291 2.717 8.26.377 8.26-3.891v-72.91h-69.198z" />
      <BookPath d="m235.652 80.543h130.059v44.369h-130.059z" />
    </svg>
  );
}

export default BookIcon;
