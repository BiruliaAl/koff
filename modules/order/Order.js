import { addContainer } from '../addContainer';

export class Order {
    static instance = null;

    constructor() {
        if(!Order.instance) {
            Order.instance = this;
            this.element = document.createElement('order');
            this.element.classList.add('order');

            this.containerElement = addContainer(this.element, 'order__container');
            this.isMounted = false;
        }

        return Order.instance
    }

    mount(parent) {
        if(this.isMounted) {
            return;
        }

        this.containerElement.insertAdjacentHTML('beforeend', this.getHTML());
        
        parent.append(this.element);
        this.isMounted = true;
    }

    unmount() {
        this.element.remove();
        this.isMounted = false;
    } 

    getHTML() {
        return `
            <div class="order__header">
            <h2 class="order__header-title">Заказ успешно размещен</h2>
            <p class="order__header-price">20&nbsp;000&nbsp;₽</p>
            </div>
            <p class="order__article">№43435</p>
            <h3 class="order__subtitle">Данные доставки</h3>
            <table class="order__table">
                <tr class="order__table-row">
                <td class="order__table-field">Получатель</td>
                <td class="order__table-value">Иванов Петр Александрович</td>
                </tr>
                <tr class="order__table-row">
                <td class="order__table-field">Телефон</td>
                <td class="order__table-value">+7 (737) 346 23 00</td>
                </tr>
                <tr class="order__table-row">
                <td class="order__table-field">E-mail</td>
                <td class="order__table-value">Ivanov84@gmail.com</td>
                </tr>
                <tr class="order__table-row">
                <td class="order__table-field">Адрес доставки</td>
                <td class="order__table-value">Москва, ул. Ленина, 21, кв. 33</td>
                </tr>
                <tr class="order__table-row">
                <td class="order__table-field">Способ оплаты</td>
                <td class="order__table-value">Картой при получении</td>
                </tr>
                <tr class="order__table-row">
                <td class="order__table-field">Способ получения</td>
                <td class="order__table-value">Доставка</td>
                </tr>
            </table>
            <button class="order__btn" type="button">На главную</button>
        `
    }
}