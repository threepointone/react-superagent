import React from 'react';
import {Ajax} from '../../src/index';
import {Debounce} from 'react-debounce';

export class App extends React.Component{
  state = {
    input: 'octocat'
  }
  render(){
    return <div>
      <input value={this.state.input}
        onChange={e => this.setState({input: e.target.value})} />
      <Debounce period={200} value={this.state.input}>{
        value => <Ajax key={value} url={`https://api.github.com/users/${value}`}>{
          ({error, response, done}) => !done ?
            <div>loading...</div> :
            <div>
              loaded!
              <pre>{JSON.stringify(response.body, null, ' ')}</pre>
            </div>
        }</Ajax>
      }</Debounce>
    </div>;
  }
}
