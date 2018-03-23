import React from 'react';


export default () => {

    return (
        <div className="inputBar">
            <div>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Please insert video ID" />
                        <span className="input-group-btn">
                            <input className="btn btn-outline-secondary" type="submit" value="ADD" />
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}