import React,{ Component } from 'react'
import images from '../images';

// react class component

class Comment extends Component{
    constructor(props){
        super(props);
    }
    render(){
        // render method used to return jsx in class component
        return(
            <div className="row mt-5 mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <div className="cardbody text-center">
                            <h5 className="text-center">User-1</h5>
                            <img src={images ? images.photo1: ''} alt="no img" className="img-fluid rounded-circle"/>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto alias a voluptatem doloribus excepturi, voluptatibus eius praesentium dolores eaque quidem aperiam? Suscipit dolorem, nulla beatae cupiditate quam cum. Dolorem?</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                        <div className="cardbody text-center">
                            <h5 className="text-center">User-2</h5>
                            <img src={images ? images.photo2: ''} alt="no img" className="img-fluid rounded-circle"/>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto alias a voluptatem doloribus excepturi, voluptatibus eius praesentium dolores eaque quidem aperiam? Suscipit dolorem, nulla beatae cupiditate quam cum. Dolorem?</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                        <div className="cardbody text-center">
                            <h5 className="text-center">User-3</h5>
                            <img src={images ? images.photo3: ''} alt="no img" className="img-fluid rounded-circle"/>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto alias a voluptatem doloribus excepturi, voluptatibus eius praesentium dolores eaque quidem aperiam? Suscipit dolorem, nulla beatae cupiditate quam cum. Dolorem?</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                        <div className="cardbody text-center">
                            <h5 className="text-center">User-4</h5>
                            <img src={images ? images.photo4: ''} alt="no img" className="img-fluid rounded-circle"/>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto alias a voluptatem doloribus excepturi, voluptatibus eius praesentium dolores eaque quidem aperiam? Suscipit dolorem, nulla beatae cupiditate quam cum. Dolorem?</p>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    } 
}

export default Comment