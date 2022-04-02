import { PassportStrategy } from '@nestjs/passport'
import { Strategy, Profile } from 'passport-facebook'
import { config } from 'dotenv'

import { Injectable } from '@nestjs/common'

config()

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
      callbackURL: process.env.FB_CALLBACK_URL,
      scope: 'email',
      profileFields: ['email', 'displayName', 'picture.type(large)'],
    })
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void
  ): Promise<any> {
    const { displayName, emails, photos } = profile
    const displayArray = displayName.split(' ')
    const user = {
      email: emails[0].value,
      firstName: displayArray[0],
      lastName: displayArray[displayArray.length - 1],
      picture: photos[0].value,
    }
    done(null, user)
  }
}
