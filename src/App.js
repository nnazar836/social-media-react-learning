import './App.css';
import Header from './COMPONENTS/header/Header';
import Main from './COMPONENTS/main/Main'

function App(props) {
  let { state , dispatch } = props

  
  return (
    <div className="wraper">
      <Header/>
      <Main state={state} dispatch={dispatch} /> 
    </div>
  );
}


export default App;