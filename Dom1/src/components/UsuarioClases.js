export class UsuarioClases {
    #password;
    constructor(nombre,email,password){
        this.nombre = nombre;
        this.email = email;´
        this.#password = password;
    }
    
    //metodos publicos --------------------------------
    login = function(emailIntro, passwordIntro){
        if(emailIntro == this.email && _password == passwordIntro){
            return `Bienvenido ${this.nombre}`;
        }else{
            return "Error al ingresar las credenciales";
        }
    }

    actualizarEmail = function(newEmail){
        this.email = newEmail;
    }

    getInfo = function(){
        return `Usuario: `;
    }
}