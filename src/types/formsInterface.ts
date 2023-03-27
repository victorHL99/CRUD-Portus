import { Forms_Answers } from '@prisma/client';

export type Forms = Omit<Forms_Answers, 'id' | 'created_at' | 'updated_at'>;
