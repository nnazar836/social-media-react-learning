import css from './userCard.module.css'

function UserCard(props){
    let { info } = props

    
    return(
        <div className={css.UserCard}>

            <div className={css.UserCard__foto}>
                <img src={info.foto} alt="userFoto" />
            </div>

            <div className={css.UserCard__name}>
                { info.name }
            </div>

        </div>
    )
}


export default UserCard;