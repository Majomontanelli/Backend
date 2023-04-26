class ProductManager {
    constructor(){
        this.products = [];
    }

    static id= 0

    addProduct(title, description, price, thumbnail, code, stock){
        for(let i=0; i< this.products.length; i++){
            if(this.products[i].code === code) {
                console.log(`Este código ${code} se repite`)
                break;
            }
        }

        const newProduct = {title, description, price, thumbnail, code, stock}
            if(!Object.values(newProduct).includes(undefined)){
                ProductManager.id++
                this.products.push({
                    ...newProduct,
                    id:ProductManager.id
                });
            } else {
                console.log("Se requiere completar todos los campos")
            }


    }

    getProduct() {
        return this.products;
    }

    existe(id){
        return this.products.find((producto) => producto.id ===id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("No se encontró id") : console.log(this.existe(id));
    }
}

const productMg = new ProductManager();

console.log(productMg.getProduct());

productMg.addProduct("La Cenicienta","Basada en cuento de hadas, disney año 2014", 1000, "Imagen1","123", 5);
productMg.addProduct("BlancaNieves y el cazador", "Basada en cuentos de hadas, disney año 2012", 1500, "Imagen2","345", 10);
productMg.addProduct("Red riding hood", "Basada en cuentos de hadas, caperucita roja, disney año 2011", 1200, "Imagen3", "678",9);
productMg.addProduct("Los tres chanchitos", "Basada en cuentos de hadas, disney año 1993", 700, "Imagen4", "912", 15);
productMg.addProduct("Guillermo del Toro's Pinocchio", "Basada en cuentos de hadas, disney año 2022", 1500, "Imagen5", "234", 4);

console.log(productMg.getProduct());

//busqueda por id
//productMg.getProductById(3);
//busqueda por id inexistente
//productMg.getProductById(8);