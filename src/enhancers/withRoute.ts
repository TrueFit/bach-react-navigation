import {EnhancerResult} from '@truefit/bach';
import {useRoute} from '@react-navigation/native';

export default () => (): EnhancerResult => {
  return {
    dependencies: {
      useRoute,
    },
    initialize: `const route = useRoute();`,
    props: ['route'],
  };
};
