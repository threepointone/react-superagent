import React from 'react';
import superagent from 'superagent';

function request(props, callback){
  let req = superagent[props.method](props.url).set(props.set).query(props.query);
  if(['post', 'put'].indexOf(props.method) >= 0) {
    req.send(props.send);
  }
  if(props.type){
    req.type(props.type);
  }
  req.end(callback);
  return req;
}

export class Ajax extends React.Component{
  static defaultProps = {
    method: 'get',
    set: {},
    query: {},
    send: {},
    end: () => {}
  }
  state = {
    done: false,
    error: undefined,
    response: undefined
  }
  startRequest(props){
    this.request = request(props, (error, response) =>
      this.setState({done: true, error, response}, () => this.props.end(this.state)));

    this.setState({
      done: false,
      error: undefined,
      response: undefined
    });
  }
  componentWillMount(){
    this.startRequest(this.props);
  }
  // to trigger a new request, use <Ajax key={}/>
  // componentWillReceiveProps(nextProps) {
    // this.request.abort();
    // this.startRequest(nextProps);
  // }
  componentWillUnmount() {
    this.request.abort();
  }
  render(){
    return this.props.children(this.state);
  }
}
