const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://terranovacorp.com/wp-content/uploads/2016/02/IMG_5162.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://d1wu9upcrbzj56.cloudfront.net/images/distributors/lalaport_tokyo.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://sneakeractual.files.wordpress.com/2017/05/photo-8-5-17-1-15-14-pm-1.jpg?w=768',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://cdn3.f-cdn.com//files/download/55741282/886a0a.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://blog.reship.com/wp-content/uploads/2015/12/best-online-mens-clothing-stores.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        default:
            return state;
    }
};

export default directoryReducer;