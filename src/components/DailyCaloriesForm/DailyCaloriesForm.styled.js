import styled from 'styled-components';
import VerdanaBold from '../../fonts/VerdanaBold.ttf';

export const Form = styled.form`
  padding-left: ${p => p.theme.spaceForm[1]}px;
  padding-right: ${p => p.theme.spaceForm[1]}px;

  color: ${p => p.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[0]}px;
    max-width: 608px;
  }
`;

export const ColumnWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  margin-bottom: ${p => p.theme.spaceForm[2]}px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: ${p => p.theme.space[5]}px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spaceForm[3]}px;
  max-width: 280px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.4;

  color: ${p => p.theme.colors.primary};

  @media screen and (min-width: 768px) {
    max-width: 608px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.spaceForm[2]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  :last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
export const RadiobuttonLabel = styled.label`
  position: relative;
  display: flex;
  margin-right: ${p => p.theme.spaceForm[1]}px;
  accent-color: ${p => p.theme.colors.accent};
  border-color: white;

  &:hover {
    color: ${p => p.theme.colors.accent};
    font-weight: bold;
  }
`;

export const BloodTypeValue = styled.p`
  margin: 0;
  min-height: 18px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  color: ${p => p.theme.colors.primary};
`;

export const RadiobuttonWrapper = styled.div`
  display: flex;
  margin-bottom: ${p => p.theme.spaceForm[2]}px;
  padding-top: ${p => p.theme.spaceForm[0]}px;
  border-top: 1px solid ${p => p.theme.colors.input};

  &:hover {
    border-top: 3px solid ${p => p.theme.colors.accent};
  }
`;

export const InputForm = styled.input`
  max-width: 280px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.colors.input};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  &:focus {
    border-bottom: 3px solid ${p => p.theme.colors.accent};
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 320px) {
    margin-top: 40px;
  }
  @media (min-width: 768px) {
    margin-top: 60px;
    padding-left: 0px;
  }
  @media (min-width: 1280px) {
    padding-left: 305px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 210px;
  margin-bottom: ${p => p.theme.spaceForm[1]}px;
  padding: ${p => p.theme.spaceForm[0]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;

  border-radius: ${p => p.theme.radii.button};
  border: none;

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

  cursor: pointer;
  transition: box-shadow 300ms ease-in;

  :enabled {
    :hover,
    :focus {
      box-shadow: 0px 15px 20px rgba(252, 132, 45, 0.4);
      /* transform: translateY(-7px); */
    }
  }

  :disabled {
    opacity: 0.6;
  }

  @media screen and (min-width: 768px) {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;

export const Error = styled.p`
  max-width: 100%;
  margin: ${p => p.theme.space[0]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${VerdanaBold};
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
  line-height: 1.21;
  text-decoration: none;
  text-align: center;

  color: ${p => p.theme.colors.error};
`;