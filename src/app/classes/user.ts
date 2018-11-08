export class User {
    firstName: string;
    lastName: string;
    photoUrl: string;
    uid: string;

    constructor({ firstName, lastName, photoUrl, uid }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.photoUrl = photoUrl;
        this.uid = uid;
    }
}
