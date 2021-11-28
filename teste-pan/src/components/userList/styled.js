import styled from 'styled-components';
import media from "styled-media-query";

export const ListWrapper = styled.section`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    ${media.lessThan("medium")`
        grid-template-columns: 1fr;
    `}
`;