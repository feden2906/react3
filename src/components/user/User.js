

export default function User({item,buttonOfPosts}) {

    const onClickButtons = ()=>{
        buttonOfPosts(item);
    }

    return (
        <div className="User">
        <h3>{item.id} {item.name}</h3>
            <button onClick={onClickButtons}>details</button>
        </div>
    );
}