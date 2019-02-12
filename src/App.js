import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password : "",
      description : "",
      gender : 0,
      lang : "FR",
      active : true
    };

    this.onhandleChange =  this.onhandleChange.bind(this);
    this.onhandleSubmit = this.onhandleSubmit.bind(this);

  }
  onhandleChange(event)
  {
    //console.log(event.target.name);
    //console.log(event.target.value);
    var name = event.target.name;
    var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    this.setState({
        [name] : value
    });
  }

  onhandleSubmit(event)
  {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onhandleSubmit}>
          <div className="col-md-6">
            <div className="form-group">
              <label> Email :  </label>
              <input type="text" name="email" onChange={this.onhandleChange } className="form-control" aria-describedby="helpId" />
              <small id="helpId" className="text-muted">Help text</small>
            </div>
            <div className="form-group">
              <label> Password </label>
              <input type="password" name="password" onChange={this.onhandleChange } className="form-control" aria-describedby="helpId" />
              <small id="helpId" className="text-muted">Help text</small>
            </div>
            <div className="form-group">
              <label> Description :  </label>
              <textarea type="text" name="description" onChange={this.onhandleChange } className="form-control" aria-describedby="helpId" />
              <small id="helpId" className="text-muted">Help text</small>
            </div>

            <div className="form-group">
              <label> Level :  </label>
              <select className="form-control" name="gender" onChange={this.onhandleChange } value={this.state.gender}>
                <option value={0}>Male</option>
                <option value={1}>Famele</option>
              </select>
              <small id="helpId" className="text-muted">Help text</small>
            </div>
            
            <div className="form-group">
              <label> Languages : </label> <br/>
              <label> English  <input type="radio"
                                        name="lang" 
                                        onChange={this.onhandleChange } 
                                        value="EN" 
                                        checked={this.state.lang === 'EN'}  />  </label>    
              <br/>        
              <label> France  <input type="radio" 
                                        name="lang" 
                                        onChange={this.onhandleChange } 
                                        value="FR"
                                        checked={this.state.lang === 'FR'} /> </label> 
            </div>


            <div className="form-group">
              <label> Status  <input type="checkbox"
                                        name="active" 
                                        onChange={this.onhandleChange } 
                                        value={this.state.active}
                                        checked={this.state.active === true}
                                        
                                        />  </label>    
              <br/>        
              
            </div>


            <div className="form-group">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
