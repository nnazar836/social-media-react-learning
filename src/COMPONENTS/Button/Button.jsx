import css from './Button.module.css'


const Button = (props) => {
    let { value, onChangeCallBack } = props
    if(!onChangeCallBack){
        onChangeCallBack = (e) => {
            e.preventDefault()
            alert(`can't find a onChangeCallBack function inside my props`)
        }
    }

    return (
        <button
            className={css.button}
            onClick={onChangeCallBack}>
                {value}
        </button>
    )
}

export default Button;