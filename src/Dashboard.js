import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import {logout} from './Auth.redux'

function Erying() {
    return (<div>二营</div>)
}
function Qibinglian() {
    return (<div>骑兵连</div>)
}
@connect(
    state=> state.auth,
    {logout}
)
class Dashboard extends React.Component{
    /*constructor(props){
        super(props)
    }*/
    render(){
        const match = this.props.match
        console.log(match)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (<div>
            <h1>独立团</h1>
            {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
            <ul>
                <li>
                    <Link to={match.url}>一</Link>
                </li>
                <li>
                    <Link to={`${match.url}/erying`}>二</Link>
                </li>
                <li>
                    <Link to={`${match.url}/qibinglian`}>三</Link>
                </li>
            </ul>
            <Route path={match.url} exact component={App}/>
            <Route path={`${match.url}/erying`} component={Erying}/>
            <Route path={`${match.url}/qibinglian`} component={Qibinglian}/>


        </div>)
        return this.props.isAuth?app:redirectToLogin
    }
}

export default Dashboard