
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const respuesta = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
    );

    if (!respuesta.ok) {
        error(404, 'No se encontró el producto');
    }

    const producto = await respuesta.json();

    if (!producto || !producto.id) {
        error(404, 'Producto no encontrado');
    }

    return {
        producto
    };
}
