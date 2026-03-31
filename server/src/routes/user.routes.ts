import { Router, Response } from 'express';
import { AppDataSource } from '../db/data-source';
import { User } from '../auth/user.entity';
import { AuthRequest } from '../middleware/auth.middleware';

export const userRouter = Router();
const userRepo = AppDataSource.getRepository(User);

userRouter.get('/me', async (req: AuthRequest, res: Response) => {
  const user = await userRepo.findOneBy({ id: req.userId });
  if (!user) return res.status(404).json({ error: 'User not found' });
  const { password, refreshToken, ...safe } = user;
  res.json(safe);
});

userRouter.get('/', async (req: AuthRequest, res: Response) => {
  if (req.userRole !== 'admin') return res.status(403).json({ error: 'Admin only' });
  const users = await userRepo.find({ select: ['id', 'email', 'name', 'role', 'isActive', 'createdAt'] });
  res.json(users);
});
