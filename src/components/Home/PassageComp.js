import React, { Component } from 'react'
import { mcStore } from '../../mcStore'


export default class PassageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passage: mcStore.get('passage')
        }
    }
    componentDidMount() {
        mcStore.subscribe('passage', (data) => {
            this.setState({ passage: data });
        })
    }

    render() {
        const { passage } = this.state
        return (
            <div className='passage-comp'>
                {passage}
            </div>
        )
    }
}
