import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { GoogleStrategy } from './common/auth/google.strategy'
import { FacebookStrategy } from './common/auth/facebook.strategy'
import { UserModule } from './module/user/user.module'
import { InstagramStrategy } from './common/auth/instagram.strategy'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/bettrads',
      }),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [GoogleStrategy, FacebookStrategy, InstagramStrategy],
})
export class AppModule {}
