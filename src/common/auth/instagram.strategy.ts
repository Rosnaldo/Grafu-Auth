import { PassportStrategy } from '@nestjs/passport'
import { Strategy, Profile } from 'passport-instagram'
import { config } from 'dotenv'

import { Injectable } from '@nestjs/common'

config()

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
  constructor() {
    super({
      clientID: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      callbackURL: process.env.INSTAGRAM_CALLBACK_URL,
      scope: 'user_profile',
      profileFields: ['email'],
    })
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void
  ): Promise<any> {
    // const { name, emails, photos } = profile
    // const user = {
    //   email: emails[0].value,
    //   firstName: name.givenName,
    //   lastName: name.familyName,
    //   picture: photos[0].value,
    // }
    done(null, profile)
  }
}
