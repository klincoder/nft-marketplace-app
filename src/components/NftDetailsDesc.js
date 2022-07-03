// Import resources
import React, { useState } from "react";
import { View } from "react-native";
import tw from "twrnc";
import { appColors, appFonts, appSizes } from "../config/data";

// Import custom files
import CustomText from "./CustomText";
import { EthPrice, NftTitle } from "./NftSubInfo";

// Component
export default function NftDetailsDesc({ data }) {
  // Define slice desc
  const sliceDesc = data?.description?.slice(0, 100);

  // Define state
  const [initialDesc, setInitialDesc] = useState(sliceDesc);
  const [readMore, setReadMore] = useState(false);

  // Debug
  //console.log("Debug nftDetailsDesc: ",)

  // Return component
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/** Title */}
        <NftTitle
          title={data?.name}
          subTitle={data?.creator}
          titleSize={appSizes?.extraLarge}
          subTitleSize={appSizes?.font}
        />

        {/** Price */}
        <EthPrice price={data?.price} />
      </View>

      {/** Description continer */}
      <View
        style={{
          marginVertical: appSizes?.extraLarge * 1.5,
        }}
      >
        {/** Title */}
        <CustomText
          style={{
            fontSize: appSizes?.font,
            fontFamily: appFonts?.semiBold,
            color: appColors?.primary,
          }}
        >
          Description
        </CustomText>
        {/** Content */}
        <View style={{ marginTop: appSizes?.base }}>
          <CustomText
            style={{
              fontSize: appSizes?.small,
              fontFamily: appFonts?.regular,
              color: appColors?.secondary,
              lineHeight: appSizes?.large,
            }}
          >
            {initialDesc}
            {!readMore && "..."}
            <CustomText
              style={{
                fontSize: appSizes?.small,
                fontFamily: appFonts?.semiBold,
                color: appColors?.primary,
              }}
              onPress={() => {
                if (!readMore) {
                  setInitialDesc(data?.description);
                  setReadMore(true);
                } else {
                  setInitialDesc(sliceDesc);
                  setReadMore(false);
                } // close if
              }}
            >
              {readMore ? " Show Less" : "Read More"}
            </CustomText>
          </CustomText>
        </View>
      </View>
    </>
  ); // close return
} // close component
