# @truefit/bach-react-navigation

## Overview

This set of enhancers exposes the hooks from react navigation to the bach compose chain.

## Installation

```
npm install @truefit/bach-react-navigation @truefit/bach
```

or

```
yarn add @truefit/bach-react-navigation @truefit/bach
```

## Enhancers

### withNavigation

Gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigation} from '@truefit/bach-react-navigation';
import {NavigationProp} from '<your navigation prop>';

type Props = {
  navigation: NavigationProp;
  handeClick: () => void;
}

const Component = ({handleClick}: Props) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose<Props>(
  withNavigation(),

  withCallback<Props>('handleClick', ({navigation}) => () => {
    navigation.goBack();
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigation} from '@truefit/bach-react-navigation';

const Component = ({handleClick}) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose<Props>(
  withNavigation(),

  withCallback<Props>('handleClick', ({navigation}) => () => {
    navigation.goBack();
  }),
)(Component);
```
