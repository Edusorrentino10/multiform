import styled from 'styled-components';

export const Container = styled.div`
    margin: 1rem 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

export const Info = styled.div`
    flex: 1;
    margin-right: 1.25rem;
`

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 0.45rem;
    font-size: 1rem;
    color: #fff;
`

export const Description = styled.div`
    text-align: right;
    font-size: 0.81rem;
    color: #b8b8d4;
`

export const IconArea = styled.div<{ active: boolean }>`
    width: 3.15rem;
    height: 3.15rem;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25cd89' : '#212127'};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Point = styled.div<{ active: boolean }>`
    width: 0.375rem;
    height: 0.375rem;
    border: 3px solid #212127;
    border-radius: 50%;
    margin-left: 1rem;
    margin-right: -0.375rem;
    background-color: ${props => props.active ? '#25cd89' : '#1b1b1d'};
    
`