import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    UserModule,
    PassportModule.register({defaultStrategy:'local'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET || '123456789',
      signOptions: {expiresIn: '60s'}
    })],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
  exports: [AuthService]
})
export class AuthModule {}