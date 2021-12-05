let naam = document.getElementById('form_f0').value;
let y = document.getElementById('form_f1').value;
let z = document.getElementById('form_f2').value;


function truth() {
    /* let x = prompt("Whats your name?");*/
    let naam = document.getElementById('form_f0').value;
    document.getElementById('form_f0').innerHTML = 'Welcome ' + naam;
    console.log('tes active')
    textop(naam);
    numop(naam)
    console.log('name active')

};

function textop(namai) {
    console.log('name  in funt 2')
    let loa = namai;
    let y = document.getElementById('form_f1').value;
    console.log(y)
    console.log(`${loa}filled${y}`);
    alert('textop complete' + loa + 'filled  ' + y + '<--');
};

function numop(ekai) {
    let lod = ekai;
    console.log(lod + '  -->transfered');
    console.log('numop<--- active');
    let z = document.getElementById('form_f2').value;
    /*alert('numop complete' + lod + 'filled   ' + z + '<--');*/

}