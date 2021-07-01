const getNodeStyle = (account) => {
    if (account.money < 0) {
        return "color: red";
    }
    return "color: blue";
}

const getAvatar = (client) => {
    const img = document.createElement('img');
    img.src = client.avatar;
    return img;
}

export { getNodeStyle, getAvatar };
