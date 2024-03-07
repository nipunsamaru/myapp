import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecentTasks from '../screens/RecentTasks';
import AllTasks from '../screens/AllTasks';

const BottomTabs = createBottomTabNavigator();

const TabBar = () => {
  <BottomTabs.Navigator>
    <BottomTabs.Screen name="RecentTasks" component={RecentTasks} />
    <BottomTabs.Screen name="AllTasks" component={AllTasks} />
  </BottomTabs.Navigator>;
};

export default TabBar;
