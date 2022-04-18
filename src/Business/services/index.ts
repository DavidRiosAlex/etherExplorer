import axios from 'axios';
import { blocksByTimestampResponse, EthGetBlockByNumberResponse, ResponseAccountTxList } from '../types';

const api = axios.create({
    baseURL: process.env.REACT_APP_ETHERSCAN_URL,
    params: {
        apikey: process.env.REACT_APP_ETHERSCAN_KEY,
    },
});

export const fetchBlockByTimestamp = (timestamp: number): Promise<blocksByTimestampResponse> => api.get(`api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before`);
export const fetchDetailBlock = (hexNumberBlock: string): Promise<EthGetBlockByNumberResponse> => api.get(`api?module=proxy&action=eth_getBlockByNumber&tag=${hexNumberBlock}&boolean=true`);

export const fetchAddressTransactions = (hashAddress: string): Promise<ResponseAccountTxList> => api.get(`api?module=account&action=txlist&address=${hashAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc`);

