<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading"/>
      <div v-else class="row">
        <CategoriesCreate @created="addNewCategory" />
        <CategoriesEdit
            v-if="categories.length"
            :categories="categories"
            @updated="updateCategories"
            :key="categories.length + updateCount"
        />
        <p v-else class="center">Категорий пока нет</p>
      </div>
    </section>
  </div>
</template>
<script>
import CategoriesCreate from '@/components/CategoriesCreate.vue';
import CategoriesEdit from '@/components/CategoriesEdit.vue';
import Loader from '@/components/app/Loader.vue';

export default {
  name: 'Categories',
  metaInfo() {
    return {
      title: this.$title('Menu_Categories'),
    };
  },
  components: { CategoriesCreate, CategoriesEdit, Loader },
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0,
  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    this.loading = false;
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex((c) => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount = 1;
    },
  },
};
</script>
