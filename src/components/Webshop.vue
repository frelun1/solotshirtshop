<template>
  <div class="webshopComponent">
    <h1>webshop</h1>
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Model 1</p>
          </header>
          <div class="card-content">
            <img
              alt="Vue logo"
              src="https://nummerlappar.se/wp-content/uploads/2017/05/All-about-T-Shirt.jpg"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-link">Skapa din egen</a>
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
              src="https://nummerlappar.se/wp-content/uploads/2017/05/All-about-T-Shirt.jpg"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-link">Skapa din egen</a>
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
              src="https://nummerlappar.se/wp-content/uploads/2017/05/All-about-T-Shirt.jpg"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-link">Skapa din egen</a>
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
              src="https://nummerlappar.se/wp-content/uploads/2017/05/All-about-T-Shirt.jpg"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-link">Skapa din egen</a>
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
              src="https://nummerlappar.se/wp-content/uploads/2017/05/All-about-T-Shirt.jpg"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-link">Skapa din egen</a>
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
              src="https://nummerlappar.se/wp-content/uploads/2017/05/All-about-T-Shirt.jpg"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a class="button is-link">Skapa din egen</a>
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