import React, {Component} from 'react';
import './css/loading.css';

class Loading extends Component {
    render() {
        return(

            <div className="loader-wrap">
              <div className="loader-circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
        )
    }
}

export default Loading;