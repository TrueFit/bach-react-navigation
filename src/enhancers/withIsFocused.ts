import {EnhancerResult} from '@truefit/bach';
import {useIsFocused} from '@react-navigation/native';
import {IsFocused} from '../types';

export default <T extends IsFocused>(propertyName: keyof T = 'isFocused') => (): EnhancerResult => {
  return {
    dependencies: {
      useIsFocused,
    },
    initialize: `const ${propertyName} = useIsFocused();`,
    props: [propertyName as string],
  };
};
