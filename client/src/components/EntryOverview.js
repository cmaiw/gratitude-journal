import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from './UniversalButton';
import { useHistory } from 'react-router-dom';
import Textfield from './Textfield';
import propTypes from 'prop-types';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4px;
  justify-content: flex-start;
  align-items: space-between;
  margin-top: 8px;
`;

export default function EntryOverview({
  id,
  date,
  answerQuestionOne,
  answerQuestionTwo,
  answerQuestionThree,
  answerQuestionFour,
  answerQuestionFive,
  answerQuestionSix,
  favourite
}) {
  const history = useHistory();
  function handleDetailsClick(id) {
    history.push(`/entries/${id}`);
  }

  return (
    <div>
      <div>
        <h3>Entry date:</h3>
        <Textfield>{date}</Textfield>
        <h3>What made you smile or laugh that day?</h3>
        <Textfield type="text">{answerQuestionOne}</Textfield>
        <h3>What did you learn?</h3>
        <Textfield>{answerQuestionTwo}</Textfield>
        <h3>Who made you smile or laugh?</h3>
        <Textfield>{answerQuestionThree}</Textfield>
        <h3>What were you thankful for that day?</h3>
        <Textfield>{answerQuestionFour}</Textfield>
        <h3>Who did you like to thank that day?</h3>
        <Textfield>{answerQuestionFive}</Textfield>
        <h3>What were you looking for the next day?</h3>
        <Textfield>{answerQuestionSix}</Textfield>
        <h3>One of your favourite entries?</h3>
        <Textfield>{favourite ? 'yes' : 'no'}</Textfield>
        <ButtonWrapper>
          <UniversalButton type="button" onClick={() => handleDetailsClick(id)}>
            Detail
          </UniversalButton>
        </ButtonWrapper>
      </div>
    </div>
  );
}

EntryOverview.propTypes = {
  id: propTypes.string,
  date: propTypes.string,
  answerQuestionOne: propTypes.string,
  answerQuestionTwo: propTypes.string,
  answerQuestionThree: propTypes.string,
  answerQuestionFour: propTypes.string,
  answerQuestionFive: propTypes.string,
  answerQuestionSix: propTypes.string,
  favourite: propTypes.string
};
