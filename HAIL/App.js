import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import ExploreScreen from './screens/ExploreScreen';


const Tab = createBottomTabNavigator()

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false
}

export default function App() {
  return (
    <NavigationContainer>
   <Tab.Navigator 
   initialRouteName='Home'
   screenOptions={screenOptions}
   >
    <Tab.Screen 
    name='Home' 
    component={HomeScreen}
    options={{
      tabBarIcon: ({focused }) =>{
        return(
          <View>
           <Icon path={mdiHomeVariantOutline} size={1} />

          </View>
        )

      }
    }}
    />
    <Tab.Screen name = 'Explore' component={ExploreScreen}/>
   </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
