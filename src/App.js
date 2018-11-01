import React from 'react'
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from './index.redux'
@connect(
    // 你要state什么属性放到props里
    state=>({num:state.counter}),
    // 你要什么方法放在props
    {addGun, removeGun, addGunAsync}
)
class App extends React.Component{
    /*constructor(props){
        super(props)
    }*/
    render(){
        return (
            <div>
                 <h1>现在有{this.props.num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>回收武器</button>
                <button onClick={this.props.addGunAsync}>推两天</button>
            </div>    )
    }
}
/*const mapStatetoProps=(state)=>{
    console.log(state)
    return {num1:state.counter}
}

const actionCreators = {
    addGun, removeGun, addGunAsync}

App = connect(mapStatetoProps,actionCreators)(App)*/
export default App