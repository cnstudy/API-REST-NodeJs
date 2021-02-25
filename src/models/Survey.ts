import {Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

class Survey {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id){
            this.id = uuid();
        }
    }
}

export { Survey }
