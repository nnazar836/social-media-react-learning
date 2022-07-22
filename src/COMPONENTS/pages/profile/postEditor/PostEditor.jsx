import React from 'react';
import { ADD_NEW_POST_CREATOR, CHANGE_POST_TEXT_CREATOR } from '../../../../Redux/state';
import css from './PostEditor.module.css'

function PostEditor(props) {
    let { newpostText, dispatch } = props

    const textarea = React.createRef()


    function addPostCallBack(e){
        e.preventDefault()
        const action = ADD_NEW_POST_CREATOR();
        dispatch(action)
    }

    function changeValueCallBack(e){
        const action = CHANGE_POST_TEXT_CREATOR(e.target.value)
        dispatch(action)
    }

    return (
        <div className={`section`} >
            <form id="addComentForm" className={css.postEditor_form}>

                <textarea
                    className={css.postEditor__textarea}
                    value={ newpostText }
                    ref={textarea}
                    onChange={ changeValueCallBack }

                />

                <button onClick={addPostCallBack} className={css.button} >Coment</button>

            </form>
        </div>
    )
}

export default PostEditor