import styled from 'styled-components';

export const Container = styled.div`
    p {
        font-size: 0.82rem;
        color: #b8b8d4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.625rem;
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
    button {
        background-color: #25cd89;
        color: #fff;
        font-size: 0.875rem;
        font-weight: bold;
        padding: 1.25rem 2.5rem;
        border: 0;
        border-radius: 2rem;
        cursor: pointer;
        margin-top: 2rem;
        transition: filter 0.5s;
        &:hover {
            filter: brightness(0.9)
        }
    }

`