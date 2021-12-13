import image from '../images/ocean.png'

const CollectionHeader = () => {
    return ( 
        <header style={styles}>
            <img src={image} alt="headerimage"/>
        </header>
    );
}
const styles = {
    gridArea: '1/1/4/4', 
}
 
 
export default CollectionHeader;