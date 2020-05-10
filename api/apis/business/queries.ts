import { BaseQueries } from "../base/api";

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

const BusinessQueries : BaseQueries = { add, remove, get, list, update };

export default BusinessQueries;