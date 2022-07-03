// Import resources
import React from "react";
import { View, Image } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/core";

// Import custom files
import routes from "../screens/routes";
import CustomImage from "./CustomImage";
import { CircleButton, RectangleButton } from "./NftButtons";
import { EthPrice, NftTitle, SubInfo } from "./NftSubInfo";
import { appColors, appImages, appShadows, appSizes } from "../config/data";

// Component
export default function NftItem({ rowData }) {
  // Define bavigation
  const navigation = useNavigation();

  // Debug
  //console.log("Debug nftItem: ",)

  // Return component
  return (
    <View
      style={{
        backgroundColor: appColors?.white,
        borderRadius: appSizes?.font,
        marginBottom: appSizes?.extraLarge,
        margin: appSizes?.base,
        ...appShadows?.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        {/** Image */}
        <CustomImage
          image={rowData?.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: appSizes?.font,
            borderTopRightRadius: appSizes?.font,
          }}
        />
        {/** Circle button */}
        <CircleButton imgUrl={appImages?.heart} right={10} top={10} />
      </View>

      {/** Nft sub info */}
      <SubInfo />

      {/** Title container */}
      <View style={{ width: "100%", padding: appSizes?.font }}>
        {/** Nft title */}
        <NftTitle
          title={rowData?.name}
          subTitle={rowData?.creator}
          titleSize={appSizes?.large}
          subTitleSize={appSizes?.small}
        />
        {/** Price container */}
        <View
          style={{
            marginTop: appSizes?.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/** Eth price */}
          <EthPrice price={rowData.price} />
          {/** Rectangle button */}
          <RectangleButton
            minWidth={120}
            fontSize={appSizes?.font}
            onPress={() => navigation.navigate(routes.NFT_DETAILS, { rowData })}
          />
        </View>
      </View>
    </View>
  ); // close return
} // close component
