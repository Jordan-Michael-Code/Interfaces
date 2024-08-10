interface Usuario {
    nombreUsuario: string;
    password: string;
    confirmarPassword?: string;
  }
  
  let usuario: Usuario = {
    nombreUsuario: 'Jordan Michael',
    password: '1234',
    confirmarPassword: '1234'
  }
  
  console.log(usuario);
  console.log(usuario.confirmarPassword);

  interface Abordar {
    abordarTransporte():void;
  }

  let avion:Abordar ={
    abordarTransporte: function (){
        console.log('Abordando');
    }
}

avion.abordarTransporte();
