const userSchema = (table) => {
  table.uuid("id").primary().unique();
  table.string("name").notNullable();
  table.string("surname").notNullable();
  table.string("avatar", 99999);
  table.string("email").unique().notNullable();
  table.string("password").unique().notNullable();
  table.string("gender").notNullable();
  table.date("DOB").notNullable();
  table.string("contact_number");

  table.boolean("email_verified").defaultTo(false);
  table.boolean("isAdmin").notNullable().defaultTo(false);
  table.timestamps(true, true);
};

module.exports = userSchema;
