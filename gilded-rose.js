export let items = [];

//--------------------Items super class (untouchable)--------------------//
export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

//--------------------BaseItems class--------------------//
export class BaseItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality <= 0) {
      this.sellIn--;
      this.quality = 0;
    } else if (this.sellIn >= 0) {
      this.sellIn--;
      this.quality--;
    } else if (this.sellIn < 0 && this.quality > 1) {
      this.sellIn--;
      this.quality -= 2;
    } else if (this.sellIn < 0 && this.quality <= 1) {
      this.sellIn--;
      this.quality = 0;
    }
  }
}
items.push(new BaseItem("+5 Dexterity Vest", 10, 20));
items.push(new BaseItem("Elixir of the Mongoose", 5, 7));

//---------------------Aged_Brie class----------------------//
export class Aged_Brie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  //some function
  updateQuality() {
    if (this.quality < 50) {
      if (this.sellIn >= 0) {
        this.sellIn--;
        this.quality++;
      } else if (this.sellIn < 0) {
        this.sellIn--;
        this.quality += 2;
      }
    } else {
      this.sellIn--;
      this.quality = 50;
    }
  }
}

items.push(new Aged_Brie("Aged Brie", 2, 0));

//----------------------Sulfuras class-----------------------//
export class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  //some function
  updateQuality() {
    //does nothing
  }
}
items.push(new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80));

//----------------------Backstage passes class----------------//
export class Backstage extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  //some function
  updateQuality() {
    if (this.sellIn > 10) {
      this.sellIn--;
      this.quality++;
    } else if (this.sellIn > 5 && this.sellIn <= 10) {
      this.sellIn--;
      this.quality += 2;
    } else if (this.sellIn > 0 && this.sellIn <= 5) {
      this.sellIn--;
      this.quality += 3;
    } else {
      this.sellIn--;
      this.quality = 0;
    }
  }
}
items.push(new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 20));

//-----------------------Conjured Mana class-------------------//
export class ConjuredCake extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  //some function
  updateQuality() {
    if (this.sellIn >= 0) {
      this.sellIn--;
      this.quality -= 2;
    } else if (this.sellIn < 0) {
      this.sellIn--;
      this.quality -= 4;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}
items.push(new ConjuredCake("Conjured Mana Cake", 3, 6));

// console.log(items);
// console.log(items[0]);

// export const updateQuality = () => {
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };
