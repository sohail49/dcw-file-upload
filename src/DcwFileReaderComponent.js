import dwv from 'dwv';
import React from 'react';
import './DcwFileReaderComponent.css';

// gui overrides

// decode query
dwv.utils.decodeQuery = dwv.utils.base.decodeQuery;
// progress
dwv.gui.displayProgress = function () {};
// get element
dwv.gui.getElement = dwv.gui.base.getElement;
// refresh element
dwv.gui.refreshElement = dwv.gui.base.refreshElement;

// Image decoders
dwv.image.decoderScripts = {
    "jpeg2000": "assets/dwv/decoders/pdfjs/decode-jpeg2000.js",
    "jpeg-lossless": "assets/dwv/decoders/rii-mango/decode-jpegloss.js",
    "jpeg-baseline": "assets/dwv/decoders/pdfjs/decode-jpegbaseline.js",
    "rle": "assets/dwv/decoders/dwv/decode-rle.js"
};

class DwvComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tools: ['Scroll'],
    };
  }

  render() {
   
    return (
      <div id="dwv">
        <div className="layerContainer">
          <div className="dropBox">Drag and drop data here</div>
          <canvas className="imageLayer">Only for HTML5 compatible browsers...</canvas>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // create app
    var app = new dwv.App();
    // initialise app
    app.init({
      "containerDivId": "dwv",
      "tools": this.state.tools,
      "shapes": ["Ruler"],
      "isMobile": false
    });
  }
  
}

export default (DwvComponent);
