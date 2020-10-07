/* function ortalama(a,b) // ortalama fonksiyonu oluşturma
{
    var ortalama; // ortalama değişkeni
    ortalama = (a+b) / 2; // ortalama tanımı
    console.log(ortalama); // sonucun çıktısı
}
// ortalama(5,5); // ortalama fonksiyonunun çağırılması

var myPc = new Object(); // obje oluşturma.
myPc.screenSize = '15.6"';
myPc.ram = "6 GB";
myPc.ssd = "256 GB";
console.log(myPc.ssd,",",myPc.ram,",",myPc.screenSize);

var myPc2 = // kısa yoldan obje oluşturma
{
    ram:"2 GB",
    ssd:"1 TB",
    test: function() {
        console.log(this); // this kullanımı. this yerine myPc2 de kullanabilirdik.
    },
    logRam: function() {
        console.log("bilgisayarın ram'i:"+" "+ this.ram); // this kullanımı. this.ram yerine myPc2.ram de kullanabilirdik.
    },
};
console.log(myPc2.ram,myPc2.ssd);
myPc2.test();
myPc2.logRam();
*/
var Pc = function(ram, ssd) // constructor.
{
    this.ram = ram;
    this.ssd = ssd;
}

var myPc = new Pc("4 GB", "128 GB");
var myPc2 = new Pc("6 GB", "256 GB");

console.log(myPc);

var anyDate = new Date(2020, 7, 18, 05, 15, 45); // zaman tanımlama.

console.log(anyDate.getHours()+":"+anyDate.getMinutes()); // zaman yazdırma.