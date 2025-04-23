import { randomUUID } from 'crypto';
import { desc, relations, sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const id = () =>
  text('id')
    .primaryKey()
    .$default(() => randomUUID());

const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();

export const users = sqliteTable('users', {
  id: id(),
  createdAt: createdAt(),
  email: text('email').unique().notNull(),
  password: text('password').notNull()
});

export const food = sqliteTable('food', {
  id: id(),
  createdAt: createdAt(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  calories: integer('calories').notNull(),
  protein: integer('protein').notNull(),
  fat: integer('fat').notNull(),
  carbohydrates: integer('carbs').notNull(),
  sodium: integer('sodium').notNull(),
  sugar: integer('sugar').notNull(),
  potassium: integer('potassium').notNull(),
  magnesium: integer('magnesium').notNull(),
  calcium: integer('calcium').notNull(),
  iron: integer('iron').notNull(),
  zinc: integer('zinc').notNull(),
  vitaminA: integer('vitamin_a').notNull(),
  vitaminC: integer('vitamin_c').notNull(),
  vitaminD: integer('vitamin_d').notNull(),
  vitaminE: integer('vitamin_e').notNull(),
  vitaminK: integer('vitamin_k').notNull(),
  vitaminB1: integer('vitamin_b1').notNull(),
  vitaminB2: integer('vitamin_b2').notNull(),
  vitaminB3: integer('vitamin_b3').notNull(),
  vitaminB5: integer('vitamin_b5').notNull(),
  vitaminB6: integer('vitamin_b6').notNull(),
  vitaminB7: integer('vitamin_b7').notNull(),
  vitaminB9: integer('vitamin_b9').notNull(),
  vitaminB12: integer('vitamin_b12').notNull(),
  vitaminB13: integer('vitamin_b13').notNull(),
  vitaminB15: integer('vitamin_b15').notNull(),
  vitaminB17: integer('vitamin_b17').notNull(),
  vitaminB18: integer('vitamin_b18').notNull()
});
