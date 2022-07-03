// Import resources
import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import custom files
import CustomText from "./CustomText";
import CustomImage from "./CustomImage";
import { CircleButton } from "./NftButtons";
import { appImages } from "../config/data";

// Component
export default function NftDetailsHeader({ data, navigation }) {
  // Define insets
  const insets = useSafeAreaInsets();

  // Debug
  //console.log("Debug nftDetailsHeader: ",)

  // Return component
  return (
    <View style={{ width: "100%", height: 373 }}>
      {/** Nft image */}
      <CustomImage
        image={data?.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />

      {/** Back button */}
      <CircleButton
        imgUrl={appImages?.left}
        onPress={() => navigation.goBack()}
        style={{ top: insets?.top + 20, left: 15 }}
      />

      {/** Bookmark button */}
      <CircleButton
        imgUrl={appImages?.heart}
        //onPress={() => navigation.goBack()}
        style={{ top: insets?.top + 20, right: 15 }}
      />
    </View>
  ); // close return
} // close component
