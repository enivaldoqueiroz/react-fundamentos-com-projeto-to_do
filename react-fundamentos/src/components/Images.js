import mountain from '../assets/img002.jpg'

const Images = () => {
    return (
        <div>
            <img src="/img001.jpg" />
            <hr></hr>
            <img src={mountain} />
        </div>
    );
};

export default Images;