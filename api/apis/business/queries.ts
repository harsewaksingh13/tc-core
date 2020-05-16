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

const businessQueries : BaseQueries = { add, remove, get, list, update };

export {businessQueries};