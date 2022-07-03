// Import resources
import React, { useState } from "react";
import { View, FlatList } from "react-native";
import tw from "twrnc";

// Import custom files
import CustomSafeView from "../components/CustomSafeView";
import HomeHeader from "../components/HomeHeader";
import NftItem from "../components/NftItem";
import { appColors, nftList } from "../config/data";

// Component
export default function HomeScreen() {
  // Define state
  const [tempNfts, setTempNfts] = useState(nftList);

  // Debug
  //console.log("Debug homeScreen: ",);

  // FUNCTIONS
  // HANDLE SEARCH NFTS
  const handleSearchNfts = (val) => {
    // Define variables
    val = val?.toLowerCase();
    // If empty args, return
    if (!val.length) return setTempNfts(nftList);
    // Define filteredData
    const filteredData = nftList?.filter((item) =>
      item?.name?.toLowerCase().includes(val)
    );
    const filteredDataLen = filteredData?.length;
    // If filteredDataLen
    if (filteredDataLen > 0) {
      setTempNfts(filteredData);
    } else {
      setTempNfts(nftList);
    } // close if filteredData
  }; // close fxn

  // Return component
  return (
    <CustomSafeView>
      {/** MAIN CONTAINER */}
      <View style={tw`flex-1`}>
        {/** SECTION - NFT LIST */}
        <View style={{ zIndex: 0 }}>
          {/** Loop tempNfts */}
          <FlatList
            data={tempNfts}
            keyExtractor={(item) => item?.id?.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearchNfts} />}
            renderItem={({ item }) => <NftItem rowData={item} />}
          />
        </View>

        {/** Backdrop */}
        <View
          style={[tw`absolute top-0 right-0 bottom-0 left-0`, { zIndex: -1 }]}
        >
          <View style={[tw`bg-[${appColors?.primary}]`, { height: 300 }]} />
          <View style={tw`flex-1 bg-[${appColors?.white}]`} />
        </View>
      </View>
    </CustomSafeView>
  ); // close return
} // close component
