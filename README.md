react-superagent
---

`npm install superagent react-superagent --save`

universal ajax as a component

```js
import {Ajax} from 'react-superagent';

...
<Ajax>{
  ({error, response, done}) => !done ?
    <div>loading...</div> :
    <div>loaded! {JSON.stringify(response)}</div>
}</Ajax>
```

should work across node, browsers, react-native.