import css from './ProfileCard.module.css'

function ProfileCard(props) {

    let { info } = props

    return (
        <div className={`section ${css.ProfileCard}`}>

            <div className={css.ProfileCard__fotoContainer}>

                <div className={css.ProfileCard__foto}>

                    <img src={info.foto} alt="ProfileFoto" />

                </div>

            </div>


            <div className={css.ProfileCard__nameContainer}>{info.name}</div>
            <div className={css.ProfileCard__bioContainer}>{info.bio}</div>
        </div>
    )
}

export default ProfileCard;