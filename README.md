# Doorange

Find rhyming words and synonyms - a lyricist's best friend.

## Description

Doorange is a powerful tool for songwriters and rappers, offering rhyme suggestions and synonym swaps to enhance your lyrical creativity. Named after the classic "orange" rhyming challenge, Doorange proves that with the right tools, you can find a rhyme for anything.

## Reference

/dɔːrˈɪndʒ/ 
noun: a clever solution to the "nothing rhymes with orange" problem; 
usage: "Orange" rhymes with "door hinge" when pronounced creatively.

## Installation

```sh
npm i doorange
```

## Usage

```JavaScript
import doorange from 'doorange';
await doorange.find('vision', 'mission');
```

```JSON
[
  {
    "word": [
      "vision",
      "mission"
    ],
    "swap": [
      "sight",
      "plight"
    ],
    "description": "vision/mission: Instead of vision use sight, instead of mission use plight. Then rhyme sight with plight."
  }
]
```

## Features

- Find rhyming synonyms for word pairs
- Generate random rhyming words
- Theme-based rhyme suggestions
- Perfect for lyric writing and rap battles

## Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

MIT

## Acknowledgements

This project was inspired by and forked from the original "cowpea" package. We've expanded its functionality to better serve the needs of modern songwriters and rappers.
