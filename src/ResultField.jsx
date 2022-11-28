import styled from "styled-components";

const ResultField = ({ value }) => {
  return <Result type="text">{value}</Result>;
};

const Result = styled.div`
  border: 1px solid gray;
  padding: 50px;
  border-radius: 4px;
`;
export default ResultField;
