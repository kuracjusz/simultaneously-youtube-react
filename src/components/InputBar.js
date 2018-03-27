import React, {Component} from 'react';



export default class extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            id: ''
        }
      }

    submitHandler = () => {
        this.props.onIdChange(this.state.id);
    }

    inputHandler = (e) => { 
        this.setState({id: e.target.value});
    }

    render() {
        return (
            <div className="inputBar">
                <div>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Please insert video ID" onChange={this.inputHandler} />
                            <span className="input-group-btn">
                                <input className="btn btn-outline-secondary" type="submit" value="ADD" onClick={this.submitHandler} />
                            </span>
                        </div>
                </div>
            </div>
        );
    }
}