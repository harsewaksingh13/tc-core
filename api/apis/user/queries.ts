import { BaseQueries } from "../base/queries";

const add = `
    mutation loginMutation($input: UserInput) {
        authenticateUser(input: $input) {
            accessToken
            refreshToken
            user {
                _id
                alias
                email
                fname
                lname
            }
        }
    }
`;

const remove = ``;
const get = ``;
const list = ``;
const update = ``;

const userQueries : BaseQueries = { add, remove, get, list, update };

const login = ` mutation loginMutation($input: UserInput) {
    authenticateUser(input: $input) {
        accessToken
        refreshToken
        user {
            _id
            alias
            email
            fname
            lname
        }
    }
}`;

const authQueries = { login , register : '' };

export { userQueries, authQueries };