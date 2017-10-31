import { Injectable } from '@angular/core';

@Injectable()
export class LedgerService {

    transactions: any[] = [];

    record(transaction: any) {
        this.transactions.push(transaction);
    }

    revertTo(index: number) {
        this.transactions = this.transactions.slice(0, index + 1);
    }

}
