// 设置注册步骤
export const SET_SIGN_UP_SETP = (state, step) => {
  state.signUpStep = step;
};

// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, data) => {
  state.userInfo = data;
};

// 设置轮播(营销)图
export const SET_CAROUSELITEMS_INFO = (state, { carouselItems, activity }) => {
  state.marketing.CarouselItems = carouselItems;
  state.marketing.activity = activity;
};


// 设置商品列表(搜索)
export const SET_GOODS_LIST = (state, data) => {
  state.goodsList = data.goodsList;
  state.asItems = data.asItems;
};
