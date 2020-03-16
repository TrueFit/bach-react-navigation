import {EnhancerContext, EnhancerResult} from '@truefit/bach';
import {useNavigationState} from '@react-navigation/native';
import {NavigationState} from '@react-navigation/routers';

export default <T>(selectorName: keyof T, selector: (state: NavigationState) => unknown) => ({
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
