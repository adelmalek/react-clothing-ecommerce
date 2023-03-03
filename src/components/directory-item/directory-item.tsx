import { useNavigate } from 'react-router-dom';

import { 
  DirectoryItemContainer, 
  BackgroundImage, 
  DirectoryItemBody, 
  Title, 
  ShopNow } from './directory-item.styles';

import { FC } from 'react';

import { DirectoryCategory } from '../directory/directory';

type DirectoryItemProps = { 
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({category}) => {

    const { id, title, imageUrl, route} = category;
    const navigate = useNavigate();
    const navigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer key={id} onClick={navigateHandler}>
          <BackgroundImage imageUrl={imageUrl}>
          </BackgroundImage>
          <DirectoryItemBody>
            <Title>{title}</Title>
            <ShopNow>Shop Now</ShopNow>
          </DirectoryItemBody>
        </DirectoryItemContainer>
    )

};

export default DirectoryItem;