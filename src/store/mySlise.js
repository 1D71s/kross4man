import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        product: [
            {id: 1, name: 'Кросівки new balance 530 white silver navy - mr530sg', img: ['1.webp'], imgs: ['1.webp', '1.1.webp', '1.2.webp', '1.3.webp', '1.4.webp', '1.5.webp'], category: 'nike', price: 2500, description: 'Надихніться стилем нульових з моделлю 530! Спортивні моделі періоду 90-х і 2000-х років створили унікальну спортивну естетику, яка вже в ті роки вийшла за межі спорту і міцно зміцнилася на вулицях міст. Сьогодні, підтримуючи світові тренди, ми знову звернулися до наших архівів, щоб подарувати вам стильну модель для яскравих образів в міських буднях. Верх моделі виконаний з легких сітчастих матеріалів, доповнений щільними матеріалами для додаткової підтримки стопи і відображення автентичності стилю 2000-х. Проміжна підошва ABZORB®, поглинаючи ударні навантаження, наповнить кожен Ваш крок мякістю і подбає про Ваш комфорт.', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 2, name: 'Кросівки nike air zoom spiridon cage 2 stussy fossil - cq5486-200', img: ['2.webp'], imgs: ['2.webp'], category: 'nike', price: 2500, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 3, name: 'Кросівки adidas originals niteball cloud white core black silver - h67360', img: ['3.webp'], imgs: ['3.webp'], category: 'nike', price: 2700, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 4, name: 'Кеди низькі vans old skool classic black white', img: ['4.webp'], imgs: ['4.webp'], category: 'nike', price: 1000, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 5, name: "Кросівки Nike Air Force 1 Low 07 White", img: ['5.webp'], imgs: ['5.webp'], category: 'nike', price: 2000, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 6, name: 'Кросівки New Balance 550 White Green', img: ['6.webp'], imgs: ['6.webp'], category: 'nike', price: 2500, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 7, name: 'Кроссовки Adidas Yeezy Boost 350 V2 Black - FU9006', img: ['7.webp'], imgs: ['7.webp'], category: 'nike', price: 2000, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 8, name: 'Кросівки Adidas Yeezy Boost 700 V2 Vanta - FU6684', img: ['8.webp'], imgs: ['8.webp'], category: 'nike', price: 2500, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 9, name: 'Кросівки Under Armour Scorpio Running Shoes Black', img: ['9.webp'], imgs: ['9.webp'], category: 'nike', price: 2600, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
            {id: 10, name: 'Кросівки Under Armour Scorpio Black Orange', img: ['10.webp'], imgs: ['10.webp'], category: 'nike', price: 2600, description: 'Lorem ', size: [38, 39, 40, 41, 42, 43, 44, 45], entrySize: 0
            },
        ],
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
        }
    }
})


export const { addItemToBasket, deleteFromBasket, addSizeItem, updateEntrySize, renderToItem } = shopSlice.actions
export default shopSlice.reducer