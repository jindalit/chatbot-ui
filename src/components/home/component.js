import React from 'react'
import PropTypes from 'prop-types'


export default class HomeMain extends React.Component {
    static propTypes = {
        initLoadData: PropTypes.func.isRequired,
        getInitData: PropTypes.string
    }
    componentDidMount() {
        this.props.initLoadData()
    }
    render() {
        return (
            <div> {this.props.getInitData}</div>
        )
    }
}