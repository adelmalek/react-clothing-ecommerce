import styled from 'styled-components';

type BackgroundImageProps = { 
    imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const DirectoryItemBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    padding: 0 25px;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    @media screen and (max-width: 800px) {
        padding: 0 18px;
    }
`;

export const DirectoryItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    min-width: 30%;
    height: 240px;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${DirectoryItemBody} {
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    @media screen and (max-width: 800px) {
        height: 200px;
    }
`;

export const Title = styled.h2`
    color: #4a4a4a;
    font-size: 22px;
    font-weight: bold;
    margin: 0 6px 0;
    text-transform: uppercase;

    @media screen and (max-width: 800px) {
        font-size: 15px;
    }
`;

export const ShopNow = styled.p`
    font-size: 16px;
    font-weight: lighter;
`;