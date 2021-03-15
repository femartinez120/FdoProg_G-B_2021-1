var myArrayFrases = new Array();
function registrarFrase(){
    myArrayFrases.push(document.getElementById('frase').value);
    document.getElementById('frase').value='';
    document.getElementById('frase').focus();
    listadofrases();
    totalLetras();
}

function listadofrases(){
    var salida='';
    for(pos in myArrayFrases){
        salida+='<tr><td>'+ myArrayFrases[pos]+'</td><td>'+myArrayFrases[pos].length+'</td></tr>';
    }
    document.getElementById('cuerpo').innerHTML=salida;
}
function totalLetras(){
    var sumaLetras=0;
    for( i in myArrayFrases)
     sumaLetras+= myArrayFrases[i].length;
     document.getElementById('valor').innerHTML=sumaLetras;
}