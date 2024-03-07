/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */



const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb');
const { DynamoDB } = require('@aws-sdk/client-dynamodb');

const dynamodb = DynamoDBDocument.from(new DynamoDB());

const tableName = `User-${process.env.API_INSTAGRAMNOTJUSTDEV_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

const checkUserExists = async sub => {
    const params = {
        TableName: tableName,
        Key: {
            id: sub,
        },
    };

    try {
        const data = await dynamodb.get(params);
        console.log('checkUserExists: ', data);
        // !! effectively converts any JavaScript value to a boolean.
        return !!data.Item;
    } catch (err) {
        console.log('ERROR (PostConfirmationLambda) checkUserExists: ', err);
        return null;
    }
};

const addUser = async user => {
    const params = {
        TableName: tableName,
        Item: {
            ...user,
        },
    };

    try {
        const data = await dynamodb.put(params);
        console.log('User Successfully added: ', data);
        return data;
    } catch (err) {
        console.log('ERROR (PostConfirmationLambda) addUser: ', err);
        return null;
    }
};

exports.handler = async (event, context) => {
    const user = {
        id: event.request.userAttributes.sub,
        avatarUrl:
            'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg',
        bio: 'This is a default bio',
        createdAt: new Date().toISOString(),
        email: event.request.userAttributes.email,
        name: event.request.userAttributes.name,
        numberOfFollowers: 0,
        numberOfFollowing: 0,
        numberOfPosts: 0,
        updatedAt: new Date().toISOString(),
        username: event.userName,
        phoneNumber: event.request.userAttributes.phone_number,
        __typename: 'User',
    };
    console.log('Post Confirmation event: ', event);

    !(await checkUserExists(user.id))
        ? await addUser(user)
        : console.log(`User ${user.id} already exists`);

    return event;
};
