const productsSchema = (table) => {
  table.uuid("id").primary().unique();
  table.string("title").notNullable();
  table.string("desc").notNullable();
  table.float("price");
  table.boolean("sale").notNullable().defaultTo(false);

  table.json("images");
  table.timestamps(true, true);
};

module.exports = productsSchema;
