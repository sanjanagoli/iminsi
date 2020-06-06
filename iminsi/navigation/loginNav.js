import { StackNavigator } from 'react-navigation';

import SignUp from './screens/Signup/SignupScreen';
import SignIn from './screens/Signup/SigninScreen';

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
    },
  },
});
