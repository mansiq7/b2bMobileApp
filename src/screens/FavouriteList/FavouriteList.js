import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { NameHeaderCoins, ScreenWrapper } from "@/components";
import { styles } from "./FavouriteList.styles";
import { COLORS, SH, SW } from "@/theme";
import { strings } from "@/localization";
import { useDispatch } from "react-redux";
import {
  getFavouriteProducts,
  getFavouriteSellers,
} from "@/actions/UserActions";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { bottomProducts, shopLight } from "@/assets";
import { FavouriteSellers } from "./FavouriteSellers/FavouriteSellers";
import { FavouriteProducts } from "./FavouriteProducts/FavouriteProducts";

export function FavouriteList(params) {
  const dispatch = useDispatch();

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const firstScreenFunction = React.useCallback(() => {
    const data = {
      page: 1,
      limit: 10,
    };
    dispatch(getFavouriteSellers(data));
  }, []);

  const secondScreenFunction = React.useCallback(() => {
    const data = {
      page: 1,
      limit: 10,
    };
    dispatch(getFavouriteProducts());
  }, []);
  const [routes] = React.useState([
    { key: "first", title: "Seller" },
    { key: "second", title: "Product" },
  ]);

  const FirstRoute = () => <FavouriteSellers />;
  const SecondRoute = () => <FavouriteProducts />;

  const renderScene = SceneMap({
    first: () => <FirstRoute onScreenChange={firstScreenFunction} />,
    second: () => <SecondRoute onScreenChange={secondScreenFunction} />,
  });

  React.useEffect(() => {
    switch (index) {
      case 0:
        if (firstScreenFunction) {
          firstScreenFunction();
        }
        break;
      case 1:
        if (secondScreenFunction) {
          secondScreenFunction();
        }
        break;

      default:
        break;
    }
  }, [index]);

  const renderTabBar = (props) => {
    return (
      <TabBar
        contentContainerStyle={{
          paddingHorizontal: SW(10),
          paddingVertical: SH(15),
          backgroundColor: "#F9F9F9",
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
                    : COLORS.transparent,
                },
              ]}
            >
              <Image
                source={route.title === "Seller" ? shopLight : bottomProducts}
                resizeMode="contain"
                style={{
                  tintColor: focused ? COLORS.white : COLORS.light_grey,
                  height: SH(20),
                  width: SW(20),
                }}
              />
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.white }}
        style={{
          backgroundColor: COLORS.white,
          elevation: 0,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto", marginHorizontal: SW(-5) }}
      />
    );
  };
  return (
    <ScreenWrapper containerPropStyle={{ backgroundColor: "#F9F9F9" }}>
      <NameHeaderCoins title={strings.profile.favouriteList} backRequired />
      <View
        style={{ flex: 1, paddingVertical: SH(5), backgroundColor: "#F9F9F9" }}
      >
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
          swipeEnabled={false}
        />
      </View>
    </ScreenWrapper>
  );
}
