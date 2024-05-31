import {StyleSheet} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';


import StudentDashboard from './StudentDashboard'
import MarksSummaryScreen from './MarksSummaryScreen'
import StudentFee from './StudentFee';
import StudentTimetable from './StudentTimetable'
import StudentSyllabus from './StudentSyllabus'
import { MainScreen } from '../MainScreen';

const Drawer = createDrawerNavigator();

const StudentMainScreen = ({navigation , route}) =>{

  // {route}
  // {navigation, route}
  // const { regNo } = route.params;

    return(
    // <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            paddingVertical: 80,
            backgroundColor: '#9C70EA',
            width: 250,
          },
          drawerLabelStyle: {
            color: '#FFFFFF',
            fontSize: 14,
            fontFamily: 'Poppins-Medium',
          },

          headerShadowVisible: false,
          headerLeftLabelVisible: true,
          headerStyle: {
            backgroundColor: '#9C70EA',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: 120,
          },

          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
          },

          drawerActiveTintColor: '#BFA8E5',
        }}>
        <Drawer.Screen
          name="Dashboard"
          component={StudentDashboard}
          // initialParams={}
          options={
            {
              // drawerIcon: () =>{
              //     <Icon name = "home-filled"/>
              // }
            }
          }
        />
        <Drawer.Screen name="Marks Summary" component={MarksSummaryScreen} 
        // initialParams={regNo}
           />
        <Drawer.Screen name="Fee" component={StudentFee} 
        // initialParams={regNo}
           />
        <Drawer.Screen name="Timetable" component={StudentTimetable} />
        <Drawer.Screen name="Syllabus" component={StudentSyllabus} />
        <Drawer.Screen name="Logout" component={MainScreen} options={{headerShown: false}}/>

        </Drawer.Navigator>
    // </NavigationContainer>
    )
}

export default StudentMainScreen