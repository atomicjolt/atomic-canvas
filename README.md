# Atomic Canvas
This package contains all of the front-end canvas api code for Atomic Jolt apps. It includes all front-end code that was previously in the `client/libs/canvas` directory.

## Installation
You should install atomic canvas into each individual app not in the client directory. Just add as a regular dependency.

`yarn add atomic-canvas`

## Usage
All of the code is found in the libs folder which has the following structure
```
libs/
-- constants/
-- action.js
-- helper_contants.js
-- middleware.js
-- reducer.js
-- urls.js
```
If you wanted to use, for example, `libs/canvas/constants/accounts.js` you would write the following:
```Javascript
import {constantName} from 'atomic-canvas/libs/constants/my_constant_file.js';
import canvasRequest from 'atomic-canvas/libs/action';

class MyComponent extends React.Component {
...
  // Dispatch a request action
  this.props.canvasRequest(constantName, params, body);
};

connect({}, {canvasRequest})(MyComponent);
```
## Inspection Script
Because you will often need to inspect the canvas constants you are using to determing what the type and required params are, an inspection script has been provided

### Script Useage
We recommend adding a script to your package.json that looks like this.
```JSON
{
  "scripts": {
    "ac": "atomic-canvas",
  }
}
```

Then you can run `yarn ac -- [options]`. You can also just reference the script in your package.json:
```JSON
{
  "scripts": {
    "ac": "node ./node_modules/atomic-canvas/inspect.js",
  }
}
```
The script accepts 0, 1, or 2 arguments. If no arguments are provided it will print out a list of all of the modules that contain the canvas constants, eg the names of the files in the `libs/constants` folder.

The first optional argument is the name of a file (without the extension) you want to inspect, for example you could run `yarn ac -- accounts` and it would print out the contents of that file.

The second optional argument is the name of the constant you want to inspect, for example: `yarn ac -- accounts listAccounts`. This will print out the information about that constant and give a code snippit to import it:

```Javascript
{
  type: 'LIST_ACCOUNTS',
  method: 'get',
  key: 'list_accounts',
  required: []
}
import { listAccounts } from 'atomic-canvas/libs/constants/accounts';
```


