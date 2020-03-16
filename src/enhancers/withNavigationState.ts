import {EnhancerContext, EnhancerResult} from '@truefit/bach';
import {useNavigationState} from '@react-navigation/native';

export default <T, S, V>(selectorName: keyof T, selector: (s: S) => V) => ({
  generateNewVariable,
}: EnhancerContext): EnhancerResult => {
  const selectorAlias = generateNewVariable();

  return {
    dependencies: {
      useNavigationState,
      [selectorAlias]: selector,
    },
    initialize: `const ${selectorName} = useNavigationState(${selectorAlias});`,
    props: [selectorName as string],
  };
};
