<template>
    <div style="background: #E3EEFF">
        <br />
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div>
                        <nuxtLink to="/" class="link">
                            HOME
                        </nuxtLink>
                    </div>
                    <br />
                    <div>
                        <nuxtLink to="/nosotros" class="link">
                            NOSOTROS
                        </nuxtLink>
                    </div>
                    <br />
                    <div>
                        <nuxtLink to="/productos" class="link">
                            PRODUCTOS
                        </nuxtLink>
                    </div>
                    <br />
                    <div>
                        <nuxtLink to="/eventos" class="link">
                            EVENTOS
                        </nuxtLink>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex justify-content-end">
                        <img
                            style="height: 150px"
                            src="https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen35-.png"
                            alt="logo de la empresa"
                        >
                    </div>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.link { 
    text-decoration: none;
    color: #0B6D7A;
    }
</style>
