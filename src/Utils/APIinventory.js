export const USER_URL = "https://apiuserservice.jobr.com/api/v1/";
// export const SUPPORT_URL = 'https://apisupport.jobr.com/api/v1/';
export const ORDER_URL = "https://apiorder.jobr.com:8004/api/v1/";
export const PRODUCT_URL = "https://apiproductmgmt.jobr.com/api/v1/";

export const ApiUserInventory = {};

export const ApiProductInventory = {
  getCategory: "categories/get-all/category",
  getProduct: (categoryId) =>
    `products/category/get-all/${categoryId}?page=1&limit=10`,
};

// export const ApiSupportInventory = {

// }

export const ApiOrderInventory = {};
