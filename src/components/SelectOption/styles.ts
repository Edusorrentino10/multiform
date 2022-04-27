import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
    display: flex;
    background-color: ${props => props.selected ? '#18181b' : '#1b1b1d'};
    border: 2px solid ${props => props.selected ? '#25cd89' : '#2d3c36'};
    border-radius: 0.6rem;
    padding: 1.25rem;
    margin-bottom: 1rem;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid ${props => props.selected ? '#25cd89' : '#425750'};
    }
`

export const Icon = styled.div`
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background-color: #212127;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`

export const Info = styled.div`
    flex: 1;
    margin-left: 1.25rem;
`

export const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`

export const Description = styled.div`
    font-size: 0.875rem;
    color: #b8b8d4;
`
