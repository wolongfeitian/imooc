import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter, Route,Redirect, Switch} from 'react-router-dom'

//import { counter} from './index.redux'
import reducer from './reducers'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'
import 'antd-mobile/dist/antd-mobile.css'

const store = createStore(reducer,compose(
    applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():f=>f)
)

/*class Test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return <h2>测试组件{this.props.match.params.location}</h2>
    }
}*/

ReactDom.render(
    (<Provider  store={store}>
        <BrowserRouter>
            <Switch>
                {/*swtich之渲染命中的第一个root*/}
                <Route path='/login' exact component={Auth}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Redirect to='/dashboard'/>
            </Switch>
        </BrowserRouter>

    </Provider> ),
    document.getElementById('root')
)
