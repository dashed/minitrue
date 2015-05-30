const Immutable = require('immutable');
const { Iterable } = Immutable;
const Probe = require('probe');

const DummyMap = Immutable.Map();
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

    return new Probe(base.setIn(DATA_PATH, {
        previousMap: DummyMap,
        map: data
    }));
}

module.exports.Probe = Probe;
