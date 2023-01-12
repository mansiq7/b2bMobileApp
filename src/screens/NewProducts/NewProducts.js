import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { styles } from "./NewProducts.style";
import { Button, ScreenWrapper, Spacer, SubHeader } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { backArrow, filter, Fonts } from "@/assets";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { Apparel, Business, Products } from "@/screens";
import {
  ms,
  vs,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";
import { Header } from "@/components/Header";
export function NewProducts() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "Apparel", title: "Apparel" },
    { key: "Tobacco", title: "Tobacco" },
  ]);

  const FirstRoute = () => <Apparel />;
  const SecondRoute = () => <Business />;

  const renderScene = SceneMap({
    Apparel: FirstRoute,
    Tobacco: SecondRoute,
  });
  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,
                {
                  borderColor: focused ? COLORS.primary : COLORS.light_border,
                },
              ]}
            >
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.text,
                  textAlignVertical: "center",
                  fontFamily: focused ? Fonts.SemiBold : Fonts.Regular,
                }}
              >
                {route.title}
              </Text>
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.primary }}
        style={{
          elevation: 0,
          backgroundColor: COLORS.white,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header title={strings.newProducts.newProducts} back={backArrow} />

      <View style={styles.upperView}>
        <SubHeader
          title={strings.newProducts.newProducts}
          subTitle={strings.newProducts.subText}
        />
      </View>
      <TabView
        swipeEnabled={true}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </ScreenWrapper>
  );
}
