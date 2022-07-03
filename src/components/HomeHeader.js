// Import resources
import React from "react";
import { TextInput, View } from "react-native";
import tw from "twrnc";

// Import custom files
import CustomText from "./CustomText";
import useLoggedInUser from "../hooks/useLoggedInUser";
import CustomImage from "./CustomImage";
import { appColors, appFonts, appImages, appSizes } from "../config/data";
import { handleSliceString } from "../config/functions";

// Component
export default function HomeHeader({ onSearch }) {
  // Define logged in user
  const { username, userAvatar } = useLoggedInUser();

  // Debug
  //console.log("Debug homeHeader: ",)

  // Return component
  return (
    <View
      style={{
        backgroundColor: appColors?.primary,
        padding: appSizes?.font,
      }}
    >
      {/** Inner container */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/** Logo */}
        {/* <CustomImage
          image={appImages?.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        /> */}
        <CustomText
          style={{
            fontFamily: appFonts?.regular,
            fontSize: appSizes?.large,
            color: appColors?.white,
          }}
        >
          Hello, {handleSliceString(username, 0, 9)} 👋
        </CustomText>

        {/** Profile pic container */}
        <View style={{ width: 45, height: 45 }}>
          {/** Profile pic */}
          <CustomImage
            isLink
            image={userAvatar}
            style={tw`w-full h-full rounded-full`}
          />
          {/** Badge */}
          <CustomImage
            image={appImages?.badge}
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      {/** Username container */}
      <View style={{ marginVertical: appSizes?.font }}>
        {/** Username */}
        <CustomText
          style={{
            fontFamily: appFonts?.regular,
            fontSize: appSizes?.font,
            color: appColors?.white,
          }}
        >
          Welcome back,
        </CustomText>
        {/** Sub heading */}
        <CustomText
          style={{
            fontFamily: appFonts?.bold,
            fontSize: appSizes?.large,
            color: appColors?.white,
            marginTop: appSizes?.base / 2,
          }}
        >
          Let's find you a masterpeice.
        </CustomText>
      </View>

      {/** Search container */}
      <View style={{ marginTop: appSizes?.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: appSizes?.font,
            backgroundColor: appColors?.secondary,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: appSizes?.font,
            paddingVertical: appSizes?.small - 2,
          }}
        >
          {/** Image */}
          <CustomImage
            image={appImages?.search}
            style={{ width: 20, height: 20, marginRight: appSizes?.base }}
          />
          {/** Searcn val */}
          <TextInput
            placeholder="Search NFTs"
            style={{
              flex: 1,
              color: appColors?.white,
              fontFamily: appFonts?.semiBold,
              fontSize: appSizes?.font,
            }}
            onChangeText={onSearch}
            placeholderTextColor={appColors?.grey}
          />
        </View>
      </View>
    </View>
  ); // close return
} // close component
