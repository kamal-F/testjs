/**
 * http://usejsdoc.org/
 */
//constructor
var coba = function(bil1, bil2){
	this.bil1 = bil1;
	this.bil2 = bil2;
}

//prototype
coba.prototype = {
		bil1kurang2: function(){return this.bil1 -2},
		bil1tambahsesuatu: function(prm1, obj1){
			obj1(this.bil1 + prm1);
		},
		bil2tambah2: function(obj2){
			 obj2(this.bil2 + 2);
			 
			 //scope!!
			 var angka1 = this.bil1;
			 var angka2 = this.bil2;
			 
			 return function(prm1){
				 return angka1 + prm1 + angka2;
			 };
		}
}

var ok = new coba(13, 11);
//test 1
console.log(ok.bil1kurang2());

//test 2 callback, hati2 nested scope (cakupannya)
ok.bil1tambahsesuatu(45, function(xx,yy){console.log(xx)});
//prm1 =45
//obj1 = anonymous function, function(prm1, obj1){
//obj1(this.bil1 + prm1);
//}

//test 3 callback, return function, scope
console.log(ok.bil2tambah2(function(aa){alert(aa)})(' <ok> '));