import {EnhancerResult} from '@truefit/bach';
import {useNavigation} from '@react-navigation/native';

export default () => (): EnhancerResult => {
  return {
    dependencies: {
      useNavigation,
    },
    initialize: `const navigation = useNavigation();`,
    props: ['navigation'],
  };
};
