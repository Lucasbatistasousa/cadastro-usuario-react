import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 20px;
`

export const Title = styled.h2`
    color: #ffffff;
`

export const ContainerUsers = styled.div`
    color: #ffffff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    @media (max-width: 450px){
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #181f20;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 20px;
`

export const TrashIcon = styled.img``

export const AvatarUser = styled.img`
    max-width: 60px;
`