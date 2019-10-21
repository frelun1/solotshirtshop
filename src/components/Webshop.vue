<template>
  <div class="webshopComponent">
    <h1>TnT Webshop</h1>
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Model 1</p>
          </header>
          <div class="card-content">
            <img
              alt="Vue logo"
              src="https://images-ext-2.discordapp.net/external/ZN2gvOQVe6Ou8TpVGWDCYhAh-LKp_uNut51qLvKpUNw/%3Fw%3D1024%26h%3D1024/https/i.rocdn.com/v2/17138511"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'design', params: {designId: 'model-1' } }">
                  <button class="button is-link">Skapa din egen</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Model 2</p>
          </header>
          <div class="card-content">
            <img
              alt="Vue logo"
              src="https://yeyvibe.com/wp-content/uploads/2019/04/Dabbing-Rainbow-Unicorn-T-Shirt.png"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'design', params: {designId: 'model-2' } }">
                  <button class="button is-link">Skapa din egen</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Model 3</p>
          </header>
          <div class="card-content">
            <img
              alt="Vue logo"
              src="https://images-ext-2.discordapp.net/external/ZN2gvOQVe6Ou8TpVGWDCYhAh-LKp_uNut51qLvKpUNw/%3Fw%3D1024%26h%3D1024/https/i.rocdn.com/v2/17138511"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'design', params: {designId: 'model-3' } }">
                  <button class="button is-link">Skapa din egen</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Model 4</p>
          </header>
          <div class="card-content">
            <img
              alt="Vue logo"
              src="https://yeyvibe.com/wp-content/uploads/2019/04/Dabbing-Rainbow-Unicorn-T-Shirt.png"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'design', params: {designId: 'model-4' } }"><button class="button is-link">Skapa din egen</button></router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Model 5</p>
          </header>
          <div class="card-content">
            <img
              alt="Vue logo"
              src="https://images-ext-2.discordapp.net/external/ZN2gvOQVe6Ou8TpVGWDCYhAh-LKp_uNut51qLvKpUNw/%3Fw%3D1024%26h%3D1024/https/i.rocdn.com/v2/17138511"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'design', params: {designId: 'model-5' } }"><button class="button is-link">Skapa din egen</button></router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Model 6</p>
          </header>
          <div class="card-content">
            <img
              alt="Vue logo"
              src="https://yeyvibe.com/wp-content/uploads/2019/04/Dabbing-Rainbow-Unicorn-T-Shirt.png"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'design', params: {designId: 'model-6' } }">
                <button class="button is-link">Skapa din egen</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  name: "Webshop",
  data() {
    return {
      webshopData: {
        valdTShirt: ""
      },

      setTShirt(tShirt) {
        this.webshopData.valdTShirt = tShirt;
      }
    };
  }
};
</script>