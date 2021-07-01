import { getClients } from './data-business';
import { getClientElement } from './client-business';

const printClientsAccounts = () => {
    const clients = getClients();
    const ol = document.createElement("ol");
    for (let client of clients) {
        const element = getClientElement(client);
        ol.appendChild(element);
        ol.innerHTML += '<hr>';
    }
    document.getElementById("root").appendChild(ol);
}

export { printClientsAccounts };