
<script>
    import Navbar from '#lib/components/Navbar.svelte';

    let { data } = $props();

    let producto = $derived(data.producto);
</script>

<svelte:head>
    <title>{producto.title} | Catálogo</title>
    <meta name="description" content={producto.description} />
</svelte:head>

<Navbar />

<main class="pagina-producto">
    <a href="/" class="volver">← Volver al catálogo</a>

    <section class="detalle">
        <div class="imagen">
            <img src={producto.image} alt={producto.title} />
        </div>

        <div class="informacion">
            <span class="categoria">{producto.category}</span>

            <h1>{producto.title}</h1>

            <div class="calificacion">
                ⭐ {producto.rating.rate}
                <span>({producto.rating.count} opiniones)</span>
            </div>

            <div class="precio">
                ${producto.price.toFixed(2)}
            </div>

            <h3>Descripción</h3>

            <p class="descripcion">
                {producto.description}
            </p>

            <div class="identificador">
                Producto #{producto.id}
            </div>

            <a href="/" class="boton">
                Seguir explorando
            </a>
        </div>
    </section>
</main>

