/*
  Warnings:

  - You are about to drop the column `finishing_date` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `starting_date` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "finishing_date",
DROP COLUMN "starting_date";
