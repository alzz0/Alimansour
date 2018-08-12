import React, {Component} from "react";


class Footer extends Component{
    render(){
        return(
        <div>
            <footer className="footer">
      <div className="container">
        <span className="text-muted">Ali mansour{new Date().getFullYear()}</span>
      </div>
    </footer>
            </div>
        )
    }
}

export default Footer