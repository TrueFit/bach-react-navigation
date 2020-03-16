import {
  PROPS,
  EnhancerContext,
  EnhancerResult,
  DependencyList,
  generateConditionCode,
  REACT,
} from '@truefit/bach';
import {useFocusEffect} from '@react-navigation/native';

export default <T>(fn: (t: T | undefined) => unknown, conditions?: DependencyList<T>) => ({
  generateNewVariable,
}: EnhancerContext): EnhancerResult => {
  const fnName = generateNewVariable();
  const conditionCode = generateConditionCode(conditions);

  return {
    dependencies: {
      useFocusEffect,
      [fnName]: fn,
    },
    initialize: `
      useFocusEffect(
        ${REACT}.useCallback(function() {
          return ${fnName}(${PROPS});
        }, [${conditionCode}])
      );`,
    props: [],
  };
};
