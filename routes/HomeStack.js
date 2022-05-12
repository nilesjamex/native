import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "../screens/Home.js";
import Login from "../screens/Login.js"
const screens = {
    Home: {
        screen: Home
    },
    Logins: {
        screen: Login
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)