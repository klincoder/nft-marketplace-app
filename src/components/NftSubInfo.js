// Import resources
import React from "react";
import { View } from "react-native";
import tw from "twrnc";

// Import custom files
import CustomText from "./CustomText";
import CustomImage from "./CustomImage";
import {
  appColors,
  appFonts,
  appImages,
  appShadows,
  appSizes,
} from "../config/data";

/********************
  COMPONENT - ?NFT TITLE
*********************/
export const NftTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  // Debug
  //console.log("Debug nftTitle: ",)
  // Return component
  return (
    <View>
      {/** Title */}
      <CustomText
        style={{
          fontFamily: appFonts?.semiBold,
          fontSize: titleSize,
          color: appColors?.primary,
        }}
      >
        {title}
      </CustomText>

      {/** Sub title */}
      <CustomText
        style={{
          fontFamily: appFonts?.regular,
          fontSize: subTitleSize,
          color: appColors?.primary,
        }}
      >
        {subTitle}
      </CustomText>
    </View>
  ); // close return
}; // close component

/********************
  COMPONENT - ETH PRICE
*********************/
export const EthPrice = ({ price }) => {
  // Debug
  //console.log("Debug ethPrice: ",)
  // Return component
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/** Logo */}
      <CustomImage
        image={appImages?.eth}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          marginRight: 2,
        }}
      />
      {/** Price */}
      <CustomText
        style={{
          fontFamily: appFonts?.medium,
          fontSize: appSizes?.font,
          color: appColors?.primary,
        }}
      >
        {price}
      </CustomText>
    </View>
  ); // close return
}; // close component

/********************
  COMPONENT - IMAGE CMP
*********************/
export const ImageCmp = ({ imgUrl, index }) => {
  // Debug
  //console.log("Debug imageCmp: ",)
  // Return component
  return (
    <CustomImage
      image={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -appSizes?.font,
      }}
    />
  ); // close return
}; // close component

/********************
  COMPONENT - PEOPLE
*********************/
export const People = () => {
  // Debug
  //console.log("Debug people: ",)
  // Return component
  return (
    <View style={{ flexDirection: "row" }}>
      {/** Loop image cmp */}
      {[appImages?.person02, appImages?.person03, appImages?.person04]?.map(
        (item, index) => (
          <ImageCmp key={`People-${index}`} imgUrl={item} index={index} />
        )
      )}
    </View>
  ); // close return
}; // close component

/********************
  COMPONENT - END DATE
*********************/
export const EndDate = () => {
  // Debug
  //console.log("Debug endDate: ",)
  // Return component
  return (
    <View
      style={{
        paddingHorizontal: appSizes?.font,
        paddingVertical: appSizes?.base,
        backgroundColor: appColors?.white,
        justifyContent: "center",
        alignItems: "center",
        ...appShadows?.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      {/** Ending in */}
      <CustomText
        style={{
          fontFamily: appFonts?.regular,
          fontSize: appSizes?.small,
          color: appColors?.primary,
        }}
      >
        Ending in
      </CustomText>

      {/** Time */}
      <CustomText
        style={{
          fontFamily: appFonts?.semiBold,
          fontSize: appSizes?.medium,
          color: appColors?.primary,
        }}
      >
        12h 30m
      </CustomText>
    </View>
  ); // close return
}; // close component

/********************
  COMPONENT - SUBINFO
*********************/
export const SubInfo = () => {
  // Debug
  //console.log("Debug SubInfo: ",)
  // Return component
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: appSizes?.font,
        marginTop: -appSizes?.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/** Show people */}
      <People />
      {/** Show Date */}
      <EndDate />
    </View>
  ); // close return
}; // close component
