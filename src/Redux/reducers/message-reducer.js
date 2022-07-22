export const CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE'

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

const messageReducer = (state, action) => {

    switch (action.type) {

        case CHANGE_NEW_MESSAGE:
            state.newMessage = action.message
            return state;

        case ADD_NEW_MESSAGE:
            const message = state.newMessage
            state.newMessage = ''
            state.messages.push(message)
            return state;

        default:
            return state
    }

}

export default messageReducer;