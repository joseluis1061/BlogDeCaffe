class Student{
    //Define la plantilla general
    constructor({
        name,
        user,
        email,
        twitter=undefined,
        facebook=undefined,
        instagram=undefined,
        aprovedCourses = [],
        learningPaths = []
    })
    //Define los valores particulares para un objeto al crearlo
    {
        this.name=name;
        this.user=user;
        this.email = email;
        this.social = {
            facebook: facebook,
            twitter,
            instagram
        };
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;
        //Métodos o funciones del objeto
        this.llenarCurso = function(nuevoCurso){
            this.aprovedCourses.push(nuevoCurso);
        }
    }
}

//Creando las escuelas mediante clases
class learningPaths{
    constructor({
        nombre,
        cursos =[]        
    })
    {
        this.nombre = nombre;
        this.cursos = cursos;
    }
    //Otra forma de definir los métodos
    llenarPaths(nuevoPath){
        this.learningPaths.push(nuevoPath);
    }
}

//Defino objetos de escuelas y cursos previos
const desarrolloWeb = new learningPaths({
    nombre: "Desarrollo Web",
    cursos: ["js", "Html", "CSS"]
});

const fronted = new learningPaths({
    nombre: "Fronted Develop",
    cursos: ["angular", "react"]
});


const Juan = new Student({
    name: "Juan",
    user: "juan23",
    email: "jaun@mail.com",
    facebook : "juan@facebook",
    aprovedCourses : ["JS"],
    learningPaths: desarrolloWeb
});

const Pedro = new Student({
    name: "Pedro",
    user: "PedroII",
    email: "pedroII@mail.com",
    twitter : "juanII",
    learningPaths:fronted
});


class User{
    #nombre;
    constructor({
        id = 0,
        nombre, 
        nacionalidad = "COL",
        correo = "ejemplo@email.com",
    }){
        this.id = id;
        this.#nombre = nombre; 
        this.nacionalidad = nacionalidad;
        this.correo = correo;
    }
    
    get darNombre(){
        return this.#nombre;
    }
}

const Victoria = new User({
    nombre: "VIcky",

});

// class Student{
//     constructor({
//         id,
//         nombre, 
//         nacionalidad,
//         correo,
//         plan,
//         aprovedCourses = [],
//         learningPaths = []
//     }){
//         this.id = id;
//         this.nombre = nombre; 
//         this.nacionalidad = nacionalidad;
//         this.correo = correo;
//         this.plan = plan;
//         this.aprovedCourses = aprovedCourses;
//         this.learningPaths = learningPaths;
//     }
//     addAprovedCourses(newCourse){
//         this.aprovedCourses.push(newCourse);
//     }    
// }

class Teacher{
    constructor({
        id,
        nombre, 
        nacionalidad,
        correo,
        tipoContrato,
        aprovedCourses = [],
        learningPaths = []
    }){
        this.id = id;
        this.nombre = nombre; 
        this.nacionalidad = nacionalidad;
        this.correo = correo;
        this.tipoContrato = tipoContrato;
        this.plan = plan;
        this.aprovedCourses = aprovedCourses;
        this.learningPaths = learningPaths;
    }
    addAprovedCourses(newCourse){
        this.aprovedCourses.push(newCourse);
    }    
}
