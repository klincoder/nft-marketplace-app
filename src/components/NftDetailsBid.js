// Import resources
import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import { appColors, appFonts, appSizes } from "../config/data";
import CustomImage from "./CustomImage";

// Import custom files
import CustomText from "./CustomText";
import { EthPrice } from "./NftSubInfo";

// Component
export default function NftDetailsBid({ bid }) {
  // Debug
  //console.log("Debug nftDetailsBid: ",)

  // Return component
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: appSizes?.base,
        paddingHorizontal: appSizes?.base * 2,
      }}
    >
      {/** Bidder image */}
      <CustomImage
        image={bid?.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />

      {/** Bidder info container */}
      <View>
        {/** Name */}
        <CustomText
          style={{
            fontFamily: appFonts?.semiBold,
            fontSize: appSizes?.small,
            color: appColors?.primary,
          }}
        >
          Bid placed by {bid?.name}
        </CustomText>
        {/** Date */}
        <CustomText
          style={{
            fontFamily: appFonts?.regular,
            fontSize: appSizes?.small - 2,
            color: appColors?.secondary,
            marginTop: 3,
          }}
        >
          Bid placed by {bid?.name}
        </CustomText>
      </View>

      {/** Price */}
      <EthPrice price={bid?.price} />
    </View>
  ); // close return
} // close component
