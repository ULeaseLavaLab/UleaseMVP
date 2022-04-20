import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    properties: {
      '21468602-daf2-4570-be5b-8f90ac60cc9c': {
        image: require('@/assets/property1.jpg'),
        title: '2-bed / 2-bath apartment unit in University Gateway',
        address: '3131 S. Hoover St., Los Angeles, CA 90089',
        distance: 0.2,
        tags: ['2 bed 2 bath', 'Free wifi', 'Furnished', 'Kitchen'],
        rent: 1180,
        lister: 'University Gateway',
        listerPic: require('@/assets/listings/gateway.png'),
        listDuration: '1 week',
        numListings: 3,
        rating: 4.32,
        numReviews: 103,
        roomOnly: false,
        sponsored: true,

        description: 'This 2-bedroom 2-bathroom apartment unit provides the privacy and amenities for four people with its close proximity to USC and a short five minute walk. This property is available as a full unit or as a shared or private room with a kitchen and living room. The unit is fully furnished with furniture including sofas, tables, and beds, as well as a T.V. in the living room. Gateway provides an extensive range of amenities to residents with study rooms, a pool, an outdoor courtyard, and a 24-hour fitness center.',
        layout: '2 bed / 2 bath',
        maxOccupants: 4,
        propertyType: 'Apartment complex',
        squareFootage: 985,
        amenities: ['Free wifi', 'Furnished', 'Kitchen', 'Study rooms', '24-hour fitness center', 'One package lockers', 'Outdoor amphitheater', 'Parking garage', 'Courtyard', 'TV', 'Gated community', '24-hour coffee bar'],
      },
      '6de95bf3-06dc-47ec-9578-bd57687735b6': {
        image: require('@/assets/property2.jpg'),
        title: '1-bed / 1-bath Spacious House on Menlo Avenue',
        address: '2723 Menlo Avenue, Los Angeles CA 90007',
        distance: 1.8,
        tags: ['Balcony/patio', 'Gated', 'Parking', 'Tile floors'],
        rent: 1200,
        lister: 'Mosaic Student Communities',
        listerPic: require('@/assets/listings/mosaic.png'),
        listDuration: '2 days',
        numListings: 236,
        rating: 4.32,
        numReviews: 103,
        roomOnly: false,
        sponsored: true,

        description: 'This 2-bedroom 2-bathroom apartment unit provides the privacy and amenities for four people with its close proximity to USC and a short five minute walk. This property is available as a full unit or as a shared or private room with a kitchen and living room. The unit is fully furnished with furniture including sofas, tables, and beds, as well as a T.V. in the living room. Gateway provides an extensive range of amenities to residents with study rooms, a pool, an outdoor courtyard, and a 24-hour fitness center.',
        layout: '2 bed / 2 bath',
        maxOccupants: 4,
        propertyType: 'Apartment complex',
        squareFootage: 985,
        amenities: ['Free wifi', 'Furnished', 'Kitchen', 'Study rooms', '24-hour fitness center', 'One package lockers', 'Outdoor amphitheater', 'Parking garage', 'Courtyard', 'TV', 'Gated community', '24-hour coffee bar'],
      },
      '1d9955ca-0354-48e7-a80d-46f393efa099': {
        image: require('@/assets/property3.jpg'),
        title: 'One bedroom summer sublease on Ellendale Street',
        address: 'Student-listed sublease on Ellendale street',
        distance: 0.4,
        tags: ['Roommate', 'Location', 'Furnished', 'Parking'],
        rent: 980,
        lister: 'Jose Holloway',
        listerPic: require('@/assets/listings/jose.jpg'),
        listDuration: '1 hour',
        numListings: 1,
        rating: 0,
        numReviews: 0,
        roomOnly: true,
        sponsored: false,

        description: 'This 2-bedroom 2-bathroom apartment unit provides the privacy and amenities for four people with its close proximity to USC and a short five minute walk. This property is available as a full unit or as a shared or private room with a kitchen and living room. The unit is fully furnished with furniture including sofas, tables, and beds, as well as a T.V. in the living room. Gateway provides an extensive range of amenities to residents with study rooms, a pool, an outdoor courtyard, and a 24-hour fitness center.',
        layout: '2 bed / 2 bath',
        maxOccupants: 4,
        propertyType: 'Apartment complex',
        squareFootage: 985,
        amenities: ['Free wifi', 'Furnished', 'Kitchen', 'Study rooms', '24-hour fitness center', 'One package lockers', 'Outdoor amphitheater', 'Parking garage', 'Courtyard', 'TV', 'Gated community', '24-hour coffee bar'],
      },
      '7beb5c1a-ecd4-4e43-a88d-618ef93f272b': {
        image: require('@/assets/property4.jpg'),
        title: '2-bed / 2-bath apartment unit in University Gateway',
        address: '1373 W 37th Dr, Los Angeles CA 90007',
        distance: 0.2,
        tags: ['2 bed 2 bath', 'Free wifi', 'Furnished', 'Kitchen'],
        rent: 1100,
        lister: 'TRIPALINK',
        listerPic: require('@/assets/listings/tripalink.png'),
        listDuration: '3 weeks',
        numListings: 90,
        rating: 4.0,
        numReviews: 283,
        roomOnly: false,
        sponsored: true,

        description: 'This 2-bedroom 2-bathroom apartment unit provides the privacy and amenities for four people with its close proximity to USC and a short five minute walk. This property is available as a full unit or as a shared or private room with a kitchen and living room. The unit is fully furnished with furniture including sofas, tables, and beds, as well as a T.V. in the living room. Gateway provides an extensive range of amenities to residents with study rooms, a pool, an outdoor courtyard, and a 24-hour fitness center.',
        layout: '2 bed / 2 bath',
        maxOccupants: 4,
        propertyType: 'Apartment complex',
        squareFootage: 985,
        amenities: ['Free wifi', 'Furnished', 'Kitchen', 'Study rooms', '24-hour fitness center', 'One package lockers', 'Outdoor amphitheater', 'Parking garage', 'Courtyard', 'TV', 'Gated community', '24-hour coffee bar'],
      },
      '56d33f2d-bd1d-4862-aafa-8d768f9e96c1': {
        image: require('@/assets/property5.jpg'),
        title: '1-bed / 1-bath Spacious House on Menlo Avenue',
        address: '2723 Menlo Avenue, Los Angeles CA 90007',
        distance: 1.8,
        tags: ['Balcony/patio', 'Gated', 'Parking', 'Tile floors'],
        rent: 880,
        lister: 'Mosaic Student Communities',
        listerPic: require('@/assets/listings/mosaic.png'),
        listDuration: '2 days',
        numListings: 236,
        rating: 4.32,
        numReviews: 103,
        roomOnly: false,
        sponsored: true,

        description: 'This 2-bedroom 2-bathroom apartment unit provides the privacy and amenities for four people with its close proximity to USC and a short five minute walk. This property is available as a full unit or as a shared or private room with a kitchen and living room. The unit is fully furnished with furniture including sofas, tables, and beds, as well as a T.V. in the living room. Gateway provides an extensive range of amenities to residents with study rooms, a pool, an outdoor courtyard, and a 24-hour fitness center.',
        layout: '2 bed / 2 bath',
        maxOccupants: 4,
        propertyType: 'Apartment complex',
        squareFootage: 985,
        amenities: ['Free wifi', 'Furnished', 'Kitchen', 'Study rooms', '24-hour fitness center', 'One package lockers', 'Outdoor amphitheater', 'Parking garage', 'Courtyard', 'TV', 'Gated community', '24-hour coffee bar'],
      },
    },
    reviews: [
      {
        name: 'Winston Tilton',
        pic: require('@/assets/reviews/1.png'),
        date: new Date(),
        leaseTerm: ['Fall 2021', 'Spring 2022'],
        text: 'Gateway’s location is what I would say one of the best in terms of being able to walk to campus every day without having to wake up super early or rush to class. I guess one downside is that whenever it’s a weekend night or a Friday night, my neighbors go wild and party too loud but I got a pair of ear plugs so I don’t have to...',
        helpfulCount: 4,
      },
      {
        name: 'Leah Nguyen',
        pic: require('@/assets/reviews/2.png'),
        date: new Date(),
        leaseTerm: ['Fall 2021', 'Spring 2022'],
        text: 'I like that Gateway comes furnished because I can save on furniture expenses and moving everything in. The T.V. in the living room is a plus but I don’t really use it LOL but I use the kitchen a lot to cook. The bedrooms are nicely sized so that my friends can sleep over sometimes but just don’t keep your expectation too high if you...',
        helpfulCount: 6,
      },
      {
        name: 'Ted Parker',
        pic: require('@/assets/reviews/3.png'),
        date: new Date(),
        leaseTerm: ['Fall 2021', 'Spring 2022'],
        text: 'I go to the fitness center every week and it’s convenient that it’s open 24-hours so it’s never really busy. I think Gateway’s amenities are pretty good and I go out to the courtyard to do any assignments and to get fresh air whenever I get bored inside my room so if you share the same study style, then I recommend using the faciliti...',
        helpfulCount: 3,
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
