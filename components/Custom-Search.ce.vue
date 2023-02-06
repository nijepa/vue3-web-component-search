<template>
  <div
    ref="searchWrapper"
    :class="{ infront: active }"
    id="search-wrapper"
    :style="{ height: active ? '100%' : 0 }"
  >
    <div
      class="search__open"
      :class="{ hide: !active }"
      @click="hideSearch"
    ></div>
    <div id="toast" class="search" :class="{ hide: !active }">
      <div class="search-box">
        <input
          type="text"
          v-model="searchString"
          class="form-control"
          name=""
          id=""
          ref="search"
        />
        <div class="close">
          <svg
            @click="hideSearch"
            class="btn-close"
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            viewBox="0 0 16 16"
            fill="rgb(44, 62, 80);"
          >
            <path
              d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
            />
          </svg>
        </div>
      </div>
      <div class="filter-results">
        <template class="" v-for="item in filteredData">
          <article>
            <a class="card product" :href="item.url">
              <div class="card-body">
                <div class="product__name">{{ item?.productName }}</div>
                <div class="product__image-container logo-product">
                  <img
                    :src="item?.productLogoSmall"
                    :alt="item?.productLogoSmall"
                    class="product__image-container__image"
                  />
                </div>
              </div>
            </a>
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
import { useFetch } from "../composables/useFetch";

// setting props
const props = defineProps({
  isActive: {
    type: String,
    default: "false",
  },
});

onMounted(() => {
  console.log(8);
  //getData()
});

const receivedData = ref([]);
const getData = async () => {
  const received = await useFetch("GET");
  if (!received.error) {
    console.log("received vouchers", received);
  }
  //handleMessages(received);
  console.log("err", received);
  receivedData.value = received;
};
// searching/filtering data
const search = ref(null);
const searchString = ref(null);
const filteredData = computed(() => {
  return (
    searchString.value && receivedData.value.length &&
    receivedData.value.filter((r) => r.productName.toLowerCase().includes(searchString.value.toLowerCase()))
  );
});
// setting component state
const active = ref(false);
watch(
  () => props.isActive,
  (newValue, oldValue) => {
    // console.log("Watch props.selected function called with args:", newValue, oldValue);
    active.value = newValue === "true";
    if (active.value) {
      !receivedData.value.length && getData();
      search.value.focus();
    }
  }
);

// creating & emitting events
const emit = defineEmits(["close-search"]);
const searchWrapper = ref(null);
const hideSearch = () => {
  active.value = false;
  searchWrapper.value.dispatchEvent(
    new CustomEvent("close-search", {
      bubbles: true,
      composed: true,
    })
  );
};
</script>
<style lang="scss">
* {
  font-family: "Open Sans", sans-serif;
}
#search-wrapper {
  font-family: "Open Sans", sans-serif;
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
  height: 0;
  &.infront {
    z-index: 9999 !important;
  }
  .search__open::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    content: "";
    transition: all 5s ease;
    opacity: 1;
    &.hide {
      display: none;
      opacity: 0;
    }
  }
  .search {
    /* max-width: 500px; */
    min-width: 150px;
    background-color: white;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0, 5em;
    box-shadow: 5px 5px 12px rgb(0 0 0 / 15%);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    padding-top: 0;
    z-index: 999;
    height: 500px;
    width: 100%;
    top: 130px;
    opacity: 1;
    overflow: hidden;
    overflow-y: auto;
    transition: 0.5s all ease;
    &.hide {
      padding: 0.5em;
      opacity: 0;
      height: 3.5em;
      z-index: -1;
    }
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
    @media screen and (max-width: 1024px) {
      .filter-results > article {
        flex-basis: calc(33% - 1.5rem);
      }
    }
    @media screen and (max-width: 768px) {
      .filter-results > article {
        flex-basis: calc(50% - 1.5rem);
      }
    }
    @media screen and (max-width: 480px) {
      .filter-results > article {
        flex-basis: calc(100% - 1.5rem);
      }
    }
  }
}

.product {
  //box-shadow: 0 0.125rem 0.5rem rgb(34 34 34 / 12%);
  width: 100%;
  //border-radius: 0.5rem;
  transition: all 0.15s ease-in;
  width: calc(100% - 20px);
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  //background-color: #fff;
  background-clip: border-box;
  //border: 1px solid rgba(0, 0, 0, 0.125);
  //border-radius: 0.25rem;
  border: none;
  text-decoration: none;
  max-width: 350px;
  background-color: rgb(240,240,240);
}
.product .card-body {
  position: relative;
  padding: 1rem;
  transition: all 0.5s ease;
}
.card:hover {
  //transform: scale(1.03);
transform: scale(1.02);
    background: #f0f0f0;
    box-shadow: 0.1em 0.1em 0.6em 0 rgb(51 51 51 / 20%);
    border-radius: 0.2em;
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
  border-radius: 14px;
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
  margin: 1em 0;
  position: sticky;
  top: 0px;
  z-index: 555555;
  width: 100%;
  justify-content: center;
  background: white;
  padding: 1em;
}
.close {
  display: flex;
  border-radius: 50%;
  padding: 0.5em;
  margin: 0.5em;
  width: 20px;
  height: 20px;
  transition: all 0.5s ease;
  cursor: pointer;
}
.close:hover {
  background-color: #2c3e50;
  color: #fff;
}
.close:hover .btn-close {
  fill: #fff;
  stroke: #fff;
}
.btn-close {
  /* cursor: pointer; */
  stroke: rgb(44, 62, 80);
}
.btn-close:hover {
  /* stroke-width: 2; */
  fill: #fff;
}
.form-control {
  display: block;
  /* width: 100%; */
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
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
