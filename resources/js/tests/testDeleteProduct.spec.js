// import { mount, createLocalVue } from "@vue/test-utils";
// import ProductList from "@/components/products/ProductList.vue";
// import Vuetify from "vuetify";
// import products from "../products";
// import VeeValidate from "vee-validate";

// describe("AddProduct", () => {
//     let localVue;
//     let vuetify;
//     let wrapper;

//     beforeEach(() => {
//         localVue = createLocalVue();
//         localVue.use(VeeValidate);
//         vuetify = new Vuetify();

//         const App = localVue.component("App", {
//             components: { ProductList },
//             data() {
//                 return {
//                     length: products.length,
//                 };
//             },
//             methods: {
//                 deleteProduct: (index) => {
//                     products.splice(
//                         products.findIndex((product) => product.id === index),
//                         1
//                     );
//                 },
//             },
//             template: `
//               <v-app>
//                 <ProductList
//                 r   ef="dialog"
//                     v-model="dialog"
//                 />
//               </v-app>
//             `,
//         });
//         wrapper = mount(App, {
//             localVue,
//             vuetify,
//             attachToDocument: true,
//         });
//     });
//     it("should delete product", async () => {
//         wrapper.setData({ length: products.length });
//         // expect(wrapper.isVueInstance()).toBe(true);
//         let length = wrapper.vm.length;
//         wrapper.vm.deleteProduct(3);

//         expect(products.length).toBe(length - 1);
//     });
// });
