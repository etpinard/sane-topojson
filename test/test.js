/* global d3:false */

var saneTopojson = require('../');
var topojson = require('topojson');

describe('sane topojson general', () => {

    it('should have correct test environments', () => {
        expect(d3.version).toEqual('3.5.17');
        expect(Object.keys(saneTopojson)).toEqual([
            'world_110m',
            'world_50m',

            'africa_110m',
            'africa_50m',

            'asia_110m',
            'asia_50m',

            'europe_110m',
            'europe_50m',

            'north-america_110m',
            'north-america_50m',

            'south-america_110m',
            'south-america_50m',

            'usa_110m',
            'usa_50m'
        ]);
    });

});

describe('sane topojson with d3-geo & topojson', () => {

    var width = 960,
        height = 500;

    beforeEach(() => {
        this.svg = d3.select('body').append('svg');
    });

    afterEach(() => {
        document.body.removeChild(this.svg.node());
    });

    it('', () => {
        var projection = d3.geo.equirectangular()
            .scale(140)
            .translate([width / 2, height / 2])
            .precision(0.1);

        var path = d3.geo.path().projection(projection);

        var saneTopojsonItem = saneTopojson['world_110m'];

        var datum = topojson.feature(
            saneTopojsonItem,
            saneTopojsonItem.objects.land
        );

        this.svg.append('path')
            .datum(datum)
            .attr('d', path);

        expect(d3.selectAll('path').size()).toEqual(1);
        expect(d3.select('path').attr('d').length).toEqual(184040);
    });

});
