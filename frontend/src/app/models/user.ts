export class User {

    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public phone_number: string,
        public role: string,
        public password: string
    ) {}

}