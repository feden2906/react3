import {getAxiosUsers, getPostOfUser} from "../../service/user.axios";
import {useEffect, useState} from "react";
import User from "../user/User";


export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    useEffect(() => {
        getAxiosUsers().then(({data}) => setUsers([...data]));
    }, []);

    const buttonOfPosts = (u) => {
        setUser({...u});

        getPostOfUser(u.id).then(value=>console.log(value));

    }
    return (
        <div className="Users">
            <div className={'user-box'}>
            {
                users.map(userItem => <User
                    key={userItem.id}
                    item={userItem}
                    buttonOfPosts={buttonOfPosts}
                />)
            }

        </div>

            {user&&(<div className={'text'}>{JSON.stringify(user)}</div>)}

        </div>
    );
}