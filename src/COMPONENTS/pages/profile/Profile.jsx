import css from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard';
import Post from "../../post/post"
import PostEditor from './postEditor/PostEditor';

function Profile(props) {

    let { info, profile, dispatch } = props

    const posts = profile.posts.posts
    const newpostText = profile.posts.postText


    return (
        <div className={css.profile} >

            <ProfileCard info={info} />

            <PostEditor
                newpostText={newpostText}
                dispatch={dispatch}
            />

            <div className={`section`} >

                {posts.map((post, index) => (
                    <Post
                        index={index}
                        post={post}
                    />))}

            </div>
        </div>

    )
}

export default Profile;