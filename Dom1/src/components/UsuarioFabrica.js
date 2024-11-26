export function UsuarioFabrica(nombre,email,password){
    let _password=password;
    return {
        nombre,
        email,
            login(emailIntro, passwordIntro){
                if(emailIntro == this.email && _password == passwordIntro){
                    return `Bienvenido ${this.nombre}`;
                }else{
                    return "Error al ingresar las credenciales";
                }
            },

            actualizarEmail(newEmail){
                this.email = newEmail;
            },
        
            getInfo(){
                return `Usuario: `;
            },
    }
}