import { Fonts } from "@/assets";
import { COLORS, ShadowStyles } from "@/theme";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerView: {
    marginTop: SH(20),
    backgroundColor: COLORS.white,
    flex: 1,
    paddingVertical: 10,

  },
  mainImg: {
    marginTop: SH(10),
    height: SH(260),
    width: SW(242),
    position: "absolute",
    alignSelf: "center",
    resizeMode: "contain",
  },
  backImage: {
    width: SW(410),
    height: SW(250),
    position: "absolute",
    zIndex: -99,
    resizeMode: "contain",
    marginTop: verticalScale(30),
  },
  skipButton: {
    backgroundColor: COLORS.lightBlue,
    height: SW(24),
    width: SW(50),
    alignSelf: "flex-end",
    flexDirection: "row",
    marginRight: SW(20),
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  skipText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(12),
  },
  heading: {
    fontSize: SF(18),
    color: COLORS.black,
    // textAlign: "center",
    fontFamily: Fonts.MaisonMonoBold,
  },
  secondHeading: {
    fontSize: SF(14),
    color: COLORS.grey,
    fontFamily: Fonts.Regular,
  },
  item: {
    height: SH(32),
    marginVertical: 8,
    marginRight: 16,
    justifyContent: "center",
    backgroundColor: COLORS.placeHolder,
    borderColor: COLORS.lightSky,
    borderWidth: 1,
    borderRadius: 3,
  },
  title: {
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(12),
    color: COLORS.btnText,
  },
  flatlistView: {
    marginTop: SH(15),
    flex: 1,
    paddingHorizontal: SW(10),
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: COLORS.placeHolder,
    borderColor: "transparent",
    borderRadius: 5,
    height: SW(48),
  },
  textStyle: {
    color: COLORS.light_grey,
    fontFamily: Fonts.SemiBold,
  },
});
