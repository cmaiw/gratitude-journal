import React from 'react';
import styled from '@emotion/styled';

const CheckmarkPath = styled.path`
  fill: ${props => props.theme.colors.background};
`;

function CheckmarkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      viewBox="0 0 611.99 611.99"
      {...props}
    >
      <CheckmarkPath
        d="M589.105,80.63c-30.513-31.125-79.965-31.125-110.478,0L202.422,362.344l-69.061-70.438
				c-30.513-31.125-79.965-31.125-110.478,0c-30.513,31.125-30.513,81.572,0,112.678l124.29,126.776
        c30.513,31.125,79.965,31.125,110.478,0l331.453-338.033C619.619,162.202,619.619,111.755,589.105,80.63z"
      />
    </svg>
  );
}
export default CheckmarkIcon;
