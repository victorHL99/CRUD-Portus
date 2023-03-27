-- CreateTable
CREATE TABLE "Forms_Answers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Forms_Answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Forms_Answers_email_key" ON "Forms_Answers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Forms_Answers_cpf_key" ON "Forms_Answers"("cpf");
