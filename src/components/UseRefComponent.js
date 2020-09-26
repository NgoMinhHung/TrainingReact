import React, { Component } from 'react';

class UseRefComponent extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.textInput = null;

 //         this.setTextInputRef = element => {
 //          this.textInput = element;
 //         };

 //         this.state = {
 //         	useStateEx: ''
 //         }
	// }

	state = {
         useStateEx: ''
     }

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value })
	}

	onSaveExState = () => {
		console.log('onSaveExState', this.state.useStateEx)
	}


	// onAddProduct = () => {
	// 	console.log('onAddProductonAddProduct', this.textInput.value);
	// }

	

	render() {
		const { data } =  this.props;
		
		return (
			 <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h3 className="panel-title">Thêm sản phẩm {data} </h3>
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                <label>Tên sản phẩm</label>
                                {/*<input type="text" className="form-control"  ref={this.setTextInputRef} />*/}
                                </div>
                                 <input name="useStateEx" type="text" className="form-control"  onChange={this.handleChange} />
                                {/*<button type="submit" className="btn btn-primary" onClick={ this.onAddProduct }>
                                    Save
                                </button>*/}
                                <button type="submit" className="btn btn-primary" onClick={ this.onSaveExState }>
                                    Save ex state
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default UseRefComponent;
