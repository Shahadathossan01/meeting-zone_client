

const Zone = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <h2>{item.location}</h2>
            <button>Details</button>
        </div>
    );
};

export default Zone;