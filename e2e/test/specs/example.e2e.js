describe('Veggy - Home Screen', () => {
    it('should have component', async () => {

        const PRODUCT_COMPONENT = '//*[@id="root"]/div/main/div/div/div[1]';
        const component = await $(PRODUCT_COMPONENT);
        expect(component).toBeExisting();
    });

    it('should not have component', async () => {

        const PRODUCT_COMPONENT = '//*[@id="root"]/div/main/div/div/div[1]';
        const component = await $(PRODUCT_COMPONENT);
        expect(component).toBeFalsy();
    });
});