<template>
    <div>
        <v-row>
            <v-col>
                <h2 class="mt-0 mb-6 text-center">Каталог</h2>
            </v-col>
        </v-row>
        <v-row>
            <ProductsCard 
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </v-row>
    </div>
</template>

<script>
    import ProductsCard from '@/components/ProductCard.vue';
    export default {
        name: 'Catalog',
        components: { ProductsCard },
        data() {
            return {
                products: []
            }
        },
        mounted() {
            this.getProducts()
        },
        methods: {
            async getProducts() {
                const res = await this.axios.get('http://localhost:3000/rolls')
                this.products = res.data
            }
        } 
            
    }
</script>

<style lang="scss" scoped>

</style>