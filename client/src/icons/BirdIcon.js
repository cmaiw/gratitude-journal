import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  fill: ${props => props.theme.colors.tertiary};

  &:hover {
    fill: ${props => props.theme.colors.quartenary};
  }

  &:active {
    fill: ${props => props.theme.colors.secondary};
  }
`;

function BirdIcon(props) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      viewBox="0 0 469.333 469.333"
      {...props}
    >
      <path
        d="M468.478,6.479C466.801,2.552,462.936,0,458.665,0L309.332,0.021c-2.895,0-5.294,1.451-7.255,3.411l-0.286-0.286
			l-83.415,83.406l-95.126-63.427c-3.25-2.177-7.479-2.385-10.948-0.531c-0.596,0.319-108.302,86.427-108.302,86.427
			c-3.531,2.833-4.896,7.594-3.396,11.865s5.531,7.135,10.063,7.135l96-0.047v74.693h0.182c-0.001,0.358-0.165,0.691-0.13,1.052
			c0.313,3.177,2.042,6.052,4.698,7.823l187.25,124.833V416c0,4.365,2.656,8.281,6.708,9.906l106.667,42.667
			c1.271,0.51,2.615,0.76,3.958,0.76c2.104,0,4.188-0.625,5.979-1.833c2.927-1.99,4.688-5.292,4.688-8.833v-85.333
			c0-1.656-0.385-3.292-1.125-4.771L324.368,166.22L466.363,18.052C469.321,14.958,470.155,10.406,468.478,6.479z M208.061,250.333
			l-73.99-49.323L282.048,53.049L208.061,250.333z"
      />
    </SVG>
  );
}
export default BirdIcon;
