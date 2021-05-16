import React, { Component } from 'react';
import PDF from '../../src/assets/resume.pdf';

class Resume extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {PDF} target = "_blank" rel="noreferrer">Download</a>
        </div>
    );

  }
}

export default Resume;
