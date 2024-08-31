import {Link} from "react-router-dom";

const CreatorCard = ({creator}) => {

    return (
        <div className={'creator-card'}>
            <img src={creator.imageURL} alt={"image"}></img>
            <div className={'creator-content'}>
                <h2>{creator.name}</h2>
                <Link to={`/${creator.id}`}>
                    <button>View</button>
                </Link>
                <Link to={`/edit/${creator.id}`}>
                    <button>Edit</button>
                </Link>
                <a href={creator.url} target={'_blank'}><button>Youtube</button></a>
                <div>{creator.description}</div>
            </div>

        </div>
    );
}

export default CreatorCard;