const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Fantasia',
        libros: [
            {nombre: 'Harry Potter', cantidad: 4},
            {nombre: 'Narnia', cantidad: 0},
            {nombre: 'Soy el numero 4', cantidad: 4},
        ],
        nuevoLibro: '',
        total:  0,
    },
    methods:{
        agregarLibro(){
            this.libros.push({
                nombre: this.nuevoLibro, cantidad: 0
            })
            this.nuevoLibro= ""
        },
    },
    computed: {
        sumarLibros(){
            this.total = 0;
            for(libro of this.libros){
                this.total = this.total + libro.cantidad;
            }
            return this.total;
        }
    }

})