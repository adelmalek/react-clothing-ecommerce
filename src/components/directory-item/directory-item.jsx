import { useNavigate } from 'react-router-dom';

import { 
  DirectoryItemContainer, 
  BackgroundImage, 
  DirectoryItemBody, 
  Title, 
  ShopNow } from './directory-item.styles';

const DirectoryItem = ({category}) => {

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

}

export default DirectoryItem;