import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserCreateRepository } from 'src/module/user/repository/create.repository'
import { UserMapper } from 'src/module/user/service/mapper'

@Controller()
export class UserInstagramController {
  constructor(private readonly userCreateRepository: UserCreateRepository, private readonly userMapper: UserMapper) {}

  @Get('auth/instagram')
  @UseGuards(AuthGuard('instagram'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async instagramAuth() {}

  @Get('auth/instagram/callback')
  @UseGuards(AuthGuard('instagram'))
  async instagramAuthRedirect(@Req() req) {
    const user = await this.userMapper.execute(req.user)
    await this.userCreateRepository.execute(user)
    return user
  }
}
