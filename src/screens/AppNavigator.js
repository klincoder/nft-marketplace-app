// Import resources
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Import custom files
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PasswordRecoveryScreen from "../screens/PasswordRecoveryScreen";
import HomeNavigator from "../screens/HomeNavigator";
import EditProfileScreen from "../screens/EditProfileScreen";
import { globalScreenOptions } from "../config/data";
import NftDetailsScreen from "./NftDetailsScreen";
import HomeScreen from "./HomeScreen";

// Create stack navigator object
const Stack = createStackNavigator();

// Component
export default function AppNavigator({ userID }) {
  // Define authStackList
  const authStackList = [
    {
      name: "OnboardingScreen",
      component: OnboardingScreen,
      options: { headerShown: false },
    },
    {
      name: "LoginScreen",
      component: LoginScreen,
      options: { headerTitle: "Login" },
    },
    {
      name: "RegisterScreen",
      component: RegisterScreen,
      options: { headerTitle: "Register" },
    },
    {
      name: "PasswordRecoveryScreen",
      component: PasswordRecoveryScreen,
      options: { headerTitle: "Password Recovery" },
    },
  ];

  // Define appStackList
  const appStackList = [
    // {
    //   name: "HomeNavigator",
    //   component: HomeNavigator,
    //   options: { headerShown: false },
    // },
    {
      name: "HomeScreen",
      component: HomeScreen,
      options: { headerShown: false },
    },
    {
      name: "EditProfileScreen",
      component: EditProfileScreen,
      options: { headerTitle: "Edit Profile" },
    },
    {
      name: "NftDetailsScreen",
      component: NftDetailsScreen,
      options: { headerShown: false },
    },
  ];

  // Return component
  // Screens to hide bottom tab
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={globalScreenOptions}
    >
      <>
        {/** If userID */}
        {userID ? (
          <>
            {/** Loop appStackList */}
            {appStackList?.map((item, index) => (
              <Stack.Screen
                key={item?.name + index + 1}
                name={item?.name}
                component={item?.component}
                options={item?.options}
              />
            ))}
          </>
        ) : (
          <>
            {/** Loop authStackList */}
            {authStackList?.map((item, index) => (
              <Stack.Screen
                key={item?.name + index + 1}
                name={item?.name}
                component={item?.component}
                options={item?.options}
              />
            ))}
          </>
        )}
      </>
    </Stack.Navigator>
  ); // close return
} // close component
