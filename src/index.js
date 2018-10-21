import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Link,Redirect, Switch} from 'react-router-dom'
import App from './App'
import { counter} from './index.redux'

const store = createStore(counter,compose(
    applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():f=>f)
)
function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}

class Test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return <h2>测试组件{this.props.match.params.location}</h2>
    }
}
function render(){
    ReactDom.render(
        (<Provider  store={store}>
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>一</Link>
                        </li>
                        <li>
                            <Link to='/erying'>二</Link>
                        </li>
                        <li>
                            <Link to='/qibinglian'>三</Link>
                        </li>
                    </ul>
                    <Switch>
                        {/*swtich之渲染命中的第一个root*/}
                        {/*<Redirect to='/qibinglian' />*/}
                        <Route path='/' exact component={App}/>
                        <Route path='/erying' component={Erying}/>
                        <Route path='/qibinglian' component={Qibinglian}/>
                        <Route path='/:location' exact component={Test}/>
                    </Switch>


                </div>


            </BrowserRouter>

        </Provider> ),
        document.getElementById('root')
    )
}

render()

store.subscribe(render)