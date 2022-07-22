import css from './Main.module.css'
import NavMenu from "./navMenu/NavMenu";
import Content from "./content/content";

function Main(props) {
    let { state, dispatch } = props

    return (
        <main className={css.main} >

            <div className={css.contentContainer}>

                <NavMenu />

                <Content state={state} dispatch={dispatch} />
                
            </div>
        </main>
    )

}

export default Main;