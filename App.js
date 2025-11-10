import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

// Import screens
import ProfileScreen from './screens/ProfileScreen';
import SkillsScreen from './screens/SkillsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import EducationScreen from './screens/EducationScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import ContactScreen from './screens/ContactScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Skills') {
              iconName = focused ? 'code-slash' : 'code-slash-outline';
            } else if (route.name === 'Projects') {
              iconName = focused ? 'folder' : 'folder-outline';
            } else if (route.name === 'Education') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Experience') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'mail' : 'mail-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6366f1',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#6366f1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


