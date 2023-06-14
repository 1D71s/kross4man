import { createSlice } from "@reduxjs/toolkit";
import DBprod from "../Db";

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        product: [...DBprod],
        basket: [],
        orders: [],
        renderItem: {}
    },
    reducers: {
        addItemToBasket(state, action) {
            const item = state.product.find(i => i.id === action.payload.id);
            const existingItem = state.basket.find(i => i.id === action.payload.id / action.payload.entrySize);
            const priceItem = item.price;
            
            const newItem = {
                id: action.payload.id / action.payload.entrySize,
                img: item.img,
                name: item.name,
                price: item.price,
                count: 1,
                size: action.payload.entrySize,
            };
            
            if (existingItem) {
                const updatedBasket = state.basket.map(item => {
                    if (item.id === action.payload.id / action.payload.entrySize) {
                        return { ...item, count: item.count + 1, price: item.price + priceItem };
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
        }
    }
})


export const { addItemToBasket, deleteFromBasket, addSizeItem, updateEntrySize, renderToItem } = shopSlice.actions
export default shopSlice.reducer