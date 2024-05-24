import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const CONSTANTS = {
  colors: {
    GRAY: '#808080',
    BLUE: '#0000FF',
    RED: '#FF0000',
    GREEN: '#00FF00',
    'SEA GREEN': '#2E8B57',
  },

  subscriptionText:
    'Help us reach you with the latest updates on our amazing products by providing us with your email.',

  phoneNumber: '919831317367',
  facebookID: 'https://facebook.com/Movestoneservicespvtltd',
  instagramID: 'https://instagram.com/movestoneevehicle',

  officeLocation: {
    headOffice:
      'Ground Floor, 24/1,Shop No. - 6, Shantikunj, Onkarmal Jatia Road, Howrah, West Bengal, 711103',

    corporateOffice:
      'Unit No- 01, 16th Floor, IMAGINE TECH PARK, Plot No – 6, Block- DP, Sector-V, Salt Lake, Kolkata- 700091',
    factory:
      'Unit No. - UTA0045,0044,0036,0035, Utsab Park, Bhagabatipur, Chatur Bhujkhati, Sankrail, Howrah, West Bengal, 711313',
  },

  vehicleConfig: {
    modules: [Navigation, Pagination],
    autoHeight: false,
    pagination: { clickable: true, dynamicBullets: true },
    centeredSlidesBounds: true,
    centeredSlides: false,
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.product-button-next',
          prevEl: '.product-button-prev',
        },
      },
      768: {
        slidesPerView: 2,
        navigation: {
          nextEl: '.product-button-next',
          prevEl: '.product-button-prev',
        },
      },
      991: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.product-button-next',
          prevEl: '.product-button-prev',
        },
      },
    },
  } as SwiperOptions,

  productFeatures: {
    battery: 'BATTERY',
    bodyDimension: 'BODY DIMENSION',
    breakType: 'BREAK TYPE',
    charger: 'CHARGER',
    controller: 'CONTROLLER',
    converter: 'CONVERTER',
    headLight: 'HEAD LIGHT',
    mileage: 'MILEAGE',
    motor: 'MOTOR',
    rim: 'RIM',
    roof: 'ROOF',
    seatingCapacity: 'SEATING CAPACITY',
    shocker: 'SHOCKER',
    sideCover: 'SIDE COVER',
    tyreDiameter: 'TYRE DIAMETER',
    tyreType: 'TYRE TYPE',
    weightWithoutBattery: 'WEIGHT WITHOUT BATTERY',
    wiper: 'WIPER',
  },
};
