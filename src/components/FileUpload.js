import React from 'react';
import PropTypes from 'prop-types';

class FileUpload extends React.Component {
  
  static PropTypes = {
    handleFile: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this._handleFileChange = this._handleFileChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  file = null;

  _handleSubmit(e) {
    e.preventDefault();
    this.props.handleFile(this.state.file);
  }

  _handleFileChange(e) {
    e.preventDefault();

    this.file = e.target.files[0];

    if (this.file.type !== "text/plain") {
      console.log("Error! Bad File Type");
      return;
    }

    console.log(this.file.path);
    this.setState({
      file: this.file.path,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleFileChange} />
          <button type="submit" onClick={this._handleSubmit}>Parse File</button>
        </form>
      </div>
    )
  }
}

export default FileUpload;