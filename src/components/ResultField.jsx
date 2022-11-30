import styled from "styled-components";

const ResultField = ({ value }) => {
  return <Result type="number">{value}</Result>;
};

const Result = styled.div`
  border: 1px solid gray;
  padding: 3rem;
  border-radius: 1rem;

  font-weight: 500;
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 980px) {
    font-weight: 300;
  }

  @media screen and (max-width: 450px) {
    font-size: 13px;
    font-weight: 300;
    width: 110%;
    margin-inline: -35px;
    padding: 1.5rem;
    text-align: center;
  }
`;
export default ResultField;
