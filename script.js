// task1//Product class olacaq.Name price count gələcək.
// Ve ayri bir funksiya olacaq ki bu funksiya total Price hesablayacaq.
// Və bu yaranan productlari bu funksiyaya gondərdiyimdə mənə total price console cixardacaq.
// Məsələn: 2 kofe 0.50 azn , 3 çay 4azn , 2 fanta 2azn    
// totalPrice=2*0.50+3*4+2*2 = 17Azn consoleda görsənəcək.

class Product {
 constructor(ad, qiymet, say) {
      this.name = ad;
      this.price = qiymet;
      this.count = say;
    }
    static TotalPrice(kofe, cay, fanta) {
      let summa =
     kofe.count * kofe.price +cay.count * cay.price +fanta.count * fanta.price;
      return summa;
    }
  }
  const kofe = new Product("kofe", 0.5, 2);
  const cay = new Product("cay", 4, 3);
  const fanta = new Product("fanta", 2, 2);
  console.log(Product.TotalPrice(kofe, cay, fanta));


//   task2///
// Elə bir metod yazın ki parametr olaraq ancaq array qebul etsin (Array.isArray()).
// Və consolda arrayın ən kiçik elementini qaytarsın

let arr=[12,5,9,10,7]
function findminnum(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        let minnum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].length < minnum.length) {
                minnum = arr[i];
            }
        }
        console.log(minnum);
       
    } else {
        console.log("parametr olaraq ancaq array qebul etsin!!!");
    }
}

findminnum(arr);



// task3//
// Elə bir metod yazın ki parametr olaraq ancaq array qebul etsin (Array.isArray()).Və consolda arrayın ən kiçik elementini qaytarsın3) 
// Animal adında  class yaradın. butun heyvanlarin ortaq özəlliklərin burda tutacaqsız.
//      3.1 Default olaraq Eat() metodu yaradın.
//      3.2 Daha sonra Walk() metodu yaradın.
//      3.3 GetInfo() metodu yaradın.
//      3.4 Animal-dan törəyən Bird klass-ı yaradın.

class Animal {
  constructor( name,type, voice) {
    this.name = name;
    this.type = type;
    this.voice = voice;
  }
  Eat() {
    return `${this.name}`;
  }
  Walk() {
    return `${this.type} `;
  }
  GetInfo() {
    return `${this.name} ${this.type} ${this.voice}`;
  }
}
class Bird extends Animal {
  constructor(name, type, voice) {
    super(name, type);
    this.voice = voice;
  }
}
const bird1 = new Bird("qarga", "qus","qar-qar");
console.log(bird1.Eat());
console.log(bird1.Walk());
console.log(bird1.GetInfo());