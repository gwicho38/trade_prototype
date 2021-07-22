class stock {
    constructor(account, symbol) {
        this.account = account;
        this.symbol = symbol;
        this.price = 0;
        this.quantity = 0;
        this.total = 0;
    }

    get account() {
        return this._account;
    }

    set account(account) {
        this._account = account;
    }

    get symbol() {
        return this._symbol;
    }

    set symbol(symbol) {
        this._symbol = symbol;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(quantity) {
        this._quantity = quantity;
    }

    get total() {
        return this._total;
    }

    set total(total) {
        this._total = total;
    }
}

module.exports = stock;