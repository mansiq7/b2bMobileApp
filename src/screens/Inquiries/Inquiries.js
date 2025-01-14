import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { styles } from "./Inquiries.styles";
import { SH, SW } from "@/theme";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { userPhoto } from "@/assets";

export function Inquiries() {
  const ChatData = [
    {
      id: 1,
      pic: userPhoto,
      businessName: "Carrols Restaurant Group",
      userName: "Daniel W. Gay",
      position: "Sales Manager",
      message:
        "The obvious strategy of a tag line is to make your The obvious strategy of a tag line is to make your",
      time: "10:39 am",
    },
    {
      id: 2,
      pic: userPhoto,
      businessName: "Carrols Restaurant Group",
      userName: "Daniel W. Gay",
      position: "Sales Manager",
      message:
        "The obvious strategy of a tag line is to make your The obvious strategy of a tag line is to make your",
      time: "10:39 am",
    },
  ];
  const ChatDuta = [
    {
      id: 1,
      pic: userPhoto,
      businessName: "Carrols Restaurant Group",
      userName: "Daniel W. Gay",
      position: "Sales Manager",
      message:
        "The obvious strategy of a tag line is to make your The obvious strategy of a tag line is to make your",
      time: "10:39 am",
    },
    {
      id: 2,
      pic: userPhoto,
      businessName: "Carrols Restaurant Group",
      userName: "Daniel W. Gay",
      position: "Sales Manager",
      message:
        "The obvious strategy of a tag line is to make your The obvious strategy of a tag line is to make your",
      time: "10:39 am",
    },
  ];
  // const mergeArrays = (arrays) => {
  //   return [].concat.apply([], arrays);
  // };
  // let dataArray = [ChatData, ChatDuta];
  // useEffect(() => {
  //   const mergedArray = mergeArrays(dataArray);
  // }, []);

  const Item = ({ item }) => (
    <>
      <TouchableOpacity onPress={() => navigate(NAVIGATION.chatting)}>
        <View style={styles.chatView}>
          <Image
            source={item.pic}
            resizeMode="contain"
            style={styles.userPicStyle}
          />

          <View style={{ marginLeft: SW(10), flex: 1 }}>
            <View style={styles.chatinnerView}>
              <Text style={styles.businessText}>{item.businessName}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>

            <Spacer space={SH(3)} />

            <Text style={styles.nameText}>
              {item.userName} |{" "}
              <Text style={styles.positionText}>{item.position}</Text>
            </Text>

            <Spacer space={SH(5)} />

            <View style={{ flex: 1, paddingRight: SW(5) }}>
              <Text style={styles.timeText} numberOfLines={1}>
                {item.message}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Spacer space={SH(15)} />

      <View style={styles.bottomLine}></View>
    </>
  );

  return (
    <ScreenWrapper>
      <NameHeaderCoins title={strings.profile.inquiries} backRequired />
      <Spacer space={SH(15)} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <Spacer space={SH(20)} />

        <FlatList
          data={ChatData}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />

        <Spacer space={SH(20)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
