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
    pagination: {
      clickable: true,
      dynamicBullets: false,
    },
    centeredSlidesBounds: true,
    centeredSlides: false,
    initialSlide: 0,
    slidesPerView: 2,
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

  bannerConfig: {
    modules: [Navigation],
    autoHeight: false,
    pagination: false,
    centeredSlidesBounds: false,
    centeredSlides: false,
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 1000,
    loop: true,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        navigation: {
          nextEl: '#carousel-right-button',
          prevEl: '#carousel-left-button',
        },
      },
      768: {
        slidesPerView: 1,
        navigation: {
          nextEl: '#carousel-right-button',
          prevEl: '#carousel-left-button',
        },
      },
      991: {
        slidesPerView: 1,
        navigation: {
          nextEl: '#carousel-right-button',
          prevEl: '#carousel-left-button',
        },
      },
    },
  } as SwiperOptions,

  productConfig: {
    autoHeight: false,
    pagination: false,
    centeredSlidesBounds: false,
    centeredSlides: false,
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 1000,
    loop: true,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
    },
  } as SwiperOptions,

  productFeatures: {
    camera: 'CAMERA',
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
    curtain: 'CURTAIN',
    fan: 'FAN',
    fireExtinguisher: 'FIRE EXTINGUISHER',
    fmSet: 'FM RADIO',
    fogLight: 'FOG LIGHT',
    footMat: 'FOOT MAT',
    jackHandleSet: 'JACKHANDLE SET',
    passengerHandle: 'PASSENGER HANDLE',
    rearShocker: 'REAR SHOCKER',
    sensorLock: 'SENSOR LOCK',
    sideLookingGlass: 'SIDE LOOKING GLASS',
    stepnyCover: 'STEPNY COVER',
    taxiLight: 'TAXI LIGHT',
    toolKit: 'TOOLKIT',
    seatingCapacity: 'SEATING CAPACITY',
    shocker: 'SHOCKER',
    sideCover: 'SIDE COVER',
    tyreDiameter: 'TYRE DIAMETER',
    tyreType: 'TYRE TYPE',
    weightWithoutBattery: 'WEIGHT WITHOUT BATTERY',
    wiper: 'WIPER',
  },

  ABOUT_US: [
    '“Move Stone” is a well known Brand of E-Rickshaw in India.',
    'The Company is manufacturing E-Rickshaw since Aug’2020.',
    'We are selling our products in West Bengal, Bihar, Assam, Tripura, Jharkhand, Uttar Pradesh, Chhattisgarh, Madhya Pradesh & Orissa, a part of mentioned states we are planning to supply shortly in Maharashtra & Rajasthan.',
    'We are an iCAT (International Centre for Automation Technology) approved E-rickshaw manufacturing company incorporated with the intention to address the robust growth potential of E-vehicle market in India.',
    'We are manufacturing E-Rickshaw and planning enter in Electric Two-wheeler segment in coming days.',
    'Our manufacturing unit is situated at Utsav Park, Bhagbatipur, Chatur Bhujkathi, Sankrail, Howrah- 711313.',
    'We have an experienced team of engineers for post sales service.',
    'Our vision is to accelerate the advent of sustainable development by making E-vehicles that are environment friendly in order to make world a better place to live in. Here at Move Stone we create world class electric mobility solutions for a greener and a healthier India',
    'Move Stone will lead the way to future of mobility, enriching lines around the world with the safest and most responsible ways of moving people by operating in a more organized way in E-vehicle industry by setting up proper manufacturing, assembling, distributing, services and delivery setups for utmost customer satisfaction',
    'Across India auto rickshaw make more than 250 million passenger trips per day. That number is expected to more than double to 482 million by 2031.The range runs from 15000 to 30000 vehicles in medium sized cities(population between 1 and 4 million)to more than 50,000 in large cities. At present Indian Ev industry is at its nascent stage although the country planned to be 100% electric by 2030.',
    'Electric-vehicle revolution is gaining ground in India as the drivers of the ubiquitous three-wheelers (E-rickshaw) weaving through crowded, smoggy streets discovered that E-rickshaw are quieter, faster, cleaner and  pocket friendly  to maintain than a traditional auto-rickshaw.',
    'Further E-rickshaw are less strenuous than cycle rickshaws, which require all day peddling. So with more rides possible in a day the E-rickshaw are proving more lucrative to market.',
  ],
};
