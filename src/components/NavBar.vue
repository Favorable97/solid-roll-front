<template>
  <div>
    <v-app-bar flat app>
      <v-app-bar-nav-icon 
        @click="isDrawer"
        class="hidden-sm-and-up hidden-xs-and-down"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="primary--text">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          v-for="item in items"
          :key="item.icon"
          text
        >
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
          <span v-if="item.name === 'cart'">{{ priceWithAsset }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer" 
      app
      temporary
      absolute
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.icon" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title === '' ? item.titleLink : item.title  }}</v-list-item-title>
            <v-list-item-title v-if="item.name === 'cart'">{{ priceWithAsset }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Your main content here -->
    </v-main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      title: 'Solid Rolls',
      drawer: false,
      items: [
        { name: 'stock', title: 'Акции', icon: 'mdi-ticket-percent' },
        { name: 'delivery', title: 'Доставка', icon: 'mdi-moped' },
        { name: 'contacts', title: 'Контакты', icon: 'mdi-account-box' },
        { name: 'cart', title: '', titleLink: 'Корзина', icon: 'mdi-cart' },
        { name: 'lk', title: '', titleLink: 'Личный кабинет', icon: 'mdi-account' },
      ],
    };
  },
  props: {
    sumCart: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {
    isDrawer() {
      console.log('Change drawer')
      this.drawer = !this.drawer
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters([
        'SUM_CART'
      ]),
    priceWithAsset() {
      return this.SUM_CART + ' р.'
    }
  }
};
</script>