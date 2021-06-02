export class Waiting {
    constructor(
        public WaitingID?: number,
        public CodeUser?: number,
        public CodeLimit?: number,
        public NameLimit?: string,
        public CodeTime?: number,
        public NameTime?: string,
        public CodeMin?: number,
        public CodeSector?: number,
        public NameSector?: string
    ) { }
}
