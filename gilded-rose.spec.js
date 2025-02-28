import { expect, describe, it } from "vitest";
// import { Item, items, updateQuality } from "./gilded-rose.js";
import {
  Item,
  items,
  BaseItem,
  Aged_Brie,
  Sulfuras,
  Backstage,
  ConjuredCake,
} from "./gilded-rose.js";
//console.log(items);
//---------TESTS ARE ALL COMMENTED OUT, JUST UNCOMMENT ONE AND RUN-------//

// describe("updateQuality", () => {
//   it("reduces quality and sellIn of basic items by 1", () => {
//     const testItem = new BaseItem("basic", 5, 3);
//     items.push(testItem);

//     testItem.updateQuality();

//     expect(testItem.quality).toBe(2);
//     expect(testItem.sellIn).toBe(4);
//   });
// });

// describe("updateQuality", () => {
//   it("reduces quality and sellIn of basic items by 1", () => {
//     const testItem = new BaseItem("basic", 1, 1);
//     items.push(testItem);

//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(-2);
//     expect(testItem.quality).toBe(0);
//   });
// });

//-------------------------Dexterity Vest-----------------------------------//
// describe("DexterityVestQuality", () => {
//   it("reduces quality and sellIn of +5 Dexterity Vest by 1", () => {
//     const testItem = items[0]; //+5 Dexterity Vest
//     // items.push(testItem);

//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(9);
//     expect(testItem.quality).toBe(19);
//   });
// });

// describe("DexterityVestQuality", () => {
//   it("reduces quality by 13 and sellIn of +5 Dexterity Vest by 12", () => {
//     const testItem = items[0]; //+5 Dexterity Vest
//     // items.push(testItem);
//     for (let i = 0; i < 12; i++) {
//       testItem.updateQuality();
//     }

//     expect(testItem.sellIn).toBe(-2);
//     expect(testItem.quality).toBe(7);
//   });
// });

//--------------------------------Aged Brie------------------------------//

// describe("BrieQuality", () => {
//   it("reduces sellIn of Aged Brie by 1 and increases quality of Aged Brie by 1", () => {
//     const testItem = items[2]; //Aged Brie
//     // items.push(testItem);

//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(1);
//     expect(testItem.quality).toBe(1);
//   });
// });

// describe("BrieQuality2", () => {
//   it("reduces sellIn of Aged Brie by 3 and increases quality of Aged Brie by 3", () => {
//     const testItem = items[2]; //Aged Brie
//     // items.push(testItem);

//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(-1);
//     expect(testItem.quality).toBe(3);
//   });
// });

// describe("BrieQuality3", () => {
//   it("reduces sellIn of Aged Brie by 26 (to -24) and increases quality of Aged Brie to 49", () => {
//     const testItem = items[2]; //Aged Brie
//     // items.push(testItem);
//     for (let i = 0; i < 26; i++) {
//       testItem.updateQuality();
//     }

//     expect(testItem.sellIn).toBe(-24);
//     expect(testItem.quality).toBe(49);
//   });
// });

// describe("BrieQuality4", () => {
//   it("reduces sellIn of Aged Brie by 52 and increases quality of Aged Brie to only 50", () => {
//     const testItem = items[2]; //Aged Brie
//     // items.push(testItem);
//     for (let i = 0; i < 52; i++) {
//       testItem.updateQuality();
//     }

//     expect(testItem.sellIn).toBe(-50);
//     expect(testItem.quality).toBe(50);
//   });
// });

//---------------------------------Elixir----------------------------//
// describe("ElixirQuality", () => {
//   it("reduces quality and sellIn of Elixir of the Mongoose by 1", () => {
//     const testItem = items[1]; //Elixir of the Mongoose
//     // items.push(testItem);

//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(4);
//     expect(testItem.quality).toBe(6);
//   });
// });

// describe("ElixirQuality", () => {
//   it("reduces quality to 0 and sellIn of Elixir of the Mongoose by 7", () => {
//     const testItem = items[1]; //Elixir of the Mongoose
//     // items.push(testItem);

//     for (let i = 0; i < 7; i++) {
//       testItem.updateQuality();
//     }

//     expect(testItem.sellIn).toBe(-2);
//     expect(testItem.quality).toBe(0);
//   });
// });

//-------------------------------Sulfuras, hand of Ragnaros-----------------//
// describe("SulfurasQuality", () => {
//   it("keeps sellIn and quality of Sulfuras, hand of Ragnaros at exactly 0 and 80", () => {
//     const testItem = items[3]; //Sulfuras, hand of Ragnaros
//     // items.push(testItem);

//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(0);
//     expect(testItem.quality).toBe(80);
//   });
// });

//----------------------------------Backstage passes----------------------------//
// describe("BackstagePassesQuality1", () => {
//   it("Backstage passes to a TAFKAL80ETC concert: increases quality by 1 (as long as sellIn is above 10) and decreases sellIn by 1", () => {
//     const testItem = items[4]; //Backstage passes to a TAFKAL80ETC concert
//     // items.push(testItem);

//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(14);
//     expect(testItem.quality).toBe(21);
//   });
// });

// describe("BackstagePassesQuality2", () => {
//   it("Backstage passes to a TAFKAL80ETC concert: increases quality by 7 (5+2) and decreases sellIn by 6", () => {
//     const testItem = items[4]; //Backstage passes to a TAFKAL80ETC concert
//     // items.push(testItem);

//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(9);
//     expect(testItem.quality).toBe(27);
//   });
// });

// describe("BackstagePassesQuality3", () => {
//   it("Backstage passes to a TAFKAL80ETC concert: 12 days pass, increases quality to 41 and decreases sellIn to 3", () => {
//     const testItem = items[4]; //Backstage passes to a TAFKAL80ETC concert
//     // items.push(testItem);

//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(3);
//     expect(testItem.quality).toBe(41);
//   });
// });

// describe("BackstagePassesQuality4", () => {
//   it("Backstage passes to a TAFKAL80ETC concert: 16 days pass, decreases quality to 0 and decreases sellIn to -1", () => {
//     const testItem = items[4]; //Backstage passes to a TAFKAL80ETC concert
//     // items.push(testItem);

//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(-1);
//     expect(testItem.quality).toBe(0);
//   });
// });

//-----------------------------------Conjured Mana Cake--------------------------//
//console.log(items[5]);
// describe("ManaCakeQuality", () => {
//   it("reduces sellin by 1 and quality of Conjured Mana Cake by 2", () => {
//     const testItem = items[5]; //Conjured Mana Cake
//     // items.push(testItem);

//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(2);
//     expect(testItem.quality).toBe(4);
//   });
// });

// describe("ManaCakeQuality", () => {
//   it("reduces sellin by 2 and quality of Conjured Mana Cake by 4", () => {
//     const testItem = items[5]; //Conjured Mana Cake
//     // items.push(testItem);

//     testItem.updateQuality();
//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(1);
//     expect(testItem.quality).toBe(2);
//   });
// });

// describe("ManaCakeQuality", () => {
//   it("reduces sellin by 3 and quality of Conjured Mana Cake by 6", () => {
//     const testItem = items[5]; //Conjured Mana Cake
//     // items.push(testItem);

//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(0);
//     expect(testItem.quality).toBe(0);
//   });
// });

// describe("ManaCakeQuality", () => {
//   it("reduces sellin by 4 and quality of Conjured Mana Cake to only 0", () => {
//     const testItem = items[5]; //Conjured Mana Cake
//     // items.push(testItem);

//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();
//     testItem.updateQuality();

//     expect(testItem.sellIn).toBe(-1);
//     expect(testItem.quality).toBe(0);
//   });
// });
