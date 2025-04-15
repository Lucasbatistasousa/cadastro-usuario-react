import styled from "styled-components";

export const Button = styled.button `
    border: ${props => props.theme === 'primary' ? 'none': '1px solid'};
    background: ${(props) => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #ffffff;
    padding: 16px 32px;
    border-radius: 30px;
    width: fit-content;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme === 'primary' ? '#fe7e5d': '#ffffff'};
        color: ${props => props.theme === 'primary' ? '#ffffff': '#000000'};
    }

    &:active {
        opacity: .6;
    }
`