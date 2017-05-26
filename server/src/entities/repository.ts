export class Repository {
    constructor(public name: string,
                public url: string,
                public credentials: string,
                public branch: string,
                public projectDetailId: number,
                public id?: number) {
    }
}