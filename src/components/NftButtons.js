// Import resources
import React from "react";
import { View } from "react-native";
import tw from "twrnc";

// Import custom files
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";
import CustomText from "./CustomText";
import { appColors, appFonts, appShadows, appSizes } from "../config/data";

/****************************
COMPONENT - CIRCLE BUTTON
*****************************/
export const CircleButton = ({ imgUrl, onPress, style, ...props }) => {
  // Debug
  //console.log("Debug bookmarkButton: ",)
  // Return component
  return (
    <CustomButton
      isTouchable
      onPress={onPress}
      style={[
        {
          width: 40,
          height: 40,
          backgroundColor: appColors?.white,
          position: "absolute",
          borderRadius: appSizes?.extraLarge,
          alignItems: "center",
          justifyContent: "center",
          ...appShadows?.light,
          ...props,
        },
        style,
      ]}
    >
      <CustomImage image={imgUrl} style={{ width: 24, height: 24 }} />
    </CustomButton>
  ); // close return
}; // close component

/****************************
COMPONENT - RECTANGLE BUTTON
*****************************/
export const RectangleButton = ({ minWidth, fontSize, onPress, ...props }) => {
  // Debug
  //console.log("Debug rectButton: ",)
  // Return component
  return (
    <CustomButton
      isTouchable
      onPress={onPress}
      style={{
        backgroundColor: appColors?.primary,
        borderRadius: appSizes?.extraLarge,
        minWidth: minWidth,
        padding: appSizes?.small,
        ...props,
      }}
    >
      {/** Text */}
      <CustomText
        style={{
          fontFamily: appFonts?.bold,
          fontSize: fontSize,
          color: appColors?.white,
          textAlign: "center",
        }}
      >
        Place a Bid
      </CustomText>
    </CustomButton>
  ); // close return
}; // close component
