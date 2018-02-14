import React from 'react';

import '../assets/css/App.css';

import Main from '../components/Main';
import FileUpload from '../components/FileUpload';
import Parser from '../components/Parser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: '',
    };
    this.parseFile = this.parseFile.bind(this);
  }
  
  parseFile(file) {
    console.log('Main Parser Called //// ' + file);
    <Parser file={file} />
  };

  render() {
    return (
      <div>
        <div className="main">
          <Main />
        </div>
        <div className="upload">
          <FileUpload handleFile={this.parseFile} />
        </div>
      </div>
    );
  }


}

export default App;
