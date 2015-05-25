const Immutable = require('immutable');
const { Iterable } = Immutable;

const Probe = require('probe');

// sentinel value
const NOT_SET = {};

const DATA_PATH = ['root', 'data'];

// this is amalgamated to become the input options of a newly instantiated
// Probe object
const base = Immutable.fromJS({
    root: {
        unbox: function(m) {
            return m.map;
        },
        box: function(newRoot, m) {
            m.previousMap = m.map;
            m.map = newRoot;
            return m;
        }
    }
});

function ExtendedProbe() {
    Probe.apply(this, arguments);
}

ExtendedProbe.prototype = Object.create(Probe.prototype);

ExtendedProbe.prototype.constructor = ExtendedProbe;

/**
 * Returns a Probe cursor with the previous unboxed root data as the current.
 *
 * @return {ExtendedProbe}
 */
ExtendedProbe.prototype.prev = function() {
    const options = this.options();
    const boxed = options.getIn(DATA_PATH);

    const previousMap = boxed.previousMap;

    if(previousMap === NOT_SET) {
        return this;
    }

    const newOptions = options.setIn(DATA_PATH, {
        previousMap: NOT_SET,
        map: previousMap
    });

    return new ExtendedProbe(newOptions, true, true);
}

/**
 * Creates a Probe object with `data` as its unboxed root data.
 * If `data` is not an Immutable collection, it'll be converted into one via
 * Immutable.fromJS(data).
 *
 * @param  {Object | Immutable.Iterable } data
 * @return {Probe}
 */
module.exports = function minitrue(data =  {}) {

    if(!Iterable.isIterable(data)) {
        data = Immutable.fromJS(data);
    }

    return new ExtendedProbe(base.setIn(DATA_PATH, {
        previousMap: NOT_SET,
        map: data
    }));
}

module.exports.Probe = Probe;
