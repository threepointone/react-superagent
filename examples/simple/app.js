import React from 'react';
import {Ajax} from '../../src/index';

export class App extends React.Component{
  state = {
    input: 'threepointone'
  }
  render(){
    return <div>
      <input value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>
      <Ajax url={`https://api.github.com/users/${this.state.input}`}>{
        ({error, response, done}) => !done ?
          <div>loading</div> :
          (console.log(error, response), <div>loaded!</div>)
      }</Ajax>
    </div>;
  }
}
