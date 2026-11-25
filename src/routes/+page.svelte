
<script>
    import { onMount } from 'svelte';
    import Navbar from '#lib/components/Navbar.svelte';
    import SearchBar from '#lib/components/SearchBar.svelte';
    import ProductCard from '#lib/components/ProductCard.svelte';

    /**
     * @type {any[]}
     */
    let productos = $state([]);
    let busqueda = $state('');
    let cargando = $state(true);
    let error = $state('');

    let productosFiltrados = $derived(
        productos.filter(producto =>
            producto.title.toLowerCase().includes(busqueda.toLowerCase()) ||
            producto.category.toLowerCase().includes(busqueda.toLowerCase())
        )
    );

    onMount(async () => {
        try {
            const respuesta = await fetch(
                'https://fakestoreapi.com/products'
            );

            if (!respuesta.ok) {
                throw new Error('No se pudieron cargar los productos');
            }

            productos = await respuesta.json();

        } catch (e) {
            error = 'Ocurrió un error al cargar los productos.';
            console.error(e);
        } finally {
            cargando = false;
        }
    });
</script>

<svelte:head>
    <title>Catálogo | Tienda</title>
    <meta
        name="description"
        content="Explora nuestro catálogo de productos."
    />
</svelte:head>

<Navbar />

<main class="pagina-inicio">
    <section class="encabezado">
        <span class="etiqueta">NUESTRA COLECCIÓN</span>

        <h1>Encuentra lo que buscas.</h1>

        <p>
            Explora nuestro catálogo y descubre productos
            para todos tus gustos.
        </p>

        <div class="buscador">
            <SearchBar bind:value={busqueda} />
        </div>
    </section>

    <section class="catalogo">
        <div class="titulo-catalogo">
            <div>
                <h2>Nuestros productos</h2>
                <p>Descubre nuestra selección</p>
            </div>

            <span>{productosFiltrados.length} productos</span>
        </div>

        {#if cargando}
            <p class="mensaje">Cargando productos...</p>

        {:else if error}
            <p class="mensaje error">{error}</p>

        {:else if productosFiltrados.length === 0}
            <p class="mensaje">
                No encontramos productos con ese nombre.
            </p>

        {:else}
            <div class="productos">
                {#each productosFiltrados as producto (producto.id)}
                    <ProductCard {producto} />
                {/each}
            </div>
        {/if}
    </section>
</main>

