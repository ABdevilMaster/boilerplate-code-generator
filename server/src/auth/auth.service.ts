import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../db/data-source';
import { User } from './user.entity';

const userRepo = AppDataSource.getRepository(User);

const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-production';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'change-refresh-secret';
const ACCESS_EXPIRES = '15m';
const REFRESH_EXPIRES = '7d';

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

function generateTokens(userId: string, role: string): TokenPair {
  const accessToken = jwt.sign({ sub: userId, role }, JWT_SECRET, { expiresIn: ACCESS_EXPIRES });
  const refreshToken = jwt.sign({ sub: userId }, JWT_REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES });
  return { accessToken, refreshToken };
}

export async function register(email: string, password: string, name: string) {
  const exists = await userRepo.findOneBy({ email });
  if (exists) throw new Error('Email already registered');

  const hashed = await bcrypt.hash(password, 12);
  const user = userRepo.create({ email, password: hashed, name });
  const tokens = generateTokens(user.id, user.role);
  user.refreshToken = tokens.refreshToken;
  await userRepo.save(user);

  return { user: { id: user.id, email: user.email, name: user.name, role: user.role }, ...tokens };
}

export async function login(email: string, password: string) {
  const user = await userRepo.findOneBy({ email });
  if (!user || !user.isActive) throw new Error('Invalid credentials');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  const tokens = generateTokens(user.id, user.role);
  user.refreshToken = tokens.refreshToken;
  await userRepo.save(user);

  return { user: { id: user.id, email: user.email, name: user.name, role: user.role }, ...tokens };
}

export async function refreshTokens(token: string) {
  try {
    const payload = jwt.verify(token, JWT_REFRESH_SECRET) as { sub: string };
    const user = await userRepo.findOneBy({ id: payload.sub });
    if (!user || user.refreshToken !== token) throw new Error('Invalid refresh token');

    const tokens = generateTokens(user.id, user.role);
    user.refreshToken = tokens.refreshToken;
    await userRepo.save(user);

    return tokens;
  } catch {
    throw new Error('Invalid refresh token');
  }
}

export async function logout(userId: string) {
  await userRepo.update(userId, { refreshToken: undefined });
}

export function verifyAccess(token: string) {
  return jwt.verify(token, JWT_SECRET) as { sub: string; role: string };
}
