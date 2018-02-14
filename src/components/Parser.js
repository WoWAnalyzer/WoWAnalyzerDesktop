import React from 'react';
import PropTypes from 'prop-types';
import fs from 'fs';

class Parser extends React.Component {
  static propTypes = {
    file: PropTypes.string.isRequired,
  };

  constructor(props) {
    super();
  }

  componentDidMount() {
    fs.readFile(this.props.file, (err, data) => {
      if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data);
    });

    console.log('Working?    ' + this.props.file);
  }

  render() {
    console.log(this.props.file);
    return(
      <div>
        <h1>Welcome to WowAnalyzer Desktop Client</h1>
      </div>
    );
  }
}

export default Parser;