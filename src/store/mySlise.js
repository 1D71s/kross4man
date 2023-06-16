import { createSlice } from "@reduxjs/toolkit";
import DBprod from "../Db";

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        product: [...DBprod],
        basket: [],
        orders: [],
        renderItem: {},
        activeButtonSort: 'sortToNew',
        activBrand: 'all',
        categoryBrand: ['all', 'adidas', 'nike', 'new balance', 'vans', 'under armour']
    },
    reducers: {
        addItemToBasket(state, action) {
            const item = state.product.find(i => i.id === action.payload.id);
            const existingItem = state.basket.find(i => i.id === action.payload.id / action.payload.entrySize);
            const priceItem = item.price * action.payload.count;
            
            const newItem = {
                id: action.payload.id / action.payload.entrySize,
                img: item.img,
                name: item.name,
                price: item.price * action.payload.count,
                count: action.payload.count,
                size: action.payload.entrySize,
            };
            
            if (existingItem) {
                const updatedBasket = state.basket.map(item => {
                    if (item.id === action.payload.id / action.payload.entrySize) {
                        return { ...item, count: item.count + action.payload.count, price: item.price + priceItem };
                    }
                    return item;
                });
            
                return { ...state, basket: updatedBasket };
            } else {
                const updatedBasket = [...state.basket, newItem];
                return { ...state, basket: updatedBasket };
            }
        },
        deleteFromBasket(state, action) {
            state.basket = state.basket.filter(item => item.id !== action.payload.id)
        }, 
        addSizeItem(state, action) {
            const item = state.product.find(i => i.id === action.payload.id);
            
            state.renderItem.entrySize = action.payload.i
            item.entrySize = action.payload.i
        },
        updateEntrySize: (state, action) => {
            state.product.forEach((product) => {
              product.entrySize = product.size[0];
            });
        },
        renderToItem(state, action) {
            const item = state.product.find(i => i.id === Number(action.payload.id));
            state.renderItem = item
            state.renderItem.entrySize = item.size[0] 
        },
        sortOld(state) {
            state.product.sort((a, b) => b.id - a.id);
            state.activeButtonSort = 'sortToOld'
        },
        sortNew(state) {
            state.product.sort((a, b) => a.id - b.id)
            state.activeButtonSort = 'sortToNew'

        }, 
        sortPriceD(state) {
            state.product.sort((a, b) => a.price - b.price);
            state.activeButtonSort = 'sortToPriceDown'
        },
        sortPriceU(state) {
            state.product.sort((a, b) => b.price - a.price);
            state.activeButtonSort = 'sortToPriceUp'
        },
        toActivBrand(state, action) {
            state.activBrand = action.payload.brand
        }
    }
})


export const { addItemToBasket, deleteFromBasket, addSizeItem, updateEntrySize, renderToItem, sortOld, sortNew, sortPriceD, sortPriceU, toActivBrand } = shopSlice.actions
export default shopSlice.reducer