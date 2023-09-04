import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('first', () => { 
    test('verify login', () => { 
        const state = authReducer({logged: false}, {})
        expect(state).toEqual({logged: false})
    })
    test('verificar el login', () => { 
        const action = {
            type: types.login,
            payload: {
                id: '123',
                user: 'ale'
            }
        }
        
    })
 })