import { Routes, Route } from 'react-router-dom'
import Profile from '../../pages/profile/Profile'
import Friends from '../../pages/friends/friends'
import Message from '../../pages/message/message'
import Feed from '../../pages/feed/feed'
import css from './content.module.css'


function Content(props) {
    let { state, dispatch } = props

    let { info, profile, message } = state

    return (
        <div className={css.content}>
            <Routes>
                <Route path="/profile" element={
                    <Profile
                        profile={profile}
                        info={info}
                        dispatch={dispatch}
                    />}
                />


                <Route path="/friends" element={<Friends />} />

                <Route  path="/message/:dialogId" element={
                    <Message
                        message={message}
                        dispatch={dispatch}
                    />
                } />

                <Route path="/feed" element={<Feed />} />
            </Routes>
        </div>
    )
}

export default Content;