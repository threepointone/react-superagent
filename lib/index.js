'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function request(props, callback) {
  var req = _superagent2['default'][props.method](props.url).set(props.set).query(props.query);
  if (['post', 'put'].indexOf(props.method) >= 0) {
    req.send(props.send);
  }
  if (props.type) {
    req.type(props.type);
  }
  req.end(callback);
  return req;
}

var Ajax = (function (_React$Component) {
  _inherits(Ajax, _React$Component);

  function Ajax() {
    _classCallCheck(this, Ajax);

    _get(Object.getPrototypeOf(Ajax.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      done: false,
      error: undefined,
      response: undefined
    };
  }

  _createClass(Ajax, [{
    key: 'startRequest',
    value: function startRequest(props) {
      var _this = this;

      this.request = request(props, function (error, response) {
        return _this.setState({ done: true, error: error, response: response }, function () {
          return _this.props.end(_this.state);
        });
      });

      this.setState({
        done: false,
        error: undefined,
        response: undefined
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.startRequest(this.props);
    }

    // to trigger a new request, use <Ajax key={}/>
    // componentWillReceiveProps(nextProps) {
    // this.request.abort();
    // this.startRequest(nextProps);
    // }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.request.abort();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state);
    }
  }], [{
    key: 'defaultProps',
    value: {
      method: 'get',
      set: {},
      query: {},
      send: {},
      end: function end() {}
    },
    enumerable: true
  }]);

  return Ajax;
})(_react2['default'].Component);

exports.Ajax = Ajax;