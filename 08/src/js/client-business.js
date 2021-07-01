import { getAccounts } from './data-business';
import { getClientAccountsElement } from './account-business';
import { getAvatar } from './style-business';

const getClientElement = (client) => {
    const allAccounts = getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }
    const node = getClientNode(client);
    const ul = getClientAccountsElement(clientAccounts);
    node.appendChild(ul);
    return node;
}

const getClientNode = (client) => {
    const li = document.createElement("li");
    li.appendChild(getAvatar(client));
    li.append(getFullName(client));
    return li;
}

const getFullName = (client) => {
    return client.first_name + " " + client.last_name;
}

export { getClientElement, getClientNode, getFullName };