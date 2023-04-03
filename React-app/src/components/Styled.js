import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url("${(props) => props.background}");
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const NextPrevButtons = styled.button`
    flex: 1;
    padding: 10px;
`
export const StoryTimeButton = styled.button`
    border-color: none;
    background-color: silver;
    padding: 10px 15px;
`