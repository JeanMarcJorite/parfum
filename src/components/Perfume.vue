<script>
export default {
    name: 'Perfume',
    props: ['name', 'description', 'price', 'brand', 'limit', 'gender'],
    data() {
        return {
            conseils: [

            ],
            activeButton: "description",
            active: false

        }
    },
    computed: {
        isDescriptionActive() {
            return this.activeButton === "description";
        },
        isConseilsActive() {
            return this.activeButton === "conseils";
        }
    },
    methods: {
        async fetchConseilParfum() {
            const response = await fetch("/parfum.json")
            const data = await response.json();
            for (let i = 0; i < data.conseils.length; i++) {
                this.conseils.push(data.conseils[i]);
            }
        },
        setActiveTab(tab) {
            this.activeButton = tab;
        }
    },
    async mounted() {
        await this.fetchConseilParfum();
        this.active = true

    }

}
</script>


<template>
    <div class="grid-container">
        <div class="left-item">
            <h1 class="perfume-title">{{ name }}</h1>

            <p class="perfume-price">Prix : {{ price }} €</p>
            <p class="perfume-brand">Marque : {{ brand }}</p>
            <p class="perfume-limit">Quantité Restantes : {{ limit }}</p>
            <p class="perfume-gender">Genre : {{ gender }}</p>
            <button v-if="active" class="product-button">
                <font-awesome-icon icon="shopping-bag" />
                <span class="button-text"> Commander <p class="perfume-price">Prix : {{ price }} €</p></span>
            </button>

        </div>

        <div class="right-item">
            <div class="products-tabs">
                <div class="tab-nav-list">
                    <div class="tab-nav-item">
                        <button id="description" :class="{ active: isDescriptionActive }"
                            @click="setActiveTab('description')">Description</button>
                    </div>
                    <div class="tab-nav-item">
                        <button id="conseils" :class="{ active: isConseilsActive }"
                            @click="setActiveTab('conseils')">Conseils</button>
                    </div>

                    <div v-show="isDescriptionActive" class="content-description">
                        <p class="perfume-description">{{ description }}</p>
                    </div>
                    <div v-show="isConseilsActive" :class="black" class="content-conseils">
                        <div v-for="conseil in conseils" :key="conseil.id">
                            <div id="content-conseils">
                            
                                <div>
                                    <p>{{ conseil.conseil }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>
<style scoped>

.left-item {
    position: sticky;
    top: 0;
}

.product-button {
    position: sticky;
    bottom: 0;
    background-color: #000000;
    border: solid 1px #989494;
    border-radius: 40px;
    color: rgb(255, 255, 255);
    width: 40vw;
    height: 10vh;
}

#content-conseils {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #333;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

#content-conseils p {
    font-size: 12px;
    color: #333;
}

.perfume-container {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: black;
}

.perfume-title {
    font-size: 24px;
    color: black;
    margin-bottom: 10px;
}

.perfume-description {
    font-size: 16px;
    margin-bottom: 10px;
    color: black;
}

.perfume-price {
    color: rgb(255, 255, 255);
    font-size: 18px;
    margin-bottom: 10px;
}

.perfume-brand {
    color: black;
    font-size: 16px;
    margin-bottom: 10px;
}

.perfume-limit {
    color: black;
    font-size: 16px;
    margin-bottom: 10px;
}

.perfume-gender {
    font-size: 16px;
    color: black;
    margin-bottom: 10px;
}


.right-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    right: 0;
    color: black;
    position: sticky;

}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
    min-height: 100vh;
}

.right-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content-conseils {
    position: sticky;
    overflow: auto;
    max-height: 90vh; /* Ajustez cette valeur en fonction de vos besoins */
    width: 100%; /*/* Ajustez cette valeur en fonction de vos besoins */
}

.product-tabs .tab-nav-list {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 32px;
}

.tab-nav-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

#description,
#conseils {
    background-color: transparent;
    border: none;
    color: black;
    padding: 10px 0;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    transition: border-bottom-color 1s ease;
    opacity: 0.6;
    transition: opacity 0.3s ease;
}

#description.active,
#conseils.active {
    border-bottom: 2px solid #000;
    transition: border-bottom-color 1s ease;
    opacity: 1;
    transition: opacity 0.3s ease;
}

#description:hover,
#conseils:hover {
    opacity: 1;
}
</style>