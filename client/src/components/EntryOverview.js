import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from './UniversalButton';
import { useHistory } from 'react-router-dom';
import Textfield from './Textfield';
import propTypes from 'prop-types';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 33vh;
  max-width: 350px;
  align-items: space-evenly;
  background-color: ${props => props.theme.colors.quinary};
  color: ${props => props.theme.colors.primary};
  border-radius: 30px 15px 30px 15px;
  padding: 20px;
  margin: 10px;
  border-right: 6px solid ${props => props.theme.colors.primary};
  border-bottom: 6px solid ${props => props.theme.colors.primary};
  flex-wrap: wrap;
  opacity: 0.88;
  overflow: hidden;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  margin: 20px;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  flex-wrap: nowrap;
`;

const CardIcon = styled.img`
  height: 40px;
  width: auto;
  padding: 0px;
  margin-right: 10px;
`;

const H3 = styled.h3`
  color: ${props => props.theme.colors.headings};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function EntryOverview({ id, date, title, favourite }) {
  const history = useHistory();
  function handleDetailsClick(id) {
    history.push(`/entries/${id}`);
  }

  return (
    <Card key="_id">
      <Section>
        <Textfield>
          <CardIcon src="/images/kalender.svg" />
          {date}
        </Textfield>
        <UniversalButton type="button" onClick={() => handleDetailsClick(id)}>
          Detail
        </UniversalButton>
      </Section>
      <H3>{title}</H3>
      <Section>
        <Textfield>
          <CardIcon src="/images/fav.svg" />
          {favourite ? 'yes' : 'no'}
        </Textfield>
      </Section>
    </Card>
  );
}

EntryOverview.propTypes = {
  id: propTypes.string,
  date: propTypes.string,
  title: propTypes.string,
  social: propTypes.string,
  suroundings: propTypes.string,
  nutrition: propTypes.string,
  creativity: propTypes.string,
  selfloveAndCare: propTypes.string,
  goals: propTypes.string,
  favourite: propTypes.string
};
