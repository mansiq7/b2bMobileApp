import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./SelectAddress.styles";
import { home, pencil, work } from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { useDispatch, useSelector } from "react-redux";
import {
  TYPES,
  getUserLocations,
  saveUserAddress,
} from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
import { useIsFocused } from "@react-navigation/native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { COLORS } from "@/theme";

export function SelectAddress() {
  const dispatch = useDispatch();
  const locations = useSelector(getUser);
  const token = locations?.registered?.token || locations?.user?.payload?.token;
  const [selectedAddress, setSelectedAddress] = useState();
  useEffect(() => {
    dispatch(getUserLocations());
  }, []);
  console.log("address", selectedAddress?.id);
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_USER_LOCATION], state)
  );

  const navigationHandler = () => {
    if (!selectedAddress) {
      Toast.show({
        text2: "Please select an address",
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });
    } else {
      dispatch(saveUserAddress(selectedAddress));
      goBack();
    }
  };
  const AddressSelected = (item) => {
    setSelectedAddress(item);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.container}>
      <View style={[styles.item]}>
        <View style={styles.innerView}>
          <Image
            source={item.address_type == "Home" ? home : work}
            resizeMode="contain"
            style={styles.iconStyle}
          />
          <View>
            <Text style={styles.placeText}>{item.address_type}</Text>

            <View style={{ width: "85%", marginLeft: SW(7) }}>
              <Text>
                {item.custom_address}
                {/* <Text> {item.postal_code}</Text> */}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            borderWidth: SF(2),
            padding: SW(3),
            borderRadius: SW(10),
            borderColor: selectedAddress === item ? "#275AFF" : "#D8D8D8",
          }}
          onPress={() => AddressSelected(item)}
          // onPress={() =>
          //   navigate(NAVIGATION.addressDetails, {
          //     type: "update",
          //     data: locations?.getLocation[index],
          //     id: locations?.getLocation[index]?.id,
          //   })
          // }
        >
          <View
            style={{
              height: SW(10),
              width: SW(10),
              borderRadius: SW(10),
              backgroundColor:
                selectedAddress === item ? "#275AFF" : COLORS.placeHolder,
            }}
          ></View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomLine}></View>
    </View>
  );

  return (
    <ScreenWrapper>
      <HeaderCoin amount={"0"} title={strings.addresses.addresses} />

      <View style={{ paddingHorizontal: SW(10), paddingVertical: SH(10) }}>
        <FlatList
          data={locations?.getLocation}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={locations?.getLocation}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title={strings.buttonText.selectAddress}
          onPress={navigationHandler}
          disabled={locations?.getLocation?.length === 5 && true}
        />
      </View>

      <Spacer space={SH(20)} />

      {/* {isLoading ? <Loader message="Loading data ..." /> : null} */}
    </ScreenWrapper>
  );
}