import './Forum.css';

const Forum = ({
    history,
}) => {

    const data = [
        {
            "header" : 'Hallo',
            "shortText" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident vitae ullam illo libero aspernatur corrupti rem maxime ab. Ratione.',
            "user" : 'achu',
        },
        {
            "header" : 'Malo',
            "shortText" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident vitae ullam illo libero aspernatur corrupti rem maxime ab. Ratione.'
        },
        {
            "header" : 'Tallo',
            "shortText" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident vitae ullam illo libero aspernatur corrupti rem maxime ab. Ratione.'
        },
        {
            "header" : 'coco',
            "shortText" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident vitae ullam illo libero aspernatur corrupti rem maxime ab. Ratione.'
        },

    ];

    const newPostHandle = () => {
        history.push('/posts/new');
    }

    return (
        <div className="main">
            <div className="forum-header">
                <h1>Най-важни въпроси</h1>
                <button onClick={newPostHandle} className="forum-btn-new-post">Задай въпрос</button>
            </div>

            <ul className="forum-list" >
                {
                    data.map( (theme) => {
                        return( 
                        <li>
                            <div className="list-item-photo" ></div> 
                            <div>
                                <h3 className="forum-list-header" >{` ${theme.header} `}</h3>
                                <p className="forum-list-short-text">{` ${theme.shortText} `}</p>
                                <p className="forum-list-user">{` ${theme.user} `}</p>
                            </div> 
                        </li>)
                    })
                }
            </ul>
        </div>
    );
}

export default Forum;