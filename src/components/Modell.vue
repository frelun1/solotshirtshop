<template>
  <div class="card">
          <header class="card-header">
            <p class="card-header-title">{{titel}}</p>
          </header>
          <div class="card-content">
            <img
              alt="Vue logo"
              :src="imgSrc"
              style="height: 100px;"
            />
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'design', params: {designId: props.id } }"><button class="button is-link">Skapa din egen</button></router-link>
              </span>
            </p>
          </footer>
        </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    titel: String,
    id: String,
    imgSrc:String
}
}
</script>
