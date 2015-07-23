react-superagent
---

`npm install superagent react-superagent --save`

universal ajax as a component

```js
import {Ajax} from 'react-superagent';

...
<Ajax url='/my/api' method='post' send={{some: 'data'}}>{
  ({error, response, done}) => !done ?
    <div>loading...</div> :
    <div>loaded! {JSON.stringify(response)}</div>
}</Ajax>
```

should work across node, browsers, react-native.