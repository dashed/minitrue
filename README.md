# minitrue [![Build Status](https://travis-ci.org/Dashed/minitrue.svg?branch=master)](https://travis-ci.org/Dashed/minitrue)

> War is Peace
> 
> Freedom is Slavery
> 
> Ignorance is Strength
> 
> — **Ministry of Truth**

`minitrue` (Ministry of Truth) create `Probe` cursors that reference a single object reference containing an Immutable Map.

All created `Probe` cursors via another `Probe` cursor point to the same single source of truth.

Any two `Probe` cursors with the same keypath will point to the same value.

## Usage

```
$ npm install --save minitrue
```

### API

### `minitrue`

Create and return a `Probe` object with `data` as its unboxed root data.
If `data` is not an `Immutable` collection, it'll be converted into one via
`Immutable.fromJS(data)`.

```js

const truth = minitrue({
    'two plus two': {
        answer: 'five'
    }
});
```

### `Probe`

See [Probe API](https://github.com/Dashed/probe).

## FAQ

### WTF is minitrue?

 `minitrue`, otherwise known as the Ministry of Truth, is an organization in George Orwell's novel, *Nineteen Eighty-Four*, that manages propaganda within a region called Oceania.

Sources: 
- https://en.wikipedia.org/wiki/Ministry_of_Truth

## License

MIT
