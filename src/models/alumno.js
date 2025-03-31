export default class Alumno{
    constructor(username, DNI, edad){
        this.username=username;
        this.DNI=DNI;
        this.edad=edad
    }
    toString(){
        return "nombre "+this.username+" dni "+this.DNI+" edad "+this.edad
    }
}