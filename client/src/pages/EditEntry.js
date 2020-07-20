import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import { useParams, useHistory } from 'react-router-dom';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { getOneEntry, updateOneEntry } from '../api/entryRequests';
import Header from '../components/Header';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const Textarea = styled.textarea`
  display: flex;
  align-items: center;
  position: relative;
  width: 90%;
  border: none;
  border-radius: 8px;
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.quinary};
  font-size: 14px;
  padding: 5px;
  font-family: 'Dosis', sans-serif;
`;

const Card = styled.form`
  width: 85%;
  height: 70vh;
  border-radius: 8px;
  padding: 10px;
  color: ${props => props.theme.colors.primary};
  margin: 15px;
  overflow: scroll;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: space-around;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 4px;
  background-color: ${props => props.theme.colors.quinary};
  border: 1px solid ${props => props.theme.colors.primary};
`;

const Icon = styled.img`
  height: 35px;
  width: auto;
  padding: 0px;
  margin-right: 10px;
`;

export default function EditEntry() {
  const { entryId } = useParams();
  const [entry, setEntry] = React.useState({
    date: '',
    social: '',
    suroundings: '',
    nutrition: '',
    creativity: '',
    selvLoveandCare: '',
    goals: '',
    favourite: false
  });
  // eslint-disable-next-line
  const history = useHistory();

  React.useEffect(() => {
    async function getEntry() {
      const response = await getOneEntry(entryId, entry);
      setEntry(response);
    }

    getEntry();
    // eslint-disable-next-line
  }, []);

  function handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    setEntry({
      ...entry,
      [event.target.name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await updateOneEntry(entryId, entry);
    history.push('/edit/confirm');
    console.log(entryId, entry);
  }

  return (
    <PageWrapperCenterSpEvenly>
      <Header>Welcome: </Header>
      <WrapperTitleBird>
        <PageTitle>Not happy? Edit entry:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <Card onSubmit={handleSubmit}>
        {entry && (
          <div key={entry._id}>
            <Label>
              <Icon src="/images/kalender.svg" />
              <Textarea name="date" onChange={handleChange} value={entry.date} />
            </Label>
            <Label>
              <Icon src="/images/family.svg" />
              <Textarea name="social" onChange={handleChange} value={entry.social} />
            </Label>
            <Label>
              <Icon src="/images/nature1.svg" />
              <Textarea name="suroundings" onChange={handleChange} value={entry.suroundings} />
            </Label>
            <Label>
              <Icon src="/images/food.svg" />
              <Textarea name="nutrition" onChange={handleChange} value={entry.nutrition} />
            </Label>
            <Label>
              <Icon src="/images/creativity.svg" />
              <Textarea name="creativity" onChange={handleChange} value={entry.creativity} />
            </Label>
            <Label>
              <Icon src="/images/lotus.svg" />
              <Textarea
                name="selfloveAndCare"
                onChange={handleChange}
                value={entry.selfloveAndCare}
              />
            </Label>
            <Label>
              <Icon src="/images/goal.svg" />
              <Textarea name="goals" onChange={handleChange} value={entry.goals} />
            </Label>
            <Label>
              <Icon src="/images/fav.svg" />
              <Textarea name="favourite" onChange={handleChange} value={entry.favourite} />
            </Label>
            <ButtonWrapper>
              <UniversalButton type="submit">submit</UniversalButton>
            </ButtonWrapper>
          </div>
        )}
      </Card>
    </PageWrapperCenterSpEvenly>
  );
}
