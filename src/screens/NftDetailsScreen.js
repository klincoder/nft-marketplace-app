// Import resources
import React from "react";
import { FlatList, View } from "react-native";
import tw from "twrnc";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import custom files
import CustomSafeView from "../components/CustomSafeView";
import CustomText from "../components/CustomText";
import NftDetailsBid from "../components/NftDetailsBid";
import NftDetailsHeader from "../components/NftDetailsHeader";
import NftDetailsDesc from "../components/NftDetailsDesc";
import { appColors, appFonts, appShadows, appSizes } from "../config/data";
import { RectangleButton } from "../components/NftButtons";
import { SubInfo } from "../components/NftSubInfo";

// Component
export default function NftDetailsScreen() {
  // Define navigation
  const navigation = useNavigation();

  // Define route
  const route = useRoute();

  // Define row data
  const { rowData } = route.params;
  const rowBid = rowData?.bids;
  const rowBidLen = rowBid?.length;

  // Debug
  //console.log("Debug nftDetailsScreen: ",);

  // Return component
  return (
    <CustomSafeView>
      {/** MAIN CONTAINER */}
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: appSizes?.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          zIndex: 1,
        }}
      >
        {/** Rectangle button */}
        <RectangleButton
          minWidth={170}
          fontSize={appSizes?.large}
          {...appShadows?.dark}
        />
      </View>

      {/** Loop bids */}
      <FlatList
        data={rowData?.bids}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <NftDetailsBid bid={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: appSizes?.extraLarge * 3 }}
        ListHeaderComponent={
          <>
            {/** Header */}
            <NftDetailsHeader data={rowData} navigation={navigation} />
            {/** Sub info */}
            <SubInfo />
            {/** Desc container */}
            <View style={{ padding: appSizes?.font }}>
              {/** Desc */}
              <NftDetailsDesc data={rowData} />
              {/** If rowBidLen > 0 */}
              {rowBidLen > 0 && (
                <CustomText
                  style={{
                    fontSize: appSizes?.font,
                    fontFamily: appFonts?.semiBold,
                    color: appColors?.primary,
                  }}
                >
                  Current Bids
                </CustomText>
              )}
            </View>
          </>
        }
      />
    </CustomSafeView>
  ); // close return
} // close component
