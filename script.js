const usersList = [
    {
    name: "Andrea Moreno",
    numberID: 1234,
    password: "prueba1",
    userType: 1,
    },
    {
    name: "Jesus Montoya",
    numberID: 12345,
    password: "prueba12",
    userType: 2,
    }];

    let totalCount5000 = 0;
    let totalCount10000 = 0;
    let totalCount20000 = 0;
    let totalCount50000 = 0;
    let totalCount100000 = 0;

    let total5000 = 0;
    let total10000 = 0;
    let total20000 = 0;
    let total50000 = 0;
    let total100000 = 0;
    let totalUsuario = 0;


    let saldoUser;

    let entregaUser100, entregaUser50
    // let retirar = 0;
    
    let findUser = false;
    let automaticAth = []



    let userReply = parseInt(prompt('Bienvenido a tu cajero eletronico. Si aún no cuentas con tu cuenta en nuestros servicios por favor ingresa: \n1 registro \n2 Ingresar'));

    let finishCicle = 0;
    while (finishCicle === 0) {
    if (userReply === 1) {
    let newUsers = {
        name: prompt("Digite su nombre: "),
        numberID: prompt("Digite su numero de documento: "),
        password: prompt("Digite su contraseña: "),
        userType: parseInt(prompt("Digita 1 para Administrador o 2 para Cliente ")),
    };
    usersList.push(newUsers);
}

    if (userReply === 2) {
    let replyDocument = parseInt(prompt("Digite su numero de documento: "));
    let replyPassword = prompt("Digite su contraseña: ");
        for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].numberID === replyDocument && usersList[i].password === replyPassword) {
            if (usersList[i].userType === 1) {
            alert("El usuario existe y es administrador");
            findUser = true;
            totalCount100000 += parseInt(prompt("Digite cuantos billetes de 100000mil pesos que desea ingresar"))
            totalCount50000 += parseInt(prompt("Digite cuantos billetes de 50000mil que desea ingresar"))
            totalCount20000 += parseInt(prompt("Digite cuantos billetes de 20000mil que desea ingresar"))
            totalCount10000 += parseInt(prompt("Digite cuantos billetes de 10000mil que desea ingresar"))
            totalCount5000 += parseInt(prompt("Digite cuantos billetes de 5000mil desea ingresar"))
            
            automaticAth.push({100000:totalCount100000,50000:totalCount50000,20000:totalCount20000,10000: totalCount10000,5000: totalCount5000});
            total100000 += totalCount100000*100000
            total50000 += totalCount50000*50000
            total20000 += totalCount20000*20000
            total10000 += totalCount10000*10000
            total5000 += totalCount5000*5000
            totalUsuario = total100000+total50000+total20000+total10000+total5000
            
            alert(`La cantidad de billetes de $100mil fueron ${totalCount100000} y la suma de la denominacion es ${total100000}\n La cantidad de billetes de $50mil fueron ${totalCount50000} y la suma de la denominacion es ${total50000}\n La cantidad de billetes de $20mil fueron ${totalCount20000} y la suma de la denominacion es ${total20000}\n La cantidad de billetes de $10mil fueron ${totalCount10000} y la suma de la denominacion es ${total10000}\n La cantidad de billetes de $5mil fueron ${totalCount5000} y la suma de la denominacion es ${total5000}\n El cajero cuenta con un total de ${totalUsuario}`)
        } else if(totalUsuario>0) {
            alert("Es cliente");
            alert('Estas en la opcion de retirar')
            retirar = parseInt(prompt('Ingrese la cantidad que desee retirar')) //500.000
            if(totalUsuario>=retirar){
                alert(`Hay disponible ${totalCount100000} billetes de $100.000\n Hay disponible ${totalCount50000} billetes de $50.000\n Hay disponible ${totalCount20000} billetes de $20.000\n Hay disponible ${totalCount10000} billetes de $10.000\n Hay disponible ${totalCount5000} billetes de $5.000\n para un total de ${totalUsuario}`)

                // switch(automaticAth){
                //     case (totalUsuario<=retirar):
                //         let case1=parseInt(prompt(`digite la cantidad de billetes de $100.000 que desea retirar`))
                //         if(totalCount100000>=case1){
                //             let entregarUser = case1 * 100000
                //             alert(`te entrego la cantidad de ${entregarUser}`)
                //             alert(`Tengo disponible ${totalCount100000-case1} billetes de $100.000`)
                //             let saldoUser = totalUsuario-entregarUser
                //             break;
                //         }
                // }
                    automaticAth.forEach(cantBilletes => {  
                    if(retirar<=totalUsuario){
                        let case100=parseInt(prompt(`digite la cantidad de billetes de $100.000 que desea retirar`))
                        if(totalCount100000>=case100){
                             entregaUser100 = case100 * 100000
                            alert(`te entrego la cantidad de ${entregaUser100}`)
                            alert(`tengo disponible ${totalCount100000-case100} billetes de $100.000` )
                            saldoUser=retirar-entregaUser100
                            alert(`Saldo pendiente es de ${saldoUser}`)
                        } if(saldoUser<=retirar){
                            let case50=parseInt(prompt(`digite la cantidad de billetes de $50.000 que desea retirar`))
                            if(totalCount50000>=case50){
                                 entregaUser50= case50 * 50000
                            alert(`te entrego la cantidad de ${entregaUser50} `)
                            alert(`tengo disponible ${totalCount50000-case50} billetes de $50.000` )
                            saldoUser=retirar-entregaUser100-entregaUser50
                            console.log(saldoUser);
                            alert(`Saldo pendiente es de ${saldoUser}`) 
                            }
                        } 

                    } if(saldoUser<=0){
                        alert(`Gracias por usar nuestros servicios, el saldo a retirar es ${saldoUser}`)
                    }
                }); 
            }
            findUser = true;
            finishCicle = 1;
        }if(totalUsuario<=0){
            alert('Es cliente')
            alert('El cajero esta en mantenimiento')
            finishCicle = 1;
            findUser=true;
        }
    }
    
}
}
if(findUser===false) {
    alert("El usuario no existe.");
} }
    // console.log(automaticAth);

