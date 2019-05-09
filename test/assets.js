var ITEM_WITH_NO_SUBUNITS = [
    'africa_110m', 'africa_50m',
    'asia_110m', 'asia_50m',
    'europe_110m', 'europe_50m',
    'south-america_110m'
];

var GEOMETRY_COUNT = {
    'world_110m': {
        'coastlines': 134,
        'land': 127,
        'ocean': 2,
        'lakes': 25,
        'rivers': 14,
        'countries': 177,
        'subunits': 51
    },
    'world_50m': {
        'coastlines': 1428,
        'land': 1420,
        'ocean': 1,
        'lakes': 398,
        'rivers': 460,
        'countries': 241,
        'subunits': 100
    },
    'africa_110m': {
        'coastlines': 11,
        'land': 2,
        'ocean': 2,
        'lakes': 4,
        'rivers': 3,
        'countries': 51,
        'subunits': 0
    },
    'africa_50m': {
        'coastlines': 147,
        'land': 36,
        'ocean': 1,
        'lakes': 22,
        'rivers': 126,
        'countries': 54,
        'subunits': 0
    },
    'asia_110m': {
        'coastlines': 65,
        'land': 28,
        'ocean': 2,
        'lakes': 2,
        'rivers': 9,
        'countries': 47,
        'subunits': 0
    },
    'asia_50m': {
        'coastlines': 729,
        'land': 331,
        'ocean': 1,
        'lakes': 72,
        'rivers': 255,
        'countries': 53,
        'subunits': 0
    },
    'europe_110m': {
        'coastlines': 19,
        'land': 14,
        'ocean': 2,
        'lakes': 3,
        'rivers': 3,
        'countries': 39,
        'subunits': 0
    },
    'europe_50m': {
        'coastlines': 263,
        'land': 210,
        'ocean': 1,
        'lakes': 67,
        'rivers': 137,
        'countries': 50,
        'subunits': 0
    },
    'north-america_110m': {
        'coastlines': 53,
        'land': 47,
        'ocean': 1,
        'lakes': 14,
        'rivers': 4,
        'countries': 18,
        'subunits': 51
    },
    'north-america_50m': {
        'coastlines': 375,
        'land': 346,
        'ocean': 1,
        'lakes': 191,
        'rivers': 129,
        'countries': 38,
        'subunits': 64
    },
    'south-america_110m': {
        'coastlines': 14,
        'land': 3,
        'ocean': 1,
        'lakes': 1,
        'rivers': 2,
        'countries': 13,
        'subunits': 0
    },
    'south-america_50m': {
        'coastlines': 174,
        'land': 67,
        'ocean': 1,
        'lakes': 16,
        'rivers': 53,
        'countries': 13,
        'subunits': 27
    },
    'usa_110m': {
        'coastlines': 53,
        'land': 9,
        'ocean': 1,
        'lakes': 7,
        'rivers': 1,
        'countries': 1,
        'subunits': 51
    },
    'usa_50m': {
        'coastlines': 372,
        'land': 120,
        'ocean': 1,
        'lakes': 77,
        'rivers': 66,
        'countries': 1,
        'subunits': 58
    }
};

var COUNTRIES_CNT = {
    'world_110m': 174,
    'world_50m': 235,
    'africa_110m': 50,
    'africa_50m': 53,
    'asia_110m': 46,
    'asia_50m': 50,
    'europe_110m': 38,
    'europe_50m': 49,
    // N.B. north-america scopes do not trim out Caribbean countries
    'north-america_110m': 18,
    'north-america_50m': 38,
    'south-america_110m': 13,
    'south-america_50m': 13,
    'usa_110m': 1,
    'usa_50m': 1
};

var SUBUNITS_CNT = {
    'world_110m': 51,
    'world_50m': 100, // states/provinces from US, Canada, Australia, Brazil
    'africa_110m': 0,
    'africa_50m': 0,
    'asia_110m': 0,
    'asia_50m': 0,
    'europe_110m': 0,
    'europe_50m': 0,
    'north-america_110m': 51,
    'north-america_50m': 64,
    'south-america_110m': 0,
    'south-america_50m': 27,
    'usa_110m': 51,
    'usa_50m': 58   // ['BC', 'MB', 'NB', 'ON', 'QC', 'SK', 'YT'] show up here for some reason
};

module.exports = {
    ITEM_WITH_NO_SUBUNITS: ITEM_WITH_NO_SUBUNITS,
    GEOMETRY_COUNT: GEOMETRY_COUNT,
    COUNTRIES_CNT: COUNTRIES_CNT,
    SUBUNITS_CNT: SUBUNITS_CNT
};
