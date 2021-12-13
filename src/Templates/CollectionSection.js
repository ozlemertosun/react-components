import CollectionHeader from "../Components/CollectionHeader";
import CollectionProfileImage from "../Components/CollectionProfileImage"
import CollectionTitle from "../Components/CollectionTitle";
import CollectionAuthour from "../Components/CollectionAuthour"
import CollectionArticleNr from "../Components/CollectionArticleNr";

const CollectionSection = () => {
    return ( 
       <div style={styles}>
        
        <CollectionHeader/>
        <CollectionArticleNr/>
        <CollectionProfileImage/>
        <CollectionTitle/>
        <CollectionAuthour/>

       </div>
    );
}

const styles = {
    borderRadius: '12px',  
    display: 'grid', 
    gridTemplate: '212px 60px 100px / 28px 60px 284px',  
    border: 'grey 1px solid',
    width: '372px',
}
 
export default CollectionSection;