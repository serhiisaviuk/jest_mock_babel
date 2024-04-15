describe('test', () => {

    let service;

    const mockCreate = jest.fn();

    beforeAll(async () => {

        jest.mock("../src/UserRepository.js", () => {
            return () => {
                return {
                    create: mockCreate
                }
            }
        });

        const UserService = (await import("../src/UserService.js")).default;
        service = new UserService();

    });

    it("User create", async () => {

        mockCreate.mockImplementation(()=>{
            console.log('Im a MOCK');
        })

        service.create("TEST");

        expect(mockCreate).toHaveBeenCalled()
    })
});
