
<script>
    let nombre = "Catálogo";

    const irInicio = () => {
        window.location.href = "/";
    };
</script>

<nav class="navbar">
    <div class="logo" onclick={irInicio}>
        <span class="icono">◈</span>
        {nombre}
    </div>

    <div class="nav-info">
        <span>Explora nuestros productos</span>
    </div>
</nav>

