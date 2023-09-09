import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('first', () => {
    test('test logged', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })
    test('test logged true', () => {
        const state = authReducer({ logged: true }, {})
        expect(state).toEqual({ logged: true })
    })
    test('test login with action', () => {
        const action = {
            type: types.login,
            user: {
                id: '123',
                user: 'ale'
            }
        }
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    })
    test('test logout', () => {
        const action = {
            type: types.logout,

        }
        const state = authReducer({ logged: true }, action)
        expect(state).toEqual({
            logged: false
        })

    })
})