
export type blocksByTimestampResponse = {
    data: {
        status: string;
        message: string;
        result: string;
    }
};

export type TransactionBlockNumber = {
    blockHash: string,
    blockNumber: string,
    from: string,
    gas: string,
    gasPrice: string,
    hash: string,
    input: string, 
    nonce: string, 
    to: string,
    transactionIndex: string, 
    value: string,
    type: string,
    v: string,
    r: string,
    s: string,
    timestamp?: number;
}

export type BlockEtherDetail = {
    baseFeePerGas: string,
    difficulty: string,
    extraData: string,
    gasLimit: string,
    gasUsed:string,
    hash: string,
    logsBloom: string,
    miner: string,
    mixHash: string,
    nonce: string,
    number: string,
    parentHash: string,
    receiptsRoot: string,
    sha3Uncles: string,
    size: string,
    stateRoot: string,
    timestamp: string,
    totalDifficulty: string,
    transactions?: TransactionBlockNumber [] | number,
    transactionsRoot: string,
    uncles: string []
}

export type BlockEtherDetailList = BlockEtherDetail[]

export type EthGetBlockByNumberResponse = {
    data: {
        jsonrpc: string,
        id: number,
        result: BlockEtherDetail
    }
}


export type ResponseAccountTxList = {
    result: TransactionBlockNumber[];
    message: string;
    status: string;
}