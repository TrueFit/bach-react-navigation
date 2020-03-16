import {
  PROPS,
  EnhancerContext,
  EnhancerResult,
  DependencyList,
  generateConditionCode,
} from '@truefit/bach';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

export default <T>(fn: (t: T | undefined) => unknown, conditions?: DependencyList<T>) => ({
  generateNewVariable,
}: EnhancerContext): EnhancerResult => {
  const fnName = generateNewVariable();
  const conditionCode = generateConditionCode(conditions);

  return {
    dependencies: {
      useCallback,
      useFocusEffect,
      [fnName]: fn,
    },
    initialize: `
      useEffect(function () {
        useCallback(function() {
          return ${fnName}(${PROPS});
        }, [${conditionCode}]);
      });`,
    props: [fnName],
  };
};
