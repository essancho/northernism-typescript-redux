import * as ItemCreators from "./items-action";
import * as typeCreators from "./type-actions";
import * as userCreators from "./users-actions";
import * as commentsCreators from "./comments-actions";
export default {
    ...ItemCreators,
    ...typeCreators,
    ...userCreators,
    ...commentsCreators,
};
