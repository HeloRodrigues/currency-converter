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
`;
export default ResultField;
