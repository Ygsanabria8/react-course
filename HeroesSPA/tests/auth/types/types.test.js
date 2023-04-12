import { types } from "../../../src/auth";

describe('Tests on Types', () => {

    test('should return types', () => {

        expect(types).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout',
        });

    });
});