// // Js 1
// var jmlAngkot = 10;
// for (var noAngkot = 1; noAngkot<=jmlAngkot; noAngkot++){
//     if (noAngkot <=6){
//         console.log('Angkot No.' +noAngkot + ' sedang beroperasi ')
//     }
//     else if (noAngkot === 8){
//         console.log('Angkot No.' +noAngkot + ' sedang lembur ');
//     }
//     else{
//         console.log('Angkot No.' +noAngkot+ ' sedang tidak beroperasi ');
//     }
// }

// js 2

var jmlAngkot = 10;
for (var noAngkot = 1; noAngkot<=jmlAngkot; noAngkot++){
    if (noAngkot <=6 && noAngkot !=5){
        console.log('Angkot No.' +noAngkot + ' sedang beroperasi ')
    }
    
    else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log('Angkot No.' +noAngkot + ' sedang lembur ');
    }
    else{
        console.log('Angkot No.' +noAngkot+ ' sedang tidak beroperasi ');
    }
}
