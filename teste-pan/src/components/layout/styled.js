import styled from 'styled-components';
import media from "styled-media-query";

export const Wrapper = styled.main`
  padding: 2rem 4rem;
  ${media.lessThan("medium")`
    padding: 1rem;
  `}
`;
