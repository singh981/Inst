import {generateClient} from 'aws-amplify/api';
import {getUser} from '../graphql/queries';

const client = generateClient();

export const fetchUserFromDynamoDb = async (id: string) => {
    try {
        const user = await client.graphql({
            query: getUser,
            variables: {id},
        });

        return user.data.getUser;
    } catch (e) {
        console.error(e);
    }
};
