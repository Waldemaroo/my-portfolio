import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {FlexDirection, JustifyContent, AlignItems, FlexWrap} from "../types/common.ts";

interface FlexWrapperProps {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: FlexWrap;
  gap?: string;
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"};
    width: 100%;
    
    @media ${theme.media.tablet} {
        flex-direction: ${props => props.direction === "row" ? "column" : props.direction || "column"};
        align-items: ${props => props.direction === "row" ? "center" : props.align || "center"};
    }
`
