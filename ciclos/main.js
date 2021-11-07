// ---Pedir numero medioante prompt y sumarle otro numero ne cada repetieidno realizando una salida por cada reusltado.


if (confirm("ingrese tarjeta")) {
    let isPasswordOk = false;
   for (let i = 1; i <=3 ; i++){
    let userPass = prompt("ingrese contraseña - Intento: " + i);

    if(userPass === "111"){
        isPasswordOk = true;
        break;
    }
 }
   if(isPasswordOk) {
       alert("contraseña correcta");
       console.log("contraseña correcta:111");
   }  else{
       alert("me quedo con tu tarjeta");
       console.log("contraseña Incorrecta.")
   }
 }