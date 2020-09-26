import React, { Component } from 'react';

class Product extends Component {
  // onAddToCart(text){
  //       alert(text);      
  // }  
  // constructor(props){
  //       super(props);
  //        this.onAddToCart2 = this.onAddToCart2.bind(this);

  // }
  // onAddToCart2(){
  //       alert(this.props.children + ' buy success');     
  // }
  onAddToCart3= () => {
        alert(this.props.children + ' buy success');     
  }
  render(){
    return(
        <div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <div className="thumbnail">
                    <img alt={this.props.children} src={this.props.image} />
                    <div className="caption">
                        <h3>{this.props.children}</h3>
                        <p>
                            {this.props.price} VNĐ
                        </p>
                        <p>
                            {/*<a href="# " className="btn btn-primary" onClick={() => {this.onAddToCart(this.props.children)}}>
                                Mua ngay
                            </a>*/}
                            <a href="# " className="btn btn-primary" onClick={this.onAddToCart3}>
                                Mua ngay
                            </a>
                            <br/> 
                            <br/>
                            <a href="# " className="btn btn-default">Thêm giỏ hàng</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      );
  }
}

export default Product;
