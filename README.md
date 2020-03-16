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

### withFocusEffect

Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using focus and blur events, it's not very ergonomic.

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withFocusEffect} from '@truefit/bach-react-navigation';
import {View, Text} from 'react-native';

const Component = () => (
  <View>
    <Text>
      Hello World
    </Text>
  </View>
);

export default compose(
  withFocusEffect(() => {
    console.log('Hello World');
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withFocusEffect} from '@truefit/bach-react-navigation';
import {View, Text} from 'react-native';

const Component = () => (
  <View>
    <Text>
      Hello World
    </Text>
  </View>
);

export default compose(
  withFocusEffect(() => {
    console.log('Hello World');
  }),
)(Component);
```

_React Navigation Hook_
[useFocusEffect](https://reactnavigation.org/docs/use-focus-effect)

### withIsFocused

We might want to render different content based on the current focus state of the screen.

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withIsFocused, IsFocused} from '@truefit/bach-react-navigation';
import {View, Text} from 'react-native';

type Props = {
} & IsFocused;

const Component = ({isFocused}: Props) => (
  <View>
    <Text>
      {isFocused ? 'Hi' : 'Shhh'}
    </Text>
  </View>
);

export default compose(
  withIsFocused()
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withIsFocused} from '@truefit/bach-react-navigation';
import {View, Text} from 'react-native';

const Component = ({isFocused}) => (
  <View>
    <Text>
      {isFocused ? 'Hi' : 'Shhh'}
    </Text>
  </View>
);

export default compose(
  withIsFocused()
)(Component);
```

_React Navigation Hook_
[useIsFocused](https://reactnavigation.org/docs/use-is-focused)

### withLinking

Lets us handle deep links in our apps.

_React Navigation Hook_
[useLinking](https://reactnavigation.org/docs/use-linking)

### withNavigation

Gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigation} from '@truefit/bach-react-navigation';
import {NavigationProp} from '<your navigation prop>';

import {View, Button} from 'react-native';

type Props = {
  navigation: NavigationProp;
  handeClick: () => void;
}

const Component = ({handlePress}: Props) => (
  <View>
    <Button title="Click Me" onPress={handlePress} />
  </View>
);

export default compose<Props>(
  withNavigation(),

  withCallback<Props>('handlePress', ({navigation}) => () => {
    navigation.goBack();
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigation} from '@truefit/bach-react-navigation';

import {View, Button} from 'react-native';

const Component = ({handlePress}) => (
  <View>
    <Button title="Click Me" onPress={handlePress} />
  </View>
);

export default compose<Props>(
  withNavigation(),

  withCallback<Props>('handlePress', ({navigation}) => () => {
    navigation.goBack();
  }),
)(Component);
```

_React Navigation Hook_
[useNavigation](https://reactnavigation.org/docs/use-navigation)

### withNavigationState

Gives access to the navigation state of the navigator which contains the screen.

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigationState} from '@truefit/bach-react-navigation';

import {View, Text} from 'react-native';

type Props = {
  routeNames: string;
}

const Component = ({routeNames}: Props) => (
  <View>
    <Text>{routeNames}</Text>
  </View>
);

export default compose<Props>(
  withNavigationState('routeNames', state => state.routeNames.join(',')),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigationState} from '@truefit/bach-react-navigation';

import {View, Text} from 'react-native';

const Component = ({routeNames}) => (
  <View>
    <Text>{routeNames}</Text>
  </View>
);

export default compose(
  withNavigationState('routeNames', state => state.routeNames.join(',')),
)(Component);
```

_React Navigation Hook_
[useNavigationState](https://reactnavigation.org/docs/use-navigation-state)

### withRoute

Gives access to route object. It's useful when you cannot pass the route prop into the component directly, or don't want to pass it in case of a deeply nested child.

_Example_

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withRoute} from '@truefit/bach-react-navigation';

import {RouteProp} from '@react-navigation/native';
import {NavigationProp} from '<your navigation prop>';

import {View, Text} from 'react-native';

type Props = {
  route: RouteProp<NavigationProp, 'RouteKey'>;
}

const Component = ({route}: Props) => (
  <View>
    <Text>{route.key}</Text>
  </View>
);

export default compose<Props>(
  withRoute(),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withRoute} from '@truefit/bach-react-navigation';

import {View, Text} from 'react-native';

const Component = ({route}) => (
  <View>
    <Text>{route.key}</Text>
  </View>
);

export default compose<Props>(
  withRoute(),
)(Component);
```

_React Navigation Hook_
[useRoute](https://reactnavigation.org/docs/use-route)

### withScrollToTop

The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.

_React Navigation Hook_
[useScrollToTop](https://reactnavigation.org/docs/use-scroll-to-top)
