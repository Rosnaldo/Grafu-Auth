import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserGoogleController } from './controller/google.controller'
import { UserFacebookController } from './controller/facebook.controller'
import { UserInstagramController } from './controller/instagram.controller'
import { UserCreateRepository } from './repository/create.repository'
import { UserSchema } from './schema/user'
import { UserMapper } from './service/mapper'

export const UserMongooseModule = MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
@Module({
  imports: [UserMongooseModule],
  providers: [UserCreateRepository, UserMapper],
  controllers: [UserGoogleController, UserFacebookController, UserInstagramController],
  exports: [],
})
export class UserModule {}
