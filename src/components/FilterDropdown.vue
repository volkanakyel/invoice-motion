<template>
  <div class="dropdown">
    <div class="dropdown__wrapper" v-click-outside="closeDropdown">
      <div class="dropdown__actions" @click="toggleDropdown">
        <p class="only-desktop-active">Filter by status</p>
        <p class="only-tablet-active">Filter</p>
        <img
          :class="rotateDropdownIcon"
          src="../assets/images/icon-arrow-down.svg"
          alt=""
        />
      </div>
      <transition>
        <div v-if="hasDropdownOpen" class="dropdown__filter">
          <div>
            <input
              type="checkbox"
              @change="dropdownStatus"
              v-model="filteredValue"
              value="draft"
              name="draft"
              id="draft"
            />
            <label for="draft">Draft</label>
          </div>
          <div>
            <input
              type="checkbox"
              @change="dropdownStatus"
              v-model="filteredValue"
              value="pending"
              name="pending"
              id="pending"
            />
            <label for="pending">Pending</label>
          </div>
          <div>
            <input
              type="checkbox"
              @change="dropdownStatus"
              v-model="filteredValue"
              value="paid"
              name="paid"
              id="paid"
            />
            <label for="paid">Paid</label>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import vClickOutside from 'v-click-outside';

export default Vue.extend({
  data() {
    return {
      hasDropdownOpen: false,
      filteredValue: [],
    };
  },
  methods: {
    ...mapActions({
      invoiceFilter: 'invoice/invoiceFilter',
    }),
    dropdownStatus(): void {
      this.invoiceFilter(this.filteredValue);
    },
    toggleDropdown(): void {
      this.hasDropdownOpen = !this.hasDropdownOpen;
    },
    closeDropdown(): void {
      this.hasDropdownOpen = false;
    },
  },
  computed: {
    rotateDropdownIcon(): string {
      return this.hasDropdownOpen
        ? 'dropdown__icon-right'
        : 'dropdown__icon-bottom';
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/_variables.scss";
.dropdown {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: $spacing-s;
    font-weight: 700;
  }
  &__actions {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: $spacing-xs;
  }
  &__icon-right {
    transition: transform 0.1s linear;
    transform: rotate(0deg);
  }
  &__icon-bottom {
    transition: transform 0.1s linear;
    transform: rotate(-90deg);
  }
  &__filter {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    padding: $spacing-m;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $spacing-s;
    background-color: $color-white;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    border-radius: $border-radius-container;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    label {
      margin-left: 12px;
      text-align: center;
    }
    div {
      display: flex;
      align-items: center;
    }
    input {
      color: #dfe3fa;
      border: 1px solid $color-primary;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
