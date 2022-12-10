import { useState } from "react";

function Message() {

    const [message, setMessage] = useState([
        {
            text: 'Как зовут?',
            author: 'Admin',
            side: 'inbox',
            id: 1
        },
        {
            text: 'Экспо',
            author: 'User',
            side: 'outbox',
            id: 2
        },
        {
            text: 'Сколько лет?',
            author: 'Admin',
            side: 'inbox',
            id: 3
        },
        {
            text: '100',
            author: 'User',
            side: 'outbox',
            id: 4
        }

    ]);


    const deleteHandler = (id) => {
        setMessage(message.filter(item => {
            if (item.id === id) {
                return false
            }
            return true
        }))
    };



    return (
        <div>
            {message.map(item => {
                return (
                    <div className={`row ${item.side === 'outbox' ? 'justify-content-end' : ''}`}>
                        <div className="col-3">
                            <div className={item.side}>
                                <div className="admin">
                                    {item.author}
                                </div>
                                {item.text}
                                <button onClick={() => deleteHandler(item.id)}>
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Message;