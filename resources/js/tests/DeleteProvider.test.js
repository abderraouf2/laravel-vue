import { mount, createLocalVue } from "@vue/test-utils";
import ProvidersList from "@/components/providers/providersList.vue";
import Vuetify from "vuetify";
import providers from "../providers";
import VeeValidate from "vee-validate";

describe("AddProduct", () => {
    let localVue;
    let vuetify;
    let wrapper;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(VeeValidate);
        vuetify = new Vuetify();

        const App = localVue.component("App", {
            components: { ProvidersList },
            data() {
                return {
                    length: providers.length,
                };
            },
            methods: {
                deleteprovider: (index) => {
                    providers.splice(
                        providers.findIndex(
                            (provider) => provider.id === index
                        ),
                        1
                    );
                },
            },
            template: `
              <v-app>
                <ProductList
                r   ef="dialog"
                    v-model="dialog"
                />
              </v-app>
            `,
        });
        wrapper = mount(App, {
            localVue,
            vuetify,
            attachToDocument: true,
        });
    });
    it("should delete product", async () => {
        wrapper.setData({ length: providers.length });
        // expect(wrapper.isVueInstance()).toBe(true);
        let length = wrapper.vm.length;
        wrapper.vm.deleteprovider(3);

        expect(providers.length).toBe(length - 1);
    });
});
