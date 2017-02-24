import React, { PropTypes } from 'react';
import axios from 'axios';


export default class HelloWorld extends React.Component {
  static propTypes = {
    hscope: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {
      hscope: this.props.hscope,
      horoscope: null,
    };
    // this.state = { horoscope: this.props.horoscope };
  }

  getScope(e) {
    e.preventDefault();
    const sunsign = this.state.hscope.toLowerCase();
    axios({
      url: `http://theastrologer-api.herokuapp.com/api/horoscope/${sunsign}/today`,
      responseType: 'json'
    }).then((response) => {
        if (!response.data) {
          return;
        }
        this.setState({ horoscope: response.data.horoscope });
    });
  }

  updateName = (hscope) => {
    this.setState({ hscope });
  };

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.hscope}!
          </h3>

          <hr />
            <form onSubmit={(e) => this.getScope(e)} >
             <label htmlFor="name">
              What's your Horoscope sign:
              </label>
              <input
                id="name"
                type="text"
                value={this.state.hscope}
                onChange={(e) => this.updateName(e.target.value)}
                />

              <input type="submit" value="Submit" />
             </form>
            <div className="details">
           Here are Today's details:
           <p>{this.state.horoscope}</p>
        </div>
      </div>
    );
  }
}

