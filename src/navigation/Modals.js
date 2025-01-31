import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { ShadowStyles, SH, SW, TextStyles, COLORS, SF } from "@/theme";

import { deviceRegister } from "@/actions/UserActions";
import { Fonts, faceIconRound, fingerprintLogin } from "@/assets";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { isLoadingSelector } from "@/selectors/StatusSelectors";

import { getUser } from "@/selectors/UserSelectors";

import ModalsContext from "@/context/ModalsContext";
import { Spacer, Button, LoginModal } from "@/components";
import { navigate } from "./NavigationRef";
import { NAVIGATION } from "@/constants";
import { previousScreen } from "@/actions/GlobalActions";
import { storage } from "@/storage";
import { Platform } from "react-native";
import { ActivityIndicator } from "react-native";
import { TYPES } from "@/Types/Types";

export const rnBiometrics = new ReactNativeBiometrics({
  allowDeviceCredentials: true,
});

export default function Modals({ children }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [openModal, setOpenModal] = useState(false);

  const bioMetricModalRef = useRef(null);
  const openBioMetricSetupModal = useCallback(() => {
    bioMetricModalRef.current?.present();
  }, []);
  const closeBioMetricSetupModal = useCallback(() => {
    bioMetricModalRef.current?.close();
  }, []);

  const snapPoints = useMemo(() => ["60%", "60%"], []);

  const bioMetricLogin = () => {
    if (user?.user?.payload?.token) {
      rnBiometrics.isSensorAvailable().then((resultObject) => {
        const { available, biometryType } = resultObject;
        if (available && biometryType === BiometryTypes.TouchID) {
          checkBioMetricKeyExists();
        } else if (available && biometryType === BiometryTypes.FaceID) {
          checkBioMetricKeyExists();
        } else if (available && biometryType === BiometryTypes.Biometrics) {
          checkBioMetricKeyExists();
        } else {
          // alert('Biometrics not supported');
        }
      });
    } else {
      setOpenModal(true);

      closeBioMetricSetupModal();
    }
  };

  useEffect(() => {
    if (user?.userProfile?.user_profiles?.is_biometric) {
      closeBioMetricSetupModal();
    }
  }, [user]);

  const checkBioMetricKeyExists = () => {
    rnBiometrics.biometricKeysExist().then((resultObject) => {
      const { keysExist } = resultObject;
      if (keysExist) {
        promptBioMetricSignin();
      } else {
        createKeys();
      }
    });
  };

  const promptBioMetricSignin = () => {
    let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = epochTimeSeconds + "some message";
    rnBiometrics
      .createSignature({
        promptMessage: "Sign in",
        payload: payload,
      })
      .then((resultObject) => {
        const { success } = resultObject;
        if (success) {
          dispatch(deviceRegister(user?.user?.payload)).then(async (res) => {
            closeBioMetricSetupModal();
            const bioStatus = {
              isStatus: true,
            };
            await storage.setMapAsync("Biometric-status", bioStatus);
          });
        } else {
        }
      })
      .catch((error) => {});
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.DEVICE_REGISTER], state)
  );

  const createKeys = () =>
    rnBiometrics.createKeys().then(() => promptBioMetricSignin());

  return (
    <>
      <ModalsContext.Provider
        value={{
          biometric: {
            openBioMetricSetupModal,
            closeBioMetricSetupModal,
          },
        }}
      >
        {children}
      </ModalsContext.Provider>
      {/* <BottomSheetModalProvider> */}
      <BottomSheetModal
        ref={bioMetricModalRef}
        index={1}
        style={ShadowStyles.shadow}
        snapPoints={snapPoints}
        // stackBehavior="push"
      >
        {isLoading ? (
          <View style={{ marginTop: SH(150) }}>
            <ActivityIndicator size="large" color={COLORS.primary} />
            <Spacer space={SH(50)} />
            <Text
              style={{
                textAlign: "center",
                fontFamily: Fonts.Bold,
                color: COLORS.black,
                fontSize: SF(20),
              }}
            >
              Registering Device
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.contentContainer}>
              <Spacer space={SH(60)} />
              <Text style={styles.title}>{"Setup Biometrics"}</Text>
              <Spacer space={SH(40)} />
              <Image
                source={
                  Platform.OS === "ios" ? faceIconRound : fingerprintLogin
                }
                style={styles.bioMetricImage}
              />

              <Spacer space={SH(30)} />

              <Text style={styles.desc}>
                {"You can also login to JOBR Wallet using biometric unlock."}
              </Text>

              <Spacer space={SH(32)} />
              <Button
                title={"Enable BioMetric Login"}
                textStyle={{ color: COLORS.white }}
                style={{
                  backgroundColor: COLORS.primary,
                }}
                onPress={bioMetricLogin}
              />
              <Spacer space={SH(20)} />
              <TouchableOpacity onPress={closeBioMetricSetupModal}>
                <Text style={styles.textLater}>{"Maybe later"}</Text>
              </TouchableOpacity>
              <Spacer space={SH(50)} />
            </View>
          </>
        )}
        <View>
          <LoginModal isVisible={openModal} closeModal={setOpenModal} />
        </View>
      </BottomSheetModal>
      {/* </BottomSheetModalProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  bioMetricImage: { width: SH(140), height: SH(140) },
  iconStyle: { position: "absolute", top: 16, right: 16 },
  textLater: {
    ...TextStyles.smalltitle,
    color: COLORS.text,
    textDecorationLine: "underline",
  },
  desc: {
    ...TextStyles.smalltitle,
    textAlign: "center",
  },
  title: {
    ...TextStyles.title,
  },
  contentContainer: {
    alignItems: "center",
    flex: 1,
    padding: SW(20),
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
});
