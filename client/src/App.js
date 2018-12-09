import React, { Component } from 'react';
import sweetAlert from 'sweetalert';
import LuckyDraw from './LuckyDraw';
import 'sweetalert/dist/sweetalert.css';
import 'highlight.js/styles/googlecode.css';
import './styles/App.css';
import './styles/LuckyDraw.css';
import './styles/btn.css';
// import Highlight from 'react-highlight';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: []
    };
  }
  componentDidMount() {
    this.getElements()
      .then(res => this.setState({ elements: res.elements }))
      .catch(err => console.log(err));
  }

  getElements = async () => {
    const response = await fetch('/elements');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log('repsonse : ', body)
    return body;
  };

  render() {
    const labels = this.state.elements.map(el => el.label)
    return (
      <div className="App">
        <h1>Trouve ton Secret Santa ! </h1>
          <LuckyDraw
            width={500}
            height={350}
            wheelSize={1000}
            range={labels.length}
            innerRadius={250}
            outerRadius={500}
            showInnerLabels
            drawLimitSwitch
            drawLimit={4}
            fontColor={'#000'}
            fontSize={'14px'}
            writingModel={'tb'}
            drawButtonLabel={'start'}
            textArray={labels}
            onSuccessDrawReturn={drawNumber => {

              sweetAlert(labels[drawNumber], 'Offre lui un gros cadeau, ' + this.state.elements[drawNumber].pickMessage, "success");

            }}
            onOutLimitAlert={limit => {
              if (limit) {
                sweetAlert("Oops...", "out of limits!!", "error");
              }
            }}
          />
    </div>

    );
  }
}

export default App;
