import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  registered: {},
  registerData: {},
  phone: {},
  user: {},
  getuser: {},
  editProfile: [],
  personalInformation: {},
  userProfile: {},
  otp: {},
  subject: [],
  support: [],
  faq: [],
  editProfile: [],
  getWalletBalance: {},
  transactions: [],
  userDetails: [],
  card: [],
  walletProfile: {},
  requestKyc: {},
  checkKyc: {},
  nearMeSellers: [],
  settings: [],
  isStatus: false,
  userLocation: {},
  getLocation: [],
  savedAddress: {},
  updateLocation: {},
  sendOtp: {},
  VerifyOTP: {},
  verifyEmail: {},
  getSellersList: [],
  getUserProfile: {},
  screenName: {},
  updateUserSettings: {},
  getUserSettings: {},
  sendChat: {},
  getMessages: [],
  deleteMessages: {},
  getOneManufactureDetails: {},
  getManufacturersList: [],
  getMessageHeads: [],
  sellerFavourites: {},
  productFavourites: {},
  getFavouriteProducts: {},
  getFavouriteSellers: [],
  uploadProfileImage: {},
  editProfile: {},
  getCatalogs: [],
};

export const userReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, user: payload.user };

    case TYPES.CLEAR_STORE:
      return {};

    default:
      return state;

    case TYPES.SAVE_PHONE:
      return {
        ...state,
        phone: payload.phone,
      };
    case TYPES.SEND_OTP_SUCCESS:
      return {
        ...state,
        sendOtp: payload.otp,
      };
    case TYPES.SAVE_OTP:
      return {
        ...state,
        otp: payload,
      };
    case TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        registered: payload.register.payload,
      };
    case TYPES.REGISTER_DATA_SUCCESS:
      return {
        ...state,
        registerData: payload.registerData,
      };
    case TYPES.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        VerifyOTP: payload.verify,
      };
    case TYPES.PERSONALINFORMATION_SUCCESS:
      return {
        ...state,
        personalInformation: payload.personalInformation.payload,
      };

    case TYPES.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: payload.userDetails.payload.data,
      };

    case TYPES.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: payload.editProfile.payload.data,
      };

    case TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        getUser: payload.getuser,
      };
    case TYPES.EMAIL_VERIFY_OTP_SUCCESS:
      return {
        ...state,
        verifyEmail: payload.verifyEmail,
      };

    case TYPES.NEAR_ME_SELLERS_SUCCESS:
      return {
        ...state,
        nearMeSellers: payload?.nearMeSellers?.payload?.sellers?.data,
      };
    case TYPES.NEAR_ME_SELLERS_RESET:
      return {
        ...state,
        nearMeSellers: [],
      };

    case TYPES.SETTINGS_SUCCESS:
      return {
        ...state,
        settings: payload?.settings?.payload,
      };

    case TYPES.BIOMETRIC_SUCCESS:
      return {
        ...state,
        isStatus: payload?.status,
      };

    case TYPES.PREVIOUS_SCREEN_SUCCESS:
      return {
        ...state,
        screenName: payload?.screenName,
      };
    case TYPES.GET_WALLET_USER_SUCCESS:
      return {
        ...state,
        walletProfile: payload?.getwalletuser,
      };
    case TYPES.USER_LOCATION_SUCCESS:
      return {
        ...state,
        userLocation: payload?.userLocation,
      };
    case TYPES.UPDATE_USER_LOCATION_SUCCESS:
      return {
        ...state,
        updateLocation: payload.updateLocation,
      };
    case TYPES.GET_USER_LOCATION_SUCCESS:
      return {
        ...state,
        getLocation: payload.getLocation.data,
      };
    case TYPES.SAVE_ADDRESS_SUCCESS:
      return {
        ...state,
        savedAddress: payload.savedAddress,
      };
    case TYPES.GET_SELLERS_SUCCESS:
      return {
        ...state,
        getSellersList: payload.getSellersList.payload.sellers.data,
      };
    case TYPES.GET_SELLERS_RESET:
      return {
        ...state,
        getSellersList: [],
      };
    case TYPES.GET_MANUFACTURERS_SUCCESS:
      return {
        ...state,
        getManufacturersList: payload.getManufacturersList.payload.sellers.data,
      };
    case TYPES.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        getUserProfile: payload.getUserProfile.payload,
      };
    case TYPES.UPDATE_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        updateUserSettings: payload.updateUserSettings.payload,
      };
    case TYPES.GET_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        getUserSettings: payload.getUserSettings,
      };

    case TYPES.SEND_CHAT_SUCCESS:
      return {
        ...state,
        sendChat: payload.sendChat,
      };
    case TYPES.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        getMessages: payload.getMessages?.payload,
      };
    case TYPES.GET_MESSAGES_RESET:
      return {
        ...state,
        getMessages: [],
      };
    case TYPES.DELETE_MESSAGES_SUCCESS:
      return {
        ...state,
        deleteMessages: payload.deleteMessages,
      };
    case TYPES.GET_ONE_MANUFACTURE_DETAILS_SUCCESS:
      return {
        ...state,
        getOneManufactureDetails: payload.getOneManufactureDetails,
      };
    case TYPES.GET_MESSAGES_HEADS_SUCCESS:
      return {
        ...state,
        getMessageHeads: payload?.getMessageHeads?.payload?.data,
      };
    case TYPES.PRODUCT_FAVOURITES_SUCCESS:
      return {
        ...state,
        productFavourites: payload.productFavourites,
      };
    case TYPES.SELLER_FAVOURITES_SUCCESS:
      return {
        ...state,
        sellerFavourites: payload.sellerFavourites,
      };
    case TYPES.GET_FAVOURITE_PRODUCTS_SUCCESS:
      return {
        ...state,
        getFavouriteProducts: payload.getFavouriteProducts,
      };
    case TYPES.GET_FAVOURITE_PRODUCTS_RESET:
      return {
        ...state,
        getFavouriteProducts: {},
      };

    case TYPES.GET_FAVOURITE_SELLERS_SUCCESS:
      return {
        ...state,
        getFavouriteSellers: payload.getFavouriteSellers?.data,
      };
    case TYPES.GET_FAVOURITE_SELLERS_RESET:
      return {
        ...state,
        getFavouriteSellers: [],
      };

    case TYPES.UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        uploadProfileImage: payload.uploadProfileImage,
      };
    case TYPES.GET_CATALOG_SUCCESS:
      return {
        ...state,
        getCatalogs: payload.getCatalogs?.payload?.data,
      };
    case TYPES.GET_CATALOG_RESET:
      return {
        ...state,
        getCatalogs: [],
      };
  }
};
