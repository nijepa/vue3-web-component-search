<template>
<div
    ref="toastWrapper"
    :class="{ infront: active }"
    id="toast-wrapper"
    :style="{height: active ? '100%' : 0}"
  >
  <div
      class="toast__open"
      :class="{ hide: !active }"
      @click="hideToast"
    ></div>
  <div
        id="toast"
        class="toast"
        :class="{ hide: !active }"
      >
      <div class="search-box">
        <input type="text" class="form-control" name="" id="" ref="search" />
        <svg @click="hideToast" class="btn-close" xmlns='http://www.w3.org/2000/svg' width="20px" viewBox='0 0 16 16' fill='greey'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>
      </div>
      <div class="filter-results">
      <template class="" v-for="item in receivedData">
        <article>
        <div class="card product">
          <div class="card-body">
            <div class="product__image-container logo-product">
              <img :src="item.img" alt="" class="product__image-container__image">
            </div>
            <div class="product__name">{{ item?.name }}</div>
          </div>
        </div>
      </article>
    </template>
    </div>
  </div>
</div>
</template>

<!-- <script>
export default{
  inheritAttrs: false
}

</script> -->
<script setup>
import { ref, computed, watch, useAttrs, onMounted } from "vue";
import { useFetch } from '../composables/useFetch';

// setting props
const props = defineProps({
  isActive: {
    type: String,
    default: false,
  },
  toastData: {
    type: String,
    default: [{name: 'aaa'}]
  },
  toastStyle: {
    type: String,
  },
});

// setting attributes
const attrs = useAttrs();
const booleans = ["decoration", "colorized", "backdrop"];
const setAttrs = (prop) => {
  Object.keys(attrs).forEach((a) => {
    if (Object.keys(prop).includes(a)) {
      if (booleans.includes(prop[a])) {
        prop[a] = attrs[a] === true;
      } else prop[a] = attrs[a];
    }
  });
};

const search = ref(null)
onMounted(() => {
  console.log(8)
  //getData()
})
const receivedData = ref([])
const getData = async () => {
  const received = await useFetch('GET');
  if (!received.error) {

    console.log('mfa download codes', received);
  }
  //handleMessages(received);
  console.log('err', received);
  receivedData.value = received
};

// setting toast state
const active = ref(false);
watch(
  () => props.isActive,
  (newValue, oldValue) => {
    // console.log("Watch props.selected function called with args:", newValue, oldValue);
    active.value = newValue === "true";
    if(active.value) {
      getData()
      search.value.focus()
    } 
  }
);

// creating & emitting events
const emit = defineEmits(["close-toast"]);
const toastWrapper = ref(null);
const hideToast = () => {
  active.value = false;
  toastWrapper.value.dispatchEvent(
    new CustomEvent("close-toast", {
      bubbles: true,
      composed: true,
    })
  );
};
</script>
<style>
.filter-results {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    column-gap: 1em;
    row-gap: 1em;
    width: 90%;
}
.filter-results > article {
    flex-basis: calc(25% - 1.5rem);
}
.product {
    box-shadow: 0 0.125rem 0.5rem rgb(34 34 34 / 12%);
    width: 100%;
    border-radius: 0.5rem;
    transition: all 0.15s ease-in;
}
.card {
    border: none;
}
.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}
.product .card-body {
    position: relative;
    padding: 1rem;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}
.product__image-container {
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
    padding-top: 62.5%;
}
.product__image-container__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
}
img {
    vertical-align: middle;
    border-style: none;
}
.product__name {
    height: 2.5rem;
    color: rgb(51, 51, 51);
    line-height: 1.25;
    overflow: hidden;
    font-weight: 600;
}

.search-box {
  display: flex;
  width: 300px;
  column-gap: 1em;
  height: 50px;
  margin: 1em 0;
}
.btn-close {
  cursor: pointer;
}
.form-control {
    display: block;
    width: 100%;
    padding: 0.4rem 1.4rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#toast-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -9;
  display: flex; 
  /* min-height: 80vh; */
  height: 0;
}
.infront {
  z-index: 9999 !important;
}
.toast__open::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  content: "";
  transition: all 5s;
  opacity: 1;
}
.backdrop::after {
  background: rgba(0, 0, 0, 0.5);
}
.toast__open.hide {
  display: none;
  opacity: 0;
}
.toast {
  /* max-width: 500px; */
  min-width: 150px;
  background-color: white;
  /* border-radius: 0.5em; */
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0,5em;
  box-shadow: 5px 5px 12px rgb(0 0 0 / 15%);
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  padding: 1em;
  z-index: 999;
  /* font-family: v-bind(applyStyle.font); */
  transition: 0.5s all ease;
  opacity: 1;
  overflow: hidden;
  /* height: auto; */
  /* margin: 1em; */
  height: 500px;
    width: 100%;
    top: 130px;
    position: relative;
}
.toast.hide {
  padding: 0.5em;
  opacity: 0;
  height: 3.5em;
  z-index: -1;
}
.toast__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin: -1rem;
  padding: 0.5rem;
  border-bottom: 2px solid v-bind(typeColor);
}
#toast-title {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  color: v-bind(typeColor);
}
.toast__close {
  color: v-bind(typeColor);
  cursor: pointer;
  transition: all 1.4s ease;
}
.toast__close:hover svg {
  filter: brightness(0.55);
}
.toast__content {
  display: flex;
  align-items: center;
  column-gap: 0.5em;
  text-align: left;
  padding-top: 2em;
  word-break: break-all;
}
.center {
  justify-content: center;
  align-items: center;
}
.left-top {
  justify-content: flex-start;
  align-items: flex-start;
}
.right-top {
  justify-content: flex-end;
  align-items: flex-start;
}
.left-bottom {
  justify-content: flex-start;
  align-items: flex-end;
}
.right-bottom {
  justify-content: flex-end;
  align-items: flex-end;
}
.colorized {
  border: 2px solid v-bind(typeColor);
}
.colorized .toast__title {
  background-color: v-bind(typeColor);
  border: 2px solid v-bind(typeColor);
}
.colorized .toast__title span {
  background-color: v-bind(typeColor);
  color: #ffffff !important;
}
.colorized .toast__title svg {
  fill: #ffffff;
}
.wobble-enter-active {
  animation: wobbles 0.8s ease;
}
.wobble-leave-active {
  transition: all 1s ease;
  /* animation: wobbles 1s linear; */
}
@keyframes wobbles {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 0.3;
  }
  60% {
    transform: translateX(8px);
    opacity: 0.3;
  }
  70% {
    transform: translateX(-8px);
    opacity: 0.7;
  }
  80% {
    transform: translateX(4px);
    opacity: 0.7;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
