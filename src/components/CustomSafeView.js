// Import resources
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import tw from "twrnc";

// Import custom files
import { appColors } from "../config/data";

// Component
function CustomSafeView({ children, style, statusBarBg, ...rest }) {
  // Return component
  return (
    <SafeAreaView style={[tw`flex-1 bg-[${appColors?.white}]`, style]}>
      {/** Status bar */}
      <StatusBar
        {...rest}
        style="auto"
        backgroundColor={statusBarBg || appColors?.primary}
      />

      {/** Screen content */}
      {children}
    </SafeAreaView>
  ); // close return
} // close component

// Export
export default CustomSafeView;
