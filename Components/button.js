/**
 * Created by shumandi on 2016/12/4.
 */
import React,{Component,PropTypes} from 'react';

export class Button extends Component{
    render(){
        const cName ='btn ' + (this.props.isClass||'');
        return (
            <button className={cName} disabled={this.props.isDisabled || undefined}>{this.props.test}</button>
        )
    }
}
Button.propTypes = {
    isClass: PropTypes.oneOf(['btn-outline', 'btn-outline-inverted', 'btn-clear']),
    test: PropTypes.string.isRequired,
    isDisabled: PropTypes.oneOf(['Disabled']),
};