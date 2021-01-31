import React, { Component } from 'react'
import { mcStore } from '../mcStore'

export default class About extends Component {
    render() {
        return (
            <div>
                About page
                <div>当前权限是{mcStore.get('role') === 'admin' ? '管理者' : '普通用户'}</div>
                <div>{mcStore.get('passage')}</div>
            </div>
        )
    }
}
