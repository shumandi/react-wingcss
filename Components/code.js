/**
 * Created by shumandi on 2016/12/4.
 */
import React, {Component} from 'react';

export class Code extends Component{
    render(){
        return (
            <pre>
                <code>
                    {this.props.children}
                </code>
            </pre>
        )
    }
}