import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './action/action';
import './css/loading.css'

class Home extends Component {
    componentWillMount() {
        console.log('4')
        this.props.fetchData()
    }

    render() {
        return (
            <div>
                <h3>Redux-Saga Example</h3>
                {
                    this.props.appData.isFetching && 
                    <div>
                    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                }
                {
                    this.props.appData.data.length ?
                        this.props.appData.data.map((item, index) => {
                            return <div key={index}>
                                <div>ID: {item.id}</div>
                                <div>Name: {item.name}</div>
                            </div>
                        })
                        : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appData: state.appData
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('3')
    return {
        fetchData: () => dispatch(fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);