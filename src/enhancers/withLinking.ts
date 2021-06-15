import {RefObject} from 'react';
import {EnhancerContext, EnhancerResult} from '@truefit/bach';
import {useLinking, NavigationContainerRef} from '@react-navigation/native';
import {LinkingOptions} from '../types';

export default <T>(
    propertyName: keyof T,
    ref: RefObject<NavigationContainerRef>,
    options?: LinkingOptions,
  ) =>
  ({generateNewVariable}: EnhancerContext): EnhancerResult => {
    const refAlias = generateNewVariable();
    const optionsAlias = generateNewVariable();

    return {
      dependencies: {
        useLinking,
        [refAlias]: ref,
        [optionsAlias]: options,
      },
      initialize: `
      const ${propertyName} = useLinking(${refAlias}, ${optionsAlias});
    `,
      props: [propertyName as string],
    };
  };
