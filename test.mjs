#!/usr/bin/env -S node --experimental-modules

import assert from 'assert';
import doorange from './index.mjs';

async function main() {
  {
    let found = await doorange.find('frozen', 'aged');
    if(found.length){
      found.map(i=>console.log(i.description))
    }
  }
  {
    let found = (await doorange.find('frozen', 'aged')).pop();
    assert.deepStrictEqual(found.swap, [ 'cold', 'old' ]);
  }
}

main();
