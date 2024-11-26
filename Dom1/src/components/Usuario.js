export function Usuario(nombre, email, password){
    this.nombre=nombre;
    this.email=email;
    let _password=password;

    //metodos publicos--------------------------------
    this.login = function(emailIntro, passwordIntro){
        if(emailIntro == this.email && _password == passwordIntro){
            return `Bienvenido ${this.nombre}`;
        }else{
            return "Error al ingresar las credenciales";
        }
    }

    this.actualizarEmail = function(newEmail){
        this.email = newEmail;
    }

    this.getInfo = function(){
        return `Usuario: `;gegagedigedagedago
    }

}