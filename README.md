# react-icon-tint
**react-icon-tint** is a React component that replicates the iOS behavior, where you can easily tint an icon according to your UI.

## Usage
```
npm install --save react-icon-tint
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import IconTint from 'react-icon-tint';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
         <IconTint width="20" height="20" src="/bellIcon.png" color="#cecece" customRef="Bell" />
      </div>
    );
  }
}
```

## Props
  - `src` – **required** – Image source.
  - `color` – **required** – Color you want to tint your icon.
  - `width` – Target width, this lib will keep the aspect automatically.
  - `height` – Target height, as mentioned earlier, don't worry about aspect ratio.
  - `customRef` – Custom Ref( Not obligatory, but sounds a good idea to use it if you are going to use multiple tinted icons in the same route);

## Contributing
Your contributions are welcome!

## Author
- [husek](https://github.com/husek)

## License
MIT
