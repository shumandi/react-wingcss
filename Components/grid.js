/**
 * Created by shumandi on 2016/12/4.
 */
import React, {Component,PropTypes} from 'react';
export class Container extends Component{
    render(){
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export class Row extends Component{
    render(){
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}

export class Col extends Component{
    render(){
        return (
            <div className={'col-' + this.props.colNum}>
                {this.props.children}
            </div>
        )
    }
}
Col.propTypes = {
    colNum: PropTypes.number.isRequired,
};