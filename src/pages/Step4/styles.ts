import styled from 'styled-components';

export const Container = styled.div`
    background-color: #212127;
    border-radius: 10px;
    padding: 2rem;
    p {
        font-size: 0.82rem;
        color: #b8b8d4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.625rem;
        display: flex;
        justify-content: center;
        margin-bottom: 2.5rem;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #212127;
        margin: 2rem 0;
    }
    label {
        font-size: 0.82rem;
        input{
            display: block;
            margin-top: 0.5rem;
            box-sizing: border-box;
            width: 100%;
            padding: 1.25rem 0.625rem;
            border: 2px solid #25cd89;
            border-radius: 10px;
            color: #fff;
            outline: 0;
            font-size: 1rem;
            background-color: #1b1b1d;
        }
    }

    h3 {
        font-size: 17px;
    }


    h3 span {
        font-weight: normal;
        color: #b8b8d4;
    }
`

export const LinkStyle = styled.div`
    margin-top: 1.5rem;
    .backButton {
        font-size: 1rem;
        text-decoration: none;
        padding: 1.25rem 2.5rem;
        color: #b8b8d4;
        transition: filter 0.5s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`