describe('Veggy - Home Screen', () => {
    it('should have componet', async () => {

        const PRODUCT_COMPONENT = '//*[@id="root"]/div/main/div/div/div[1]';
        const component = await $(PRODUCT_COMPONENT);
        expect(component).toBeExisting();
    });

    it('should not have componet', async () => {

        const PRODUCT_COMPONENT = '//*[@id="root"]/div/main/div/div/div[1]';
        const component = await $(PRODUCT_COMPONENT);
        expect(component).toBeFalsy();
    });
});