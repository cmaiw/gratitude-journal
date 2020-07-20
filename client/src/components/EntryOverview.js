import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from './UniversalButton';
import { useHistory } from 'react-router-dom';
import Textfield from './Textfield';
import propTypes from 'prop-types';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 33vh;
  width: 100%;
  align-items: space-evenly;
  background-color: ${props => props.theme.colors.quinary};
  color: ${props => props.theme.colors.primary};
  border-radius: 30px 15px 30px 15px;
  padding: 20px;
  margin-bottom: 10px;
  overflow: scroll;
  text-overflow: ellipsis;
  border-right: 6px solid ${props => props.theme.colors.quartenary};
  border-bottom: 6px solid ${props => props.theme.colors.quartenary};
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const CardIcon = styled.img`
  height: 40px;
  width: auto;
  padding: 0px;
  margin-right: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4px;
  justify-content: flex-start;
  align-items: space-between;
  margin-top: 8px;
`;

const H3 = styled.h3`
  color: ${props => props.theme.colors.primary};
`;

export default function EntryOverview({
  id,
  date,
  social,
  suroundings,
  nutrition,
  creativity,
  selfloveAndCare,
  goals,
  favourite
}) {
  const history = useHistory();
  function handleDetailsClick(id) {
    history.push(`/entries/${id}`);
  }

  return (
    <Card key="_id">
      <div>
        <Section>
          <CardIcon src="/images/kalender.svg" />
          <Textfield>{date}</Textfield>
        </Section>
        <H3>What made you happy today?</H3>
        <Section>
          <Textfield type="text">
            <CardIcon src="/images/family.svg" />
            {social}
          </Textfield>
        </Section>
        <Section>
          <Textfield>
            <CardIcon src="/images/nature1.svg" />
            {suroundings}
          </Textfield>
        </Section>
        <Section>
          <Textfield>
            <CardIcon src="/images/food.svg" />
            {nutrition}
          </Textfield>
        </Section>
        <Section>
          <Textfield>
            <CardIcon src="/images/creativity.svg" />
            {creativity}
          </Textfield>
        </Section>
        <Section>
          <Textfield>
            <CardIcon src="/images/lotus.svg" />
            {selfloveAndCare}
          </Textfield>
        </Section>
        <Section>
          <Textfield>
            <CardIcon src="/images/goal.svg" />
            {goals}
          </Textfield>
        </Section>
        <Section>
          <Textfield>
            <CardIcon src="/images/fav.svg" />
            {favourite ? 'yes' : 'no'}
          </Textfield>
        </Section>
        <ButtonWrapper>
          <UniversalButton type="button" onClick={() => handleDetailsClick(id)}>
            Detail
          </UniversalButton>
        </ButtonWrapper>
      </div>
    </Card>
  );
}

EntryOverview.propTypes = {
  id: propTypes.string,
  date: propTypes.string,
  social: propTypes.string,
  suroundings: propTypes.string,
  nutrition: propTypes.string,
  creativity: propTypes.string,
  selfloveAndCare: propTypes.string,
  goals: propTypes.string,
  favourite: propTypes.string
};
