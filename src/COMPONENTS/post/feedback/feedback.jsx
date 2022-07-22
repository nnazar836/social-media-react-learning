import css from './feedback.module.css'

function Feedback(props) {
    let { likes } = props
    


    function giveItaLikeCallBack(){
        // giveItALike(owner, index)
        console.log(2);
    }

    return (
        <div className={css.feedback} >

            <div className={css.feedback__likes} >

                <span
                    className={ `${css.feedback__heart}` }
                    onClick={ giveItaLikeCallBack }

                >&#10084;</span>

                <div className={css.feedback__likeCounter} > {likes} </div>

            </div>

        </div>
    )
}

export default Feedback;