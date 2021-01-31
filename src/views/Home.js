import React, { Component } from 'react'
import { mcStore } from '../mcStore'
import '../styles/home.scss'
import PassageComp from '../components/Home/PassageComp.js'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: mcStore.get('role')
        }
    }
    componentDidMount() {
        //订阅
        this.subscriberRole = mcStore.subscribe('role', (data) => {
            this.setState({ role: data });
        });
    }
    componentWillUnmount() {
        //取消订阅
        mcStore.unSubscribe('role', this.subscriberRole);
    }
    handlePublish = () => {
        const passage = this.mInput.value.trim();
        if (passage) {
            mcStore.set('passage', passage);
        }
    }

    render() {
        const { role } = this.state;
        return (
            <div>
                <h2>Home page</h2>
                <div className='permission'>
                    当前权限：{role === 'admin' ? '管理者' : '普通用户'}
                    <button onClick={() => { mcStore.set('role', 'admin'); }}>管理者</button>
                    <button onClick={() => { mcStore.set('role', 'user'); }}>普通用户</button>
                </div>
                <div>
                    <input type='text' ref={input => { this.mInput = input }}></input>
                    <button onClick={this.handlePublish}>发布</button>
                    <PassageComp />
                </div>
            </div>
        )
    }
}
