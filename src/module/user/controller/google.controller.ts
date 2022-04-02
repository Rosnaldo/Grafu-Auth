import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserCreateRepository } from 'src/module/user/repository/create.repository'
import { UserMapper } from 'src/module/user/service/mapper'

@Controller()
export class UserGoogleController {
  constructor(private readonly userCreateRepository: UserCreateRepository, private readonly userMapper: UserMapper) {}

  @Get('auth/google')
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth() {}

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    const user = await this.userMapper.execute(req.user)
    await this.userCreateRepository.execute(user)
    return user
  }
}
