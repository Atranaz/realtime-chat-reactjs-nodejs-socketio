import React from "react";
import io from "socket.io-client";

class Chat extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: '',
            message: '',
            message: []
        };

        this.socket = io('localhost:5000');
    }
    render(){
        (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Chat System</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.message.map(message => {
                                        return(
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="card-footer">
                                <input type="text" className="form-control" placeholder="Name"/>
                                <br/>
                                <input type="text" className="form-control" placeholder="Type Message"/>
                                <br/>
                                <button className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;