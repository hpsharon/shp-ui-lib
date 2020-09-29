# shp-ui-lib

> A simple and useful UI component library using typescript, react hooks, styled components 

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/shp-ui-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

A simple and basic UI components library

## Featured Components

- Button

## Installation

Run from shell `npm install shp-ui-lib`

## Documentation
###### Button
Property    | Description               | Default |     Required
--------    | -----------               | ------- |     --------
`text`      | Text to show on button    | Empty string  | `false`
`style`     | Button style. One of the following: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` | `primary` | `false`
`onClick`   |   Function to execute on button click | | `true`

##Example

```javascript
import { useCallback } from 'react'
import {Button} from 'shp-ui-lib'

function App() {
  const onClickCallback = useCallback(() => {
    console.log('Clicked')
  }, [])

  return (
    <div>
      <Button type='primary' text={'Primary'} onClick={onClickCallback} /> 
      <Button type='secondary' text={'Secondary'} onClick={onClickCallback} />
      <Button type='success' text={'Success'} onClick={onClickCallback} />
      <Button type='danger' text={'Danger'} onClick={onClickCallback} />
      <Button type='warning' text={'Warning'} onClick={onClickCallback} />
      <Button type='info' text={'Info'} onClick={onClickCallback} />
      <Button type='light' text={'Light'} onClick={onClickCallback} />
    </div>
  )
}

export default App

```   

## License

MIT © [Sharon Haim-Pour](linkedin.com/in/hpsharon/)
