import { Link } from 'react-router-dom'
import css from './message.module.css'
import Button from '../../Button/Button'
import { ADD_NEW_MESSAGE_CREATOR, CHANGE_NEW_MESSAGE_CREATOR } from '../../../Redux/state'


function Message(props) {
    let { message, dispatch } = props
    // debugger

    const dialogs = message.dialogs


    function showDialogs(dialog) {
        return (
            <li className={css.dialogs__listItem}>
                <Link to={`/message/${dialog.id}`} > {dialog.name} </Link>
            </li>
        )
    }

    function changeNewMessageCallBack(e){
        const action = CHANGE_NEW_MESSAGE_CREATOR(e.target.value)
        dispatch(action)
    }

    function buttonCallBack(e){
        e.preventDefault()
        const action = ADD_NEW_MESSAGE_CREATOR()
        dispatch(action)
    }




    return (
        <div className={css.messageBlock}>

            <div className={css.dialogs} >
                <ul className={css.dialogs__list}>

                    {dialogs.map(showDialogs)}

                </ul>
            </div>

            <div className={css.messagees} >
                <ul>
                    {message.messages.map(m => <li>{m}</li>)}
                </ul>

                <form className={css.message__form} id='messageForm'>
                    <textarea
                        onChange={ changeNewMessageCallBack }
                        value={message.newMessage}
                        className={css.message__textarea}
                    />
                    <Button onChangeCallBack={buttonCallBack} value='Sent' />
                </form>
            </div>
        </div>
    )
}

export default Message;