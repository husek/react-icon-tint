# react-icon-tint
**react-icon-tint** is a React component that replicates the iOS behavior, where you can easily tint an icon according to your UI.


## Usage
Requires React >= 16
```
npm install --save react-icon-tint
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import IconTint from 'react-icon-tint';

const MyComponent = () => {
   return (
      <div>
         <IconTint src="/bellIcon.png" color="#cecece" />
      </div>
   );
}
```

## Props
- `src - {String}` – **required** – Image source.
- `color - {String}` – **required** – Color you want to tint your icon.
- `maxWidth - {Number} && maxHeight - {Number}` – maxWidth + maxHeight for the icon, should be provided in pairs.
- `fallback - {ReactComponent}` – Fallback component used during the load period and on SSR;

## Contributing
Your contributions are welcome!

## Author
[husek](https://husek.me)

## License
MIT
