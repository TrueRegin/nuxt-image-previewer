<template>
    <div id="app">
        <div id="content">
            <Nuxt />
        </div>
    </div>
</template>

<style lang="scss">
html,
body,
#__layout,
#__nuxt,
#app,
#content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--color);
}

body {
    margin: 0;
}

#app {
    background: var(--main-background);
    padding: 20px;

    #content {
        box-sizing: border-box;
        max-width: 80%;
        margin: auto;
    }
}
</style>
