import React from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={};
  }
  makeField(id, col, name) {
  const
    value = this.state[id] || '',
    invalid = !!(value.length % 2), // check if odd
    className = 'form-control' + (invalid?' is-invalid':'');
    return(
      <div>
          
          <div className={`col-md-${col} mb-3 text-start ps-5 `}>
          
        <label>{name}:</label>
        <input
          type="text"
          className={className}
          data-id={id}
          placeholder={name}
          value={value}
          onChange={this.handleChange}
        />
        {/* The next line is where you specify that the
            error message should be shown only
            when the 'invalid' variable is true    */}
        <Fade bottom collapse when={invalid}>
          <div className="invalid-feedback"
            //Boostrap 4 uses some CSS tricks to simplify
            //error handling but we're doing it differently
            //so the next line disables these tricks
            style={{ display: 'block' }}
          >
            Oh no, the number of characters is odd
          </div>
        </Fade>
      </div>
      
      </div>
    );
  }
  handleChange({ target }) {
    this.setState({
      [target.getAttribute('data-id')]: target.value
    });
  }
  render() {
    return (
      <form autoComplete="off" >
          <MenuBar/>
          <h1 className="mt-5 mb-3">Please Fill The Form</h1>
        <div className="form-row ps-5 mt-4">
          {this.makeField('f1',4, 'First nаme')}
          {this.makeField('f2',4, 'Lаst name')}
          {this.makeField('f3',4, 'Usernаme' )}
        </div>
        <div className="form-row ps-5">
          {this.makeField('f4',6, 'Citу')}
          {this.makeField('f5',3, 'Stаte')}
          {this.makeField('f6',3, 'Ziр')}
        </div>
        <button className="btn btn-danger mb-5" type="button">
          Submit form
        </button>
        <Footer />
      </form>
    );
  }
}

export default Contact;
 