import image from '../images/profilepicture.png'

const CollectionProfileImage = () => {
    return ( 
        <div style={styles}>
            <img src={image} alt="profileimage"/>        
        </div>
    );
}

const styles = {
   gridArea: '2/2/3/3', 
}

export default CollectionProfileImage;