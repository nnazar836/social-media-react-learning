import Feedback from './feedback/feedback';
import css from './post.module.css'
import UserCard from './userCard/userCard';

function Post(props) {

    let {post, index} = props
    let {user, text, likes} = post
    // debugger

    return (
        <div className={css.post}>
            <UserCard
                info={user} // we get info about user who has posted the post
            />

            <div className={css.post__text} > { text } </div>

            <Feedback
                likes={ likes }

            />

        </div>
    )
}

export default Post;