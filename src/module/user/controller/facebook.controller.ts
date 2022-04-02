import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserCreateRepository } from 'src/module/user/repository/create.repository'
import { UserMapper } from 'src/module/user/service/mapper'

@Controller()
export class UserFacebookController {
  constructor(private readonly userCreateRepository: UserCreateRepository, private readonly userMapper: UserMapper) {}

  @Get('auth/facebook')
  @UseGuards(AuthGuard('facebook'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async facebookAuth() {}

  @Get('auth/facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req) {
    // const user = await this.userMapper.execute(req.user)
    // await this.userCreateRepository.execute(user)
    return req.user
  }
}
