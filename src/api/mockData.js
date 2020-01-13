/* eslint-disable max-len */
export function getRestaurantData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      data: [
        {
          name: 'nandos',
          id: 0,
          images: [
            '/img/nandos/butterflybreasts.jpg',
            '/img/nandos/nandos-1980-1920x1080.jpg',
            '/img/nandos/nandos-mobile.jpg',
            '/img/nandos/nandos4.jpg',
            '/img/nandos/perperi.jpg',
            '/img/nandos/Portuguese-BBQ-Peri-Peri-Chicken-39.jpg',
          ],
          location: 'The Waterfront',
          titleDecription: 'The PERi-PERi Story',
          description: 'South African flavour with a Portuguese twist. The folks down at Nando’s have been firing up meal time since their very first restaurant in 1987. It’s been a long road from humble beginnings, but Britain’s favourite PERi-PERi restaurant shows no sign of slowing down. With over 400 chicken joints in with UK, the journey for Nando’s is nowhere near completion.',
          waitTime: '20-40 mins',
          price: 2,
          tags: [
            'Grilled chicken',
            'Trendy',
            'Portugese',
            'Spicy',
          ],
          rating: 4.5,
        },
        {
          name: 'cosmos',
          id: 1,
          images: [
            '/img/cosmos/Cosmo-8649.jpg',
            '/img/cosmos/cosmo-reading-020.jpg',
            '/img/cosmos/Cosmo-Restaurant-Glasgow_FoSho-64.jpg',
            '/img/cosmos/DSC_1351.jpg',
          ],
          location: 'Seaside Rd',
          titleDecription: 'ULTIMATE WORLD BUFFET',
          description: 'At COSMO, we don’t think you should have to choose between your favourite cuisines; for one fixed price, experience our eight live cooking stations and take your pick from 150 dishes.',
          waitTime: '15-20 mins',
          price: 1,
          tags: [
            'Oriental',
            'Buffet',
            'Spicy',
          ],
          rating: 4.5,
        },
        {
          name: 'dominos',
          id: 2,
          images: [
            '/img/dominos/17c847d05d318b7460fd2f3035f71a74.png',
            '/img/dominos/1080_web.png',
            '/img/dominos/dominos-offering-50-percent-pizza-deal-through-july-21.jpg',
            '/img/dominos/Dominos-Pizza.jpg',
          ],
          location: 'St George\'s Plaza',
          titleDecription: 'Making pizza since 1960...',
          description: 'Founded in 1960, Domino\'s is the recognized world leader in pizza delivery operating a network of company-owned and franchise-owned stores in the United States and international markets. Domino\'s is a company of exceptional people on a mission to be the best pizza delivery company in the world. To learn more about Domino\'s, please use the links below or select from the "About Domino\'s" drop-down menu near the top of the page.',
          waitTime: '20-30 mins',
          price: 2,
          tags: [
            'Pizza',
            'Cheesy',
            'Family sized',
            'Doughy',
            'Italian',
          ],
          rating: 4,
        },
        {
          name: 'burrito mama',
          id: 3,
          images: [
            '/img/burrito-mama/slider-burritomama1.jpg',
            '/img/burrito-mama/slider-pot1.jpg',
            '/img/burrito-mama/slider-sides1.jpg',
          ],
          location: 'New Change',
          titleDecription: 'Tex-Mex Goodness',
          description: 'With years of experience stuffing flour tortillas with mouth-watering and responsibly sourced ingredients, the team have an amazing selection of burritos, pots and salads available with a variety of tasty fillings. ',
          waitTime: '25-40 mins',
          price: 2,
          tags: [
            'Burrito',
            'Mexican',
            'Spicy',
          ],
          rating: 3.5,
        },
        {
          name: 'papa johns',
          id: 4,
          images: [
            '/img/papa-johns/0_PAPA_JOHNS_MARMITE-SCROLLS3.jpg',
            '/img/papa-johns/papa-johns-making-peace-with-founder.jpg',
            '/img/papa-johns/raster-static.postmates.com.jpg',
            '/img/papa-johns/s3-news-tmp-127306-screen_shot_2019-03-29_at_6.33.50_am--default--1280.png',
          ],
          location: 'Lewes Rd',
          titleDecription: 'The Papa John\'s story',
          description: 'The secret to success is much like the secret to making a better pizza - the more you put into it, the more you get out of it. Our pizza family is as hungry for perfection today as we were when we first opened our doors more than 30 years ago. And we\'re driven to be the best at making innovative new products and recipes.',
          waitTime: '10-25 mins',
          price: 2,
          tags: [
            'Pizza',
            'Cheesy',
            'Family sized',
            'Doughy',
            'Italian',
          ],
          rating: 4,
        },
      ],
    }), 1500);
  });
}

export default getRestaurantData;
