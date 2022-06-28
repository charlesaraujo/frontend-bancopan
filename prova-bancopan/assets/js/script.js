import Modal from './modules/modal.js';
import Users from './modules/users.js';
import Form from './modules/form.js';

const url = 'https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users';

const modalWindow = new Modal('[data-modal="button"]', '[data-modal="modal"]', ['click']);
modalWindow.init();

const users = new Users(url, 'users');
users.init();

const form = new Form();
form.init();
