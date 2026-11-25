
<script>
    let { value = $bindable("") } = $props();
</script>

<div class="search">
    <span>⌕</span>
    <input
        type="text"
        placeholder="Buscar productos..."
        bind:value
    />
</div>

