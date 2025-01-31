import { Fonts } from "@/assets";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { StyleSheet } from "react-native";
import { ms, s, verticalScale, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    textAlign: "center",
  },
  header: {
    height: SH(50),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
  },
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  filterIcon: {
    height: verticalScale(25),
    width: ms(25),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: ms(20),
  },

  headerIconView: {
    height: SH(35),
    width: SW(60),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    paddingHorizontal: ms(10),
    alignItems: "center",
    justifyContent: "space-between",
  },

  tabButtonView: {
    borderRadius: 20,
    width: ms(65),
  },
  upperView: {
    height: vs(120),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(20),
    flexDirection: "row",
    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: ms(25),
    marginLeft: ms(20),
  },

  iconStyle: {
    height: ms(15),
    width: ms(16),
    marginRight: ms(7),
  },
  headingText: {
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
    fontSize: ms(14),
    marginBottom: vs(3),
  },
  titleText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: ms(16),
  },
  imageBackground: {
    alignSelf: "center",
    alignItems: "center",
    height: ms(200),
    width: ms(200),
    borderRadius: ms(75),
    backgroundColor: COLORS.placeholder,
    flex: 1,
  },
  textView: {
    backgroundColor: COLORS.placeholder,
    borderRadius: ms(5),
    flex: 1,
    height: vs(45),
    justifyContent: "center",
    paddingHorizontal: SW(5),
  },
  text: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: SF(13),

    textAlign: "center",
  },
  buttonStyle: {
    height: SH(52),
  },
});
