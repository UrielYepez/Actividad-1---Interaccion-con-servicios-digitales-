
<script>
    let { producto } = $props();
</script>

<a href={`/producto/${producto.id}`} class="card">
    <div class="imagen">
        <img src={producto.image} alt={producto.title} />
    </div>

    <div class="contenido">
        <span class="categoria">{producto.category}</span>

        <h3>{producto.title}</h3>

        <div class="precio">
            ${producto.price.toFixed(2)}
        </div>

        <span class="ver-producto">Ver producto →</span>
    </div>
</a>

