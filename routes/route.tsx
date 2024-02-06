import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import DailyTrack from '../screens/DailyTrack';


const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DailyTrack" component={DailyTrack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;