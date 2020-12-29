export const loadCarouselItems = ({ commit }) => {
    return new Promise((resolve, reject) => {
      const data = {
        carouselItems: [
          'assets/img/goods/1.jpg',
          'assets/img/goods/5.jpg',
          'assets/img/goods/6.jpg',
          'assets/img/goods/7.jpg',
          'assets/img/goods/8.jpg'
        ],
        activity: [
            'assets/img/goods/9.jpg',
            'assets/img/goods/10.jpg'
        ]
      };
      commit('SET_CAROUSELITEMS_INFO', data);
    });
  };
  