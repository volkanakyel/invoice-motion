<template>
  <div class="invoice-item">
    <div class="invoice-item__info">
      <p class="invoice-item__id">#RT3080</p>
      <p class="invoice-item__creation">Due 19 Aug 2021</p>
      <p class="invoice-item__owner">Jensen Huang</p>
      <p class="invoice-item__price-mobile">£ 1,800.90</p>
    </div>
    <div class="invoice-item__actions">
      <p class="invoice-item__price">£ 1,800.90</p>
      <p class="invoice-item__owner-mobile">Jensen Huang</p>
      <Tag />
      <img class="invoice-item__expand-icon" src="../assets/images/icon-arrow-right.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tag from '@/components/Tag.vue';

export default Vue.extend({
  components: {
    Tag,
  },
});
</script>

<style scoped lang="scss">
.invoice-item {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px;
  margin-block: 16px;
  border-radius: $border-radius-container;
  gap: 32px;
  @media (max-width: 768px) {
    padding: 16px 24px;
  }
  @media (max-width: 480px) {
    padding: 24px 24px;
  }
  &__info {
    display: flex;
    justify-content: center;
    gap: 24px;
    align-items: center;
    // flex-wrap: wrap;
    @media (max-width: 480px) {
      gap: 0;
      display: block;
    }
  }
  &__id {
    font-weight: 700;
    // flex: 0 0 100%;
    @media (max-width: 480px) {
      margin-bottom: 24px;
    }
  }
  &__creation {
    color: $color-grey-light-2;
    // flex: 0 0 100%;
  }
  &__owner {
    color: $color-grey-light-2;
    // flex: 0 0 100%;
    @media (max-width: 480px) {
      display: none;
    }
  }
  &__owner-mobile {
    color: $color-grey-light-2;
    margin-bottom: 24px;
    // flex: 0 0 100%;
    @media (min-width: 480px) {
      display: none;
    }
  }
  &__actions {
    display: flex;
    justify-content: center;
    gap: 24px;
    align-items: center;
    // flex-wrap: wrap;
    @media (max-width: 480px) {
      display: block;
      text-align: center;
    }
  }
  &__price {
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 480px) {
      display: none;
    }
  }
  &__price-mobile {
    font-size: 16px;
    font-weight: 700;
    @media (min-width: 480px) {
      display: none;
    }
  }

  &__expand-icon {
    @media (max-width: 480px) {
      display: none;
    }
  }
}
</style>
