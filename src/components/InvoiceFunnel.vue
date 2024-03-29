<template>
  <div
    id="invoice-funnel"
    class="invoice-funnel"
    :class="{
      'invoice-funnel__active': open,
    }"
  >
    <div class="invoice-funnel__container">
      <div class="invoice-funnel__wrapper">
        <div class="invoice-funnel__content">
          <slot></slot>
        </div>
      </div>
      <div class="invoice-funnel__overlay" @click="close"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface DataProps {
  subItemActive: null | string; // Assuming subItemActive is of type string, change as necessary
  showSubMenu: boolean;
}
export default Vue.extend({
  name: 'InvoiceFunnel',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data(): DataProps {
    return {
      subItemActive: null,
      showSubMenu: false,
    };
  },
  mounted() {
    const onEscape = (event: KeyboardEvent) => {
      if (this.open && event.keyCode === 27) {
        this.close();
      }
    };
    document.addEventListener('keydown', onEscape);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape);
    });
  },
  methods: {
    close(): void {
      this.$emit('close');
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/abstracts/_variables.scss";
.invoice-funnel {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translateX(-200%); // left side effect
  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 101;

  &__container {
    height: 100%;
    width: 200%;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    z-index: 101;
  }

  &__wrapper {
    margin: 0;
    position: absolute;
    content: '';
    height: 100%;
    left: 0%;
    width: 25%;
    overflow-y: auto;
    transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    background-color: #fff;
    padding-bottom: $spacing-s;
    @media (max-width: 1080px) {
      transform: translateX(0);
      width: 35%;
    }
    @media (max-width: 480px) {
      transform: translateX(0);
      width: 50%;
    }
  }
  &__content {
    margin-left: 81px;
    padding: 32px;
    @media (max-width: 768px) {
      margin-top: 81px;
      margin-left: 0;
    }
    @media (max-width: 480px) {
      padding: 32px 24px;
    }
  }
  &__overlay {
    display: block;
    content: '';
    position: absolute;
    right: 50%;
    top: 0;
    width: 25%;
    height: 100%;
    background: transparentize($color-secondary-light, 0.39);
    backdrop-filter: blur(3px);
    @media (max-width: 1080px) {
      width: 15%;
    }
    @media (max-width: 480px) {
      display: none;
    }
  }

  &__active {
    transform: translateX(0);
  }
}

.no-scroll {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  overscroll-behavior: none;
  touch-action: none;
  // for iOS
  -webkit-overflow-scrolling: none;
}

.mobile-only-flex {
  display: flex;

  @media (max-width: 680px) {
    display: none !important;
  }
}
</style>
