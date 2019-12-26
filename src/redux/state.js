let state = {
    dialogsPage: {
        dialogItem: [
            {id: 1, name: 'Anna Dogoda'},
            {id: 2, name: 'Arthur Jamison'},
            {id: 3, name: 'Winona Oak'},
            {id: 4, name: 'Den Luis'},
            {id: 5, name: 'Sam Smith'}
        ],
        dialogMessages: [
            {id: 1, message: 'Roma sit amet.'},
            {id: 2, message: 'Hello dolor sit.'},
            {id: 3, message: 'This is true ipsum dolor sit amet.'},
            {id: 4, message: 'Everything I do, I do it for you! ipsum dolor sit.'},
            {id: 5, message: 'Lorem sit amet.'}
        ]
    },
    postsPage: {
        postsData: [
            {id: 1, likesCount: 12, text: 'Hey, why am I so happy?'},
            {id: 2, likesCount: 10, text: 'This is our new program for helping people.'}
        ]
    }
};

export let sendMessage = (textMessage) => {
    let newMessage = {
        id: state.dialogsPage.dialogMessages.length + 1,
        message: textMessage
    };
    state.dialogsPage.dialogMessages.push(newMessage)
};

export let sendPost = (textPost) => {
    let newPost = {
        id: state.postsPage.postsData.length + 1,
        likesCount: 0,
        text: textPost
    };
    state.postsPage.postsData.push(newPost)
};

export default state;