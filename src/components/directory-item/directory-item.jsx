import { 
  DirectoryItemContainer, 
  BackgroundImage, 
  DirectoryItemBody, 
  Title, 
  ShopNow } from './directory-item.styles';

const DirectoryItem = ({category}) => {

    const { id, title, imageUrl} = category;

    return (
        <DirectoryItemContainer key={id}>
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