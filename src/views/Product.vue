<template>
    <v-card>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-text>
        <p>{{ product.description }}</p>
        <p>Цена: {{ product.price }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Добавить в корзину</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          title: 'Название товара',
          description: 'Описание товара',
          price: 100
        }
      };
    }
  }
  </script>