import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NameHeader, ScreenWrapper, Spacer, TextField } from "@/components";
import { styles } from "./NearMeOptions.styles";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { transactionHistory } from "@/constants/flatlistData";
import { HeaderCoin } from "../../Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { CompanyView } from "../../Profile/Wallet/Manufacturers/Components/CompanyView";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import {
  backArrow,
  filter,
  Fonts,
  forward,
  loactionPinFilled,
  location,
  manufactureLogo,
  nearMeMap,
  shopLight,
  wareHouseLogo,
} from "@/assets";
import { Search } from "@/components/Search";
import { store } from "@/store";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Products } from "@/screens/TopTabScreens/Products/Products";
import { Business } from "@/screens/TopTabScreens/Business/Business";
import { NearMe } from "../NearMe";
import { ManufacturersNearMe } from "../ManufacturersNearMe/ManufacturersNearMe";
import { DistributorsNearMe } from "../DistributorsNearMe/DistributorsNearMe";
import { RetailersNearMe } from "../RetailersNearMe/RetailersNearMe";

export function NearMeOptions() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "products", title: "Manufacturers" },
    { key: "business", title: "Distributors" },
    { key: "nearme", title: "Retailers" },
  ]);

  const FirstRoute = () => <ManufacturersNearMe />;
  const SecondRoute = () => <DistributorsNearMe />;
  const ThirdRoute = () => <RetailersNearMe />;

  const renderScene = SceneMap({
    products: FirstRoute,
    business: SecondRoute,
    nearme: ThirdRoute,
  });
  const renderTabBar = (props) => {
    return (
      <TabBar
        contentContainerStyle={{
          paddingHorizontal: SW(10),
          paddingVertical: SH(15),
        }}
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,

                {
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS.light_border,
                },
              ]}
            >
              <Text
                style={{
                  color: focused ? COLORS.white : COLORS.text,
                  textAlignVertical: "center",
                  fontFamily: focused ? Fonts.Regular : Fonts.Regular,
                  fontSize: SF(12),
                }}
              >
                {route.title}
              </Text>
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.white }}
        style={{
          backgroundColor: COLORS.white,
          elevation: 0,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };
  return (
    <ScreenWrapper>
      <NameHeader back={backArrow} title={strings.home.nearMe} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        swipeEnabled={false}
      />
    </ScreenWrapper>
  );
}
