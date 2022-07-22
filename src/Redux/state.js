import feedReducer from "./reducers/feed-reducer";
import friendsReducer from "./reducers/friends-reducer";
import infoReducer from "./reducers/info-reducer";
import messageReducer, { ADD_NEW_MESSAGE, CHANGE_NEW_MESSAGE } from "./reducers/message-reducer";
import profileReducer, { ADD_NEW_POST, CHANGE_POST_TEXT } from "./reducers/profile-reducer";

let renderApp = () => `empty`;
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
export const CHANGE_POST_TEXT_CREATOR = (text) => ({
    type: CHANGE_POST_TEXT,
    text: text
});

export const ADD_NEW_POST_CREATOR = () => ({
    type: ADD_NEW_POST,
});


export const CHANGE_NEW_MESSAGE_CREATOR = (message) => ({
    type: CHANGE_NEW_MESSAGE,
    message: message
});

export const ADD_NEW_MESSAGE_CREATOR = () => ({
    type: ADD_NEW_MESSAGE,
});
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------


const storage = {
    _state: {
        info: {
            nickName: 'nnazar836',
            name: "Nazar Brunarsky",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam hic, maxime debitis temporibus cupiditate consectetur, nisi error iure totam accusantium atque tenetur odit beatae ut nobis sequi deleniti impedit voluptatibus saepe laborum sed consequatur.",
            foto: 'data:image/jpeg;base64,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'
        },

        profile: {
            posts: {
                postText: '132',

                posts: [
                    {
                        id: 0,
                        likes: 5,
                        text: 'vvfvfvffvfvfv',
                        user: {
                            nickName: 'nnazar836',
                            name: "Nazar Brunarsky",
                            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam hic, maxime debitis temporibus cupiditate consectetur, nisi error iure totam accusantium atque tenetur odit beatae ut nobis sequi deleniti impedit voluptatibus saepe laborum sed consequatur.",
                            foto: 'data:image/jpeg;base64,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'
                        },

                    },
                    {
                        id: 0,
                        likes: 8,
                        text: '1654651',
                        user: {
                            nickName: 'nnazar836',
                            name: "Nazar Brunarsky",
                            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam hic, maxime debitis temporibus cupiditate consectetur, nisi error iure totam accusantium atque tenetur odit beatae ut nobis sequi deleniti impedit voluptatibus saepe laborum sed consequatur.",
                            foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVEhgVFhYSFRIVEhIYEhgRERESERIRGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQkISQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0Mf/AABEIAJkBSgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADoQAAEDAwIEAwYEBgAHAAAAAAEAAhEDBCESMQVBUWEicYETMpGhwfAGUrHRFCNicqLhB0JDc4Ky8f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACMRAAMBAAMAAgIDAQEAAAAAAAABAhEDITESQSJREzJhcQT/2gAMAwEAAhEDEQA/APMBipUCJVMJOvU5Lx4TZ7dtIC45USuKhaEjM2QVQlWKE9ydCMo96E1sqTlEa3Couib7OaFWo+OUlXBQLnYEHPZdK1gp4jvbjpnoVRlQTqM/RKvBJV2gxB2+SqpSI/IM6qHmIjoRvnkm7V9NgcXudrEhmnPqs8NgTvGfRGf8HSMwIk5XOTlRovuSWDmAYGQN5+OUWjRpaZyHdzz++6SqU4DWiYg+ZfjAE4ype7T73icJw3ZvKBPNTc/oorDvoYkZH1U0TpS1Gq4OBDSfCQZB57QrvrF3Igg5kQUrl+Dqs7K3VXUV1rSkqjWSU5biFz/FHJ/KtZucPYAF128kwg21cQikSV59/wBtPQhfiV9njCs6kPVEY8BS4yVPWVSQMkRCGWI1UKGZQ05oExsKtVvNEqOgqtSoITrdA8wXYZ3WZfsgym6jspC8qal6HBLSbPO/9FbiFmmUK5YiUWy6EepQnCvpmM+3dlNVFFK0OrKmtgx0XP3RkuihbhV2RWZQagyqSyVLCWqWiVRXpptFJc2Eu5HflVcITAYpUQleo7KHCQJ7KpWSrzlS5UBXnTOHp1TZK4ldKG5yokJpzygOKlzlZrEyEplNKM4YVWtkqlwSAR8P2TLsR9Cd1UkxyCAWlc9xlSAVZLCFPWSAR3RqcOwdv0KG0EdEem0buDsbkQCB9lcAJbszpMTkS7aCrsZhrsYIGPzDrjbZTa0C5wncnw7iRzjH2VvWXBS9gOsaTJBDXZ/y3wg2K6U+sRo2pNQNgiJlxGJO5xziVf8AhXN8LGOwZc6In1Ow9Fvt4I/SCyqY/qZI/Xbf5IzLe5YMtp1AIBzofy3wB/8AfRI6O+b36PKPFTVlh2MQXyAOhnMSlhdCSHDJEkkr2Vy1pYNdGpSI/wCcAPbmD9+S8pxCi1pJMPE5e0Q8AbagkTTZaabXZ1jTDhMI1dkIdIllMvzAIH/ievr+q6q/UZ5IVL3/AApFS0SypCaZd4SJCokqEy88jRo/xCvTuoWdKjUpviRRcrNJ92oZdpElVIQ/ikP8tDla6lKOqkqpXMCeZlCVbYQDCU9nJKYe+MKzaZWiXv8AwzWs7Ypbtiott9BpaCN1l+xytC3q4hJXfgk5vYlWqASOayqzjMrUvHCUk4J5fXY7n9C9N+Var1UlgUlmE80idS2COyu3ZUVmFVJIkmEvUei1EB6f6ALuXQpK5IE9G96oSo1KpKxJG9suXIbio1KWiVRSTdENai8lLWwjsAKLWHKdAW4ygcRGcHYeLoE3UhpWVdVZeSNihKbrTr/GcAEhQJKjmrauSsZgjWxzTNCk446kdevkY3QrZknK1LClLtXTbGe3Lof8lxOqxb+jQbwyGjTAdHi2AO+0D0XpeFUh/DsY1mmowO9oZJFSch3bE4WXbVNmvweR3I3EHoVtWDNLg3fUN52CS30v8ITWt79jlswg6SM5nPh9E3SpzOBJn5LqFOXQN08ylMAYA6bqTZZQxGuyGRBcZiPosvi3A2PlwYNRzLIDweeOa9EykNW+3Xr3VK3EbekYcWjfc5J7JfkkN8W30fNa9kWW9VjjJZUp6T1a5wgrLa+c8jsvafiEMrUnmmZcGkkAGSGwcrwtq6R6n91VP5IpxvPRghVIUanAwcg7HurpGaEyilc4KqUdMkLiV0qJXYHTiVUlcFVyOHaFp5KYe+EC3ZKmscptxYRrtkNqZWlZ0ZysdwPJa1s8tZ6IqenhNsT4lSAMj1WembmqSSgEIT4VQMqCVYqhTIDB1GobXQUwl6rIKtL+iFznaJegvKu52Eu5ybQL9lVErioXCm6XKpcqSo1LMkbGy4amrduEBjZTBdATT6cxloEJas+NlQ3B2RKYDgubz0ZPekUDNaQvrXTn4rSZ4XQh8YdDWj8yE1jwWp2W39GNMKzMKunspKqZhtj8RuT+i2rFkRHLcAQsaxp6nT0wF6CwpZmYgrvoje+D9uQPiIBHxyvSWFMgNeB4ZAO0tzj0WVTtHHPbnHNbthV0s0uInpiY7qF0johb4abKcQ8ev7poMk6mmAfeHRKUanh5d/3TFmcnyUn2aViFuKUjp0MOmdyF57i3DdDDoLmvEu1eEl7o8OouORO/2F6u9ZIMRqLcA4zyyshlJ79Iqlp050sEMB8zkozqYVmf6AsLPXNQN0NgAgmTIEGZzvJ9YXz7jlp7Go8NEAu1N/tMn9ZC+tVnwyBgYEARheA/H1CHMf8A3N8zAcP0KrBJv8jzFOtkA5nruEwkWe9PUY7EozXvid45c4RqS00FJUFWKqkKplSVVxVnBUKGB0gKzWyqqdSIGN6gAoYycpQvWhZuwiv2TpYhWmJceycefD5JR7oeUVz8Jfk90GLwQcZK5WLVBaqIcoQoIV9K7SigAiFUtlGcFXSqTFPwndyvRF7MwoFJaTbdc6gtUcP7Md8y8RnGio9mnn0Sh+xKZ8aE/kIBUhUBV2rzsPS0fokaV1NslVYMIlJGV6OnuBWWwKBWpFhwnrZ2Ua9YC1JuVhf4pzpitedQ80/f0TWbpYPExhe4n5N/VJGlkea27ZrqR1EFzHNh+kS4NEwQOe5lLyV8ca9J8a+Wp+Hk6FQAwdv0TFS3BEtQLmjpd2IBHcHouoV9O+3zC0J6jJU4x2xwvS8LuWNl7tMjlAK82x2eUO5pmlTM52kddkK7RPNZ61/E3OpueGfy2iSSdAjtzKyb+6qMeAWupuLWujXqa4OAc0gnOQQfVb1G4Y+m0AAu0hpZHhLds9P9qt5wFj6ZLvC8CKbKcBojafn03UF8VXZVz8UD4VxskAOJmPjleotLoGCPmvnXsyx2xEbxlek4Lezgny/2nqM7ROa09iMjdAfb81azfLR+yrd1HNzuOiluFMA1ByXjP+IDv5bO1QH/ABK9E+8l3r815v8AHJ/kg/1s+v7q0k6ffR4vXgjsUy9wNPB8TRySTfkiUWCd/Lv94TtDJjVKoXAE80RKMkE6NtyDyRaVad/9SkqfsrNfQQqrlxVUuFNIXSphVhcDSStGzENykqTcp2rUAbCDFb0VrHxI5ZLUq5GoVYEI50BsCQocExUYN0EppO0oAhucrVHKrWStPHxb2yPJy50iJVmo7KQRWsC1ykjFVN+g2lWBRhTUeyTJiAS1RpRSwqvsyiAx2ojN0FrkWmvKw9ZMepFXbgoVIpws5obhSS1AwUzc1BoSwYVZtsXdVOqXrLp9Yhe0YXPC9dZUvDn18ln2dnogwnrq5DGEzGFk5a+bxFeOfiuzxPGmxUczGlpOiBycZj0WYU/xF5c4vIguMj+04+OPms8lb4WSjz+R7TCU65aI5d1qWl5MYE7FYyvTqlrpHqqEWtPdcJuGg/l22yJXpG3AcIC+f2F3EEFeqsb5rhAMKVz9oE79jF7ZB1N0A6oJHWVgWVbQ7xHTnnIXsWP/AESVcg7xgqU2/B/ijQ4Pxhjhpb4nEgADqfotC5zOZ+pWNbXAaxwgAHMgDUAhcU4u5jC5rSGtBIJAkgdz9EJX5FPZ6QV7Rq7ysT8W0y+hpH52n0AP+kexqVKrfaPJbMQ3Hfddxpk0p5hwjGS44hXn1Iz10fPXS0wcEYIUh8ELWurUPbJEEF4B5hwkwe37LIcwglrhBH3IVGsHl6EYcE9RH7gq1EEy317yEIRtP0RHPPI5HbKAQrHuG+Qfijb7JSk1xcABIOIO0o9Axjzx0hK0MqYTSu0q4cFUlLg3yOaYUl0qhKkFdgNLKCVy5cjtJDiuJXKrzhUiexXQJxyrMeqaZTVvSWyekZLesmmCU/RtiVe3ohPsAATfIm0BFuAFR7QEV70u9hRTBgNwCjSFVwyuR0XDyzSmGJVpRmFecz00x2iVr22Qsa3WraPSUiks0qNAJ6lTaAkKNSEV10Astps1zSSHX1wAvPcXrl0blodLgOYR7i71bJVxTcXHj1kubmxYhC/IcwEHG4WQ5aV7TIwNncu6zStU+GV/6VK5xyp5qrt04gWjWLT25hbdldYlrvMHdeelXpvLTIMFc0Lh9J4ZxGW6SVW6eRPPp3XkLK+MA7HstUcR1CCVFxj6G0ctr98yWukTA8BE8plTULnmahAbMhoMyZ5nmcpAGTuR5JugGjJyf6k8yl4F8vWG9Zu1NxhoHySnGriG0yBOmrJH5oB+WUE8TDWnPw381i3d0X7mAKZ9nGIMiSmme9I1Rd7+pJJqEkbTIyfnCtd2zXCYBjsrUxLwDiA4+c/OfD8vJEdAkTuqTjE5W0kZFThbHZaSwx11CUs/htVgxD29t/gtVgmeycbU2x5oVOCTy0jy9B7mPiSOoOFcvd72Bk5nnzXqL7hzHtD9OecYPoVi3nBnMPhMggEcwfhzU12y88ya7M5g5gndNB6WBLMOb5dO6YplrnE7DEDoEWUT3whzlwemm02naET2AShEtZXAlPCkFxYFxwlBV4wjwEu96rHoK8OYMp+3Cz6bpK0rULTvRmr0bYUdjSiUKQTzKQSti4Z2lVeFovohLPoIqgNGY9qrlaLbUld/CpvkgYeBaisQQiMKxM3Ift05TdBSNI4T1ESuS1HOvixoXSo95KllKUdlMc1JzjC+cAxq4jkjPpxsguY4gkbxiUG0kJxt3QlfnIAyRlY7ytF79Elwdq5GZBWdU69emyeEWvsGquKtCoQqokdKmVCKxiIrC0HEJ1lWeWexhAZTwqgemYXYL6atF55Epuk4ncrIpVC05359+nmnWXPQJWjkw147IAwJCm9YckDDWNntJ5JV1UF2dvgrtrHSRuzVJO5IG09th6p14I/Rq0ZJB2DZOIyTy+EfFdVecpy0pRTbykSfXZVfQjPJBUkdabA2lM7nH1ThZ0yk3vzhGt6mfNc60hSwaqPlukK76B9mMmZG3MdENgg/NHe8aUjB2KXdFp0DS0SQJOB5mVi31gBOgSJyCZPoVsXdTWQ0dlNKh4T+ZxxvKOdDTdSeZ0EGebYM7HyTzK0hbV3wYPY0mdZBDiBt08wsGtSNJxY/Dh02I5Edil1M1TaoZc+AhNfKX9pqGCoaYXJDtjbtkm4ZUvqFUDlSfQN9BqcBP29SFltcmqblpRno26FynWXSwab00x6DQDYbXlGaQVjsemqNZTaOw0mNAVNKqysEXUF2jYfKgURhQQURhUWaR9uwTlF6UYMBGp7hBMHJJrWzoV3BK03wnGvGnup2Z3LfhSpshvMNVi7qh3BWd1rw9Hg4fhOv1itZoIIKxq1MAT3PqFo3GsyABHVZtyTMdFpgTkAOVCrlcxkqqIMqxslO0WdVWlSRw1NhNvS2iEKqMhMNKh7JGFxyIpD4bRt8EZwj9pBMeY2UMfqHiwQcEQIKI1zQ8kyNQMGCQ3lyXM5eg20DqHRwOT+UbphtIucGCILoEYMSMnqmQGggA4yJjMOiYCJYMmsw4gl8R03H6/JBvFpyW0egtrXHkl7+GgiFshoa2Vj34klZZpuilrEYbDlHYySOiGWwUVjzGFoM+dBalwB4VRziY5AIZp4LjuFai/VAXLCdJjVvRABcdzt1TttTA23STNw2Z6lbNtSAI+5SXWBifkxyhTkd+6wvxHw0VAHNEPYDtuWg5C9FqI2Sz2ZndRVfZoaw+b03DbmrlM8dstFcgYY+XN7dR99UkRB5+fJaE9G9WnPQiUR6owJ59ASwpljkrKMwrSiNDbKiK15QKYTACIo1RqI7aiRYUUFK5GTHWVspz2qyWpn2iRodHglZpVVZqiy5q0ctVg4qlr7qI7dSK/QVjym6APNAopgKPJTK8fGiz3S6OipVdlQz3iqO3U16W+ir3iFn3DZnyTlZJ19leDPYi1kuhNNpIFt7x8k6xaZMl+lG7K5Chu6uExMoiAIaK1AJV7diOXfcI1J7uRx6kwN8BQVbh/vjzd9ENCxinakjUCJBaTJMwZmO8hP2VvoexseJtV0dmDTv980G29139jP1an/+oP8AvVP/AEYpVTwaZWm3XqghYtxV5Jx+3xWZV95JB1+lW2pfnutBtqGD0VrP3fvqj3nLyQqnuAmUYPEHQCAlKD9k5xTdIU1Wf6k6RtWjwCFri5EtA3mT2WFa/RP0ve9FGjp6fRsNrzKs50yEjafVMt5+qRD16Y34ms9dLUB4mOnG8EZHyXkta93c+47yK+fDc/3K/H4FeBHIaI5UCtPoSAiscqLmrQiNDDaiKKqWCumFY2yomaT1nMTtBcBDzAjaEGkmlNlZ8P/Z'
                        },

                    }
                ],
            }
        },

        friends: {},

        message: {
            newMessage: '',
            dialogs: [
                { id: 0, name: 'oleg' },
                { id: 1, name: 'vasya' },
                { id: 2, name: 'marik' },
                { id: 3, name: 'slavchyk' },
            ],
            messages: [
                `hjhhj`,
                `hjhhj`,
                `hjhhj`,
                `hjhhj`,
                `hjhhj`,
                `hjhhj`
            ]
        },

        feed: {}
    },

    get state() {
        return this._state
    },
    set state(user) {
        return this._state
    },
    _callSubscriber() {
        renderApp(this.state)
    },

    subscribe(observer) {
        renderApp = observer
    },

    getState() {
        return this.state
    },

    dispatch(action) {

        this._state.info = infoReducer(this._state.info, action)
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.friends = friendsReducer(this._state.friends, action)
        this._state.message = messageReducer(this._state.message, action)
        this._state.feed = feedReducer(this._state.feed, action)

        this._callSubscriber()
    }
}


window.st = storage;
export default storage;