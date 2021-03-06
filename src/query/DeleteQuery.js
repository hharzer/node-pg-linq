import Query from "./Query.js";

export default class DeleteQuery extends Query {
    /**
     * @param {string} table
     * @param {DbContext} context
     */
    constructor(table, context) {
        super(table, context);
    }

    /**
     * @param {string|string[]} tables
     * @returns {DeleteQuery}
     */
    from(tables) {
        super.from(tables);
        return this;
    }

    /**
     * @param {string} name
     * @returns {DeleteQuery}
     */
    as(name) {
        super.as(name);
        return this;
    }

    /**
     * @param {function():boolean|function(*):boolean|function(*,*):boolean|function(*,*,*):boolean} statement
     * @param {*} variables
     * @returns {DeleteQuery}
     */
    where(statement, ...variables) {
        super.where(statement, variables);
        return this;
    }

    /**
     * @param {string} table
     * @param {function(e:QueryJoiner)} options
     * @returns {DeleteQuery}
     */
    join(table, options = undefined) {
        super.join(table, options);
        return this;
    }

    /**
     * @returns {string}
     */
    toString() {
        const from = this._tableNames;
        return `DELETE FROM ${from}${this._joinsSql}${this._where.toString()}`;
    }

    /**
     * Returns how many rows were affected
     * @returns {Promise<int>}
     */
    async run() {
        return (await super.run()).rowCount;
    }
}