import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
// import Login from './components/Login';
import Product from './components/Product';
import UseRefComponent from './components/UseRefComponent';
import LoginHooks from './components/LoginHooks';

class App extends Component {
  
  // showTransaction(transaction){
  //       if (transaction.status) {
  //           return  <h3>
  //                       ID : {transaction.id} <br/>
  //                       name : {transaction.name} <br/>
  //                       price : {transaction.price} <br/>
  //                       status : {transaction.status? 'active' : 'pending'}
  //                   </h3>
  //               }
  //   }
  constructor(props){
    super(props); 
    this.state = {sayings: "AAAAAA" };
  }
  onClick(){
    console.log('app components');
  }

  onAddProduct = () => {
    console.log(this.refs);
  }

  update(e) {
    this.setState({sayings: e.target.value});
  }


  render(){
    // var a = 5;
    // var name = 'hung';
    // var b = 10;
    // var transaction = {
    //     id : 1,
    //     name : 'hoa qua',
    //     price : 150000,
    //     status : true
    // };
    // var users = [
    //     {
    //         id : 1,
    //         name : 'nguyen van cuong',
    //         age : 19
    //     },
    //     {
    //         id : 2,
    //         name : 'nguyen van ba',
    //         age : 28
    //     },
    //     {
    //         id : 3,
    //         name : 'nguyen van bon',
    //         age : 24
    //     }
    // ];
    // var elements = users.map((users, index) => {
    //     return  <div key={users.id}>
    //                 <h2>
    //                     Tên : {users.name}
    //                 </h2>
    //                 <p> Tuổi : {users.age}</p>
    //             </div>
    // });
    const products = [
        {
            name: 'Apple iphone',
            id : 1,
            price: 15000000,
            image: "https://www.techone.vn/wp-content/uploads/2019/10/11-pro-vang-37383.jpg",
            status: true
        },
        {
            name: 'Samsung galaxy',
            id : 2,
            price: 10000000,
            image: "https://hc.com.vn/i/ecommerce/media/GS.003291_FEATURE_55789.jpg",
            status: false
        },
        {
            name: 'Xiaomi redme note 2',
            id : 3,
            price: 5000000,
            image: "https://cdn.tgdd.vn/Products/Images/42/73810/xiaomi-redmi-note-2-300x300.jpg",
            status: true
        },

    ];
    const elements = products.map((products,index) => {
        let result = '';
        if (products.status) {
            result =    <Product 
                            key={products.id}
                            price={products.price}
                            image={products.image}
                        >
                            {products.name}
                        </Product>
        }
        return result
    });

    const { sayings } = this.state;

    return (
        <div>
            <h1>AppComponent</h1>
            <LoginHooks />
            <Header />
            {/*<div>
                <Login />
            </div>
            <div>
                <br/>  
                <hr/>          
            </div>*/}
            {/*<div className="ml-30">
                <h2>
                    a : { a } <br/>
                    b : { b } <br/>
                    a + b = { a + b } 
                </h2>
                <h3>
                    name : { name } 
                </h3>
                {this.showTransaction(transaction)}
                <br/>
                <hr/>
                { elements }
            </div>*/}
            <br/>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand" href="# ">Props</a>
                    
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                       {elements}
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-warning" onClick={ this.onClick }>
                            Click me! 
                        </button>
                    </div>
                </div>
            </div>
            <br/>
            <hr/>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand" href="# ">Event - ref</a>
                </div>
            </nav>
            <UseRefComponent data={sayings} />
           

        </div>
  );
  }
}

export default App;
