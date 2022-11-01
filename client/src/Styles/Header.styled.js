import styled from "styled-components";

export const Head = styled.header`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 0;
  color: ${({ theme }) => theme.dark.fg}};
`;
