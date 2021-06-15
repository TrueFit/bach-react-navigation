import {RefObject} from 'react';
import {EnhancerContext, EnhancerResult} from '@truefit/bach';
import {useScrollToTop} from '@react-navigation/native';
import {ScrollableWrapper} from '../types';

export default (ref: RefObject<ScrollableWrapper>) =>
  ({generateNewVariable}: EnhancerContext): EnhancerResult => {
    const refAlias = generateNewVariable();

    return {
      dependencies: {
        useScrollToTop,
        [refAlias]: ref,
      },
      initialize: `
      useScrollToTop(${refAlias});
    `,
      props: [],
    };
  };
