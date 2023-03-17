import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import AddProvider from "@/components/providers/addProvider.vue";
import VeeValidate from "vee-validate";
import providers from "../providers";

describe("Addprovider", () => {
    let localVue;
    let vuetify;
    let wrapper;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(VeeValidate);

        vuetify = new Vuetify();

        const App = localVue.component("App", {
            components: { AddProvider },
            data() {
                return {
                    addDialog: false,
                    length: providers.length,
                    provider: {
                        name: "",
                        email: "",
                        phoneNumber: null,
                        address: null,
                    },
                };
            },
            methods: {
                addition: (x, y) => {
                    return x + y;
                },
                addprovider: async (provider) => {
                    if (
                        provider.name &&
                        provider.email &&
                        provider.phoneNumber &&
                        provider.address
                    ) {
                        providers.push(provider);
                    }
                },
            },
            template: `
        <v-app>
          <AddProvider
            ref="dialog"
            v-model="addDialog"
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
    it("should add provider", async () => {

        wrapper.setData({ addDialog: true });
        await wrapper.vm.$nextTick();

        let name = await wrapper.find('[data-testid="providerName"]');
        name.element.value = "jhjkhjk";
        name.trigger("input");
        let email = wrapper.findComponent(
            '[data-testid="providerEmail"]'
        );
        email.element.value = "dfsdf";
        email.trigger("input");

        let phoneNumber = wrapper.findComponent('[data-testid="providerPhone"]');
        phoneNumber.element.value = 32;
        phoneNumber.trigger("input");

        let address = wrapper.findComponent('[data-testid="providerAddress"]');
        address.element.value = 12;
        address.trigger("input");

        expect(
            wrapper.findComponent('[data-testid="providerName"]').element.value
        ).toBe("jhjkhjk");
        expect(
            wrapper.findComponent('[data-testid="providerEmail"]').element
                .value
        ).toBe("dfsdf");
        expect(
            wrapper.findComponent('[data-testid="providerPhone').element.value
        ).toBe(32);
        expect(
            wrapper.findComponent('[data-testid="providerAddress"]').element
                .value
        ).toBe(12);

        wrapper.setData({ length: providers.length });
        let length = wrapper.vm.length;
        // let length = providers.length;

        wrapper.findAll('[data-testid="dialog-add-button"]').trigger("click");
        let provider = {
            name: name.element.value,
            email: email.element.value,
            phoneNumber: phoneNumber.element.value,
            address: address.element.value,
        };
        await wrapper.vm.addprovider(provider);
        expect(providers.length).toBe(length + 1);

        expect(
            wrapper.findAll('[data-testid="dialog-add-button"]').exists()
        ).toBe(true);

        expect(
            wrapper.find('[data-testid="dialog-close-button"]').exists()
        ).toBe(true);
    });
});
