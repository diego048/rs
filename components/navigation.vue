<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-light shadow fixed-top">
        <div class="container-fluid">
          <div>
            <img class="mx-2" src="https://ik.imagekit.io/ui7iolk9r/tr:w-700/imagen37.png" alt="logo de la empresa" style="width:180px; height: 100%; object-fit: contain">
          </div>
          <div class="element">
              <nuxtLink to="/" class="link">
                <button type="button" class="btn btn-light nav-item">HOME</button>
              </nuxtLink>
              <nuxtLink to="/nosotros" class="link">
                <button type="button" class="btn btn-light nav-item">NOSOTROS</button>
              </nuxtLink>
              <nuxtLink to="/productos" class="link">
                <button type="button" class="btn btn-light nav-item">PRODUCTOS</button>
              </nuxtLink>
              <nuxtLink to="/eventos" class="link">
                <button type="button" class="btn btn-light nav-item">EVENTOS</button>
              </nuxtLink>
          </div>
          <div class="element1">
            <button class="btn btn-light nav-item" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      <div style="width: 50vw; max-width: 360px" class="offcanvas offcanvas-start offcanvas-slide" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header d-flex flex-row-reverse">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <NuxtLink to="/" class="link">
            <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    HOME
                  </button>
            </NuxtLink>
                  <br />
                <NuxtLink to="/nosotros" class="link">
                  <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    NOSOTROS
                  </button>
                </NuxtLink>
                <NuxtLink to="/productos" class="link">
                  <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    PRODUCTOS
                  </button>
              </NuxtLink >
              <NuxtLink to="/eventos" class="link">
                <button type="button" class="btn btn-light nav-item" style="width: 100%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  EVENTOS
                  </button>
              </NuxtLink>
          </div>
        </div>
      </div>
    </div>
</template>
  <style scoped>
  @media screen  and (max-width: 600px) {
    .element {
      display:none
    }
  }
  @media screen  and (min-width: 601px) {
    .element1 {
      display:none
    }
  }
  </style>
