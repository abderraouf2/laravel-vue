// import { mount, createLocalVue } from "@vue/test-utils";
// import Vuetify from "vuetify";
// import EditProduct from "@/components/products/EditProduct.vue";
// import VeeValidate from "vee-validate";
// import products from "../products";

// describe("EditProduct", () => {
//     // let localVue;
//     // let vuetify;
//     // let wrapper;

//     // beforeEach(() => {
//     //     localVue = createLocalVue();
//     //     vuetify = new Vuetify();    
//     //     localVue.use(VeeValidate);

//     //     const App = localVue.component("App", {
//     //         components: { EditProduct },
//     //         data() {
//     //             return {
//     //                 dialog: false,
//     //                 length: products.length,
//     //                 editedProduct: {
//     //                     name: "sdfsdfsdfsf",
//     //                     description: "sdfsdfs",
//     //                     price: 32,
//     //                     quantity: 21,
//     //                 },
//     //             };
//     //         },
//     //         props: {
//     //             product: {
//     //                 name: "sdfsdfsdfsf",
//     //                 description: "sdfsdfs",
//     //                 price: 32,
//     //                 quantity: 21,
//     //             },
//     //         },
//     //         methods: {
//     //             update: async (product) => {
//     //                 if (
//     //                     product.name &&
//     //                     product.description &&
//     //                     product.price &&
//     //                     product.quantity
//     //                 ) {
//     //                     products.push(product);
//     //                 }
//     //             },
//     //         },
//     //         template: `
//     //     <v-app>
//     //       <EditProduct
//     //         ref="dialog"
//     //         v-model="dialog"
//     //       />
//     //     </v-app>
//     //   `,
//     //     });
//     //     wrapper = mount(App, {
//     //         localVue,
//     //         vuetify,
//     //         attachToDocument: true,
//     //     });
//     // });
//     const wrapper = mount(EditProduct)

//     it("should edit product", async () => {
//         wrapper.setData({ dialog: true });
//         await wrapper.vm.$nextTick();
//         wrapper.setProps({
//             product: {
//                 name: "sdfsdfsdfsf",
//                 description: "sdfsdfs",
//                 price: 32,
//                 quantity: 21,
//             },
//         });
//         await wrapper.vm.$nextTick();
//         wrapper.setData({
//             editedProduct: {
//                 name: "sdfsdfsdfsf",
//                 description: "sdfsdfs",
//                 price: 32,
//                 quantity: 21,
//             },
//         });
//         expect(wrapper.vm.editedProduct).toBe(true);
//         // let name = await wrapper.findComponent('[data-testid="productName"]');
//         // name.element.value = "jhjkhjk";
//         // name.trigger("input");

//         // let description = wrapper.findComponent(
//         //     '[data-testid="productDescription"]'
//         // );
//         // description.element.value = "dfsdf";
//         // description.trigger("input");

//         // let price = wrapper.findComponent('[data-testid="productPrice"]');
//         // price.element.value = 32;
//         // price.trigger("input");

//         // let quantity = wrapper.findComponent('[data-testid="productQuantity"]');
//         // quantity.element.value = 12;
//         // quantity.trigger("input");

//         // expect(
//         //     wrapper.findComponent('[data-testid="productName"]').element.value
//         // ).toBe("jhjkhjk");
//         // expect(
//         //     wrapper.findComponent('[data-testid="productDescription"]').element
//         //         .value
//         // ).toBe("dfsdf");
//         // expect(
//         //     wrapper.findComponent('[data-testid="productPrice').element.value
//         // ).toBe(32);
//         // expect(
//         //     wrapper.findComponent('[data-testid="productQuantity"]').element
//         //         .value
//         // ).toBe(12);

//         // wrapper.setData({ length: products.length });
//         // let length = wrapper.vm.length;
//         // // let length = products.length;

//         // wrapper.findAll('[data-testid="dialog-add-button"]').trigger("click");
//         // let product = {
//         //     name: name.element.value,
//         //     description: description.element.value,
//         //     price: price.element.value,
//         //     quantity: quantity.element.value,
//         // };
//         // await wrapper.vm.addProduct(product);
//         // expect(products.length).toBe(length + 1);

//         // expect(
//         //     wrapper.findAll('[data-testid="dialog-add-button"]').exists()
//         // ).toBe(true);

//         // expect(
//         //     wrapper.find('[data-testid="dialog-close-button"]').exists()
//         // ).toBe(true);
//     });
// });
