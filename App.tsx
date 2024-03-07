import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from './src/constants/style';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import {useContext, useEffect, useState} from 'react';
import AuthContextProvider, {AuthContext} from './src/store/auth-context';
import IconButton from './src/components/ui/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingOverlay from './src/components/ui/LoadingOverlay';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecentTasks from './src/screens/RecentTasks';
import AllTasks from './src/screens/AllTasks';
import ManageTask from './src/screens/ManageTask';
import Icon from 'react-native-vector-icons/Ionicons';
import TasksContextProvider from './src/store/tasks-context';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function TaskOverView() {
  return (
    <Tabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: Colors.primary500,
          position: 'absolute',
        },
        headerRight: ({tintColor}) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageTask');
            }}
          />
        ),
      })}
    >
      <Tabs.Screen
        name="RecentTasks"
        component={RecentTasks}
        options={{
          title: 'Recent Tasks',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Icon name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AllTasks"
        component={AllTasks}
        options={{
          title: 'All Tasks',
          tabBarLabel: 'All Tasks',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  // const authCtx = useContext(AuthContext);
  return (
    <TasksContextProvider>
      <>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            options={{headerShown: false}}
            name="TaskOverView"
            component={TaskOverView}
          />
          <Stack.Screen
            name="ManageTask"
            component={ManageTask}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </>
    </TasksContextProvider>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
};
const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <LoadingOverlay message="Loading..." />;
  }

  return <Navigation />;
};

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
};
export default App;
