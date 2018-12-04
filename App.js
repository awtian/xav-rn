import {createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

//Screens
import Home from './screens/Home'
import About from './screens/About'

const App = createStackNavigator({ 
  Home: {
    screen: Home
  },
  About: About,
  PuraPura: About,
  PuraPura2: About,
  PuraPura3: About,
}, {
  initialRouteName: 'About'
}
)


// const StackNav = createStackNavigator({ 
//   Home: {
//     screen: Home,
//     title: 'Todo List'
//   },
//   About: About
//   }
// )

export default createAppContainer(App)