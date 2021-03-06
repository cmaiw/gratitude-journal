import React from 'react';
import styled from '@emotion/styled';

const ConfirmationText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px;
  overflow: scroll;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  z-index: +1;
`;

export function TextSubmit() {
  return (
    <>
      <ConfirmationText>Your entry has been submitted.</ConfirmationText>
      <ConfirmationText>I have something inspiring to think about for you:</ConfirmationText>
      <ConfirmationText>
        Life ist not about waiting the storm to pass. It is about learning to dance in the rain.
      </ConfirmationText>
    </>
  );
}

export function TextConfirmDelete() {
  return (
    <>
      <ConfirmationText>Hello friend,</ConfirmationText>
      <ConfirmationText>The Entry is deleted.</ConfirmationText>
      <ConfirmationText>
        Sometimes the best way to be happy is to learn to go of things you tried hard to hold on to,
        that are not longer good for you.
      </ConfirmationText>
    </>
  );
}

export function TextDelete() {
  return (
    <>
      <ConfirmationText>Hi friend,</ConfirmationText>
      <ConfirmationText>you want to delete your entry?</ConfirmationText>
      <ConfirmationText>
        One of the happiest moments in life is when you find the courage to let go of what you
        cannot change.
      </ConfirmationText>
    </>
  );
}

export function EditConfirm() {
  return (
    <>
      <ConfirmationText>Hi friend,</ConfirmationText>
      <ConfirmationText>we changed your entry.</ConfirmationText>
      <ConfirmationText>
        Change is great. Once Rumi said: “Yesterday I was clever, so I wanted to change the world.
        Today I am wise, so I am changing myself.”
      </ConfirmationText>
    </>
  );
}
