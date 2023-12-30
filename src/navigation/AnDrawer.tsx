import React, { FunctionComponent } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import MyCourseScreen from '../screens/MyCourseScreen';

const Drawer = createDrawerNavigator();

interface AnDrawerProps {}

const AnDrawer: FunctionComponent<AnDrawerProps> = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="MyCourse" component={MyCourseScreen} />
    </Drawer.Navigator>
  );
};

export default AnDrawer;
