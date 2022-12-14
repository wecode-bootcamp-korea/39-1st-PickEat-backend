const { database } = require("./dataSource");

const getProductsByParameter = async (result) => {
  const products = await database.query(
    `SELECT
          P.id,
          P.title,
          P.price,
          P.thumbnail_image_url AS image,
          C.name AS category
    FROM 
          products AS P
    LEFT JOIN
          categories AS C
    ON 
          C.id = P.category_id
    LEFT JOIN
          product_types AS PT
    ON
          PT.id = C.product_type_id
    ${result}
     `
  );
  return products;
};

module.exports = {
  getProductsByParameter,
};
