import React, { Component } from 'react';

class Name extends Component {
  render() {
    return(
      <div>
        <label>Quel est-ton nom ? </label>
        <input type="text" placeholder="Lâche ton blaze" id="name"/>
      </div>
    )
  }
}

export default Name;
