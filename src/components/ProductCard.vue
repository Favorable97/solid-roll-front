<template>
    <v-col cols="2">
        <v-card hover @click="pressCard">
            <v-img
                :src="require(`../assets/images/${product.image}`)"
                height="150"
                contain
            ></v-img>

            <v-card-title>{{ product.name }}</v-card-title>

            <v-card-text>
                <div class="text--primary">{{ price }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="primary" @click.stop="pressButton">
                    <v-icon left>mdi-cart</v-icon>
                    В корзину
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: 'ProductsCard',
        props: {
            product: {
                type: Object,
                default: {}
            }
        },
        methods: {
            pressCard() {
                console.log('Press Card!')
            },
            pressButton() {
                console.log('Press Button!')
            }
        },
        computed: {
            price() {
                return `Цена ${this.product.price}р.`
            }
        }  
    }
</script>

<style lang="scss" scoped>
    .v-card {
        max-width: 300px;
        margin: 0 auto;
    }
</style>