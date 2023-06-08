// Импортируем все картинки из папки
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Импортируем все картинки из папки
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg|webp)$/));


export default images;