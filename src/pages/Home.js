import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import "../components/Footer.css"

class Home extends Component{
    render(){
        return(
            <div>
                        <Navbar/>
                <div className="container">
                     <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolores vero dolor unde doloremque praesentium aliquid, facere quae? Voluptas iste qui similique, perferendis modi optio a ducimus in quasi! Esse.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolores vero dolor unde doloremque praesentium aliquid, facere quae? Voluptas iste qui similique, perferendis modi optio a ducimus in quasi! Esse.</p>
                </div>
            <Footer/>
            </div>
        )
    }
}

export default Home