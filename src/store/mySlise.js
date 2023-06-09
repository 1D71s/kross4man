import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        product: [
            {id: 1, name: 'Кросівки new balance 530 white silver navy - mr530sg', img: ['1.webp'], category: 'nike', price: 2500, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 2, name: 'Кросівки nike air zoom spiridon cage 2 stussy fossil - cq5486-200', img: ['2.webp'], category: 'nike', price: 2500, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 3, name: 'Кросівки adidas originals niteball cloud white core black silver - h67360', img: ['3.webp'], category: 'nike', price: 2700, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 4, name: 'Кеди низькі vans old skool classic black white', img: ['4.webp'], category: 'nike', price: 1000, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 5, name: "Кросівки Nike Air Force 1 Low 07 White", img: ['5.webp'], category: 'nike', price: 2000, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 6, name: 'Кросівки New Balance 550 White Green', img: ['6.webp'], category: 'nike', price: 2500, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 7, name: 'Кроссовки Adidas Yeezy Boost 350 V2 Black - FU9006', img: ['7.webp'], category: 'nike', price: 2000, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 8, name: 'Кросівки Adidas Yeezy Boost 700 V2 Vanta - FU6684', img: ['8.webp'], category: 'nike', price: 2500, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 9, name: 'Кросівки Under Armour Scorpio Running Shoes Black', img: ['9.webp'], category: 'nike', price: 2600, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 10, name: 'Кросівки Under Armour Scorpio Black Orange', img: ['10.webp'], category: 'nike', price: 2600, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
        ],
        basket: [],
        orders: [],
    },
    reducers: {
        addItemToBasket(state, action) {
            const item = state.product.find(i => i.id === action.payload.id);
            const existingItem = state.basket.find(i => i.id === action.payload.id);
            const priceItem = item.price

            if (existingItem) {
                const updatedBasket = state.basket.map(item => {
                        if (item.id === action.payload.id) {
                            return { ...item, count: item.count + 1, price: item.price + priceItem};
                        }
                        return item;
                });
        
                return { ...state, basket: updatedBasket };

            } else {
                const updatedBasket = [...state.basket, { ...item, count: 1, size: item.entrySize }];
        
                return { ...state, basket: updatedBasket };
            }
        },
        deleteFromBasket(state, action) {
            state.basket = state.basket.filter(item => item.id !== action.payload.id)
        }, 
        addSizeItem(state, action) {
            const item = state.product.find(i => i.id === action.payload.id);

            item.entrySize = action.payload.i
        },
    }
})


export const { addItemToBasket, deleteFromBasket, addSizeItem } = shopSlice.actions
export default shopSlice.reducer