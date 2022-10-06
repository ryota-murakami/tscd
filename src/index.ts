interface Machine {
  name: string;
  price: number;
}

const computers: Machine[] = [
  { name: "hgt", price: 5738 },
  { name: "hoyu", price: 49834 },
  { name: "hoyfu", price: 498434 },
  { name: "hoyfu", price: 498434 },
  { name: "hoyfu", price: 498434 },
  { name: "hoyfu", price: 498434 },
  { name: "hoyfu", price: 498434 },
  { name: "hoyfu", price: 498434 },
];

const count = computers.length

const gtxComputers: Machine[] = []

if (count >= 4) {
    for(const {name, price}  of computers) {
        gtxComputers.push({name: `${name}GTX`, price: price * 3})
    }
}

console.log(gtxComputers)
