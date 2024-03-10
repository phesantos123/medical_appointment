import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient({
     datasourceUrl: "postgresql://adm:adm@0.0.0.0:55000/medical_app?schema=public"
});


export { prismaClient }