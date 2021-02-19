import {
  Controller,
  Get,
  Response,
  HttpStatus,
  Param,
  Body,
  Post,
  Request,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from 'src/stage/dto/createtodo.dto';
import { StageService } from './stage.service';

@Controller('bbb')
export class StageController {

  constructor(private readonly usersService: StageService) {}


@Get("")
public async getTech(@Response() res) {
  const config = await this.usersService.finAll();
  return res.status(HttpStatus.OK).json(config);   
}

@Post()
public async createConfig(@Response() res,@Body() createUserDTO: CreateUserDto) {
  console.log("config");
  const config = await this.usersService.create(createUserDTO);
 
  return res.status(HttpStatus.OK).json(config);
}

@Patch('/:id')
public async updateConfig(@Param() param, @Response() res, @Body() body) {
  const config = await this.usersService.update(param.id, body);
  return res.status(HttpStatus.OK).json(config);
}

@Delete('/:id')
public async deleteConfig(@Param() param, @Response() res) {
  const config = await this.usersService.delete(param.id);
  return res.status(HttpStatus.OK).json(config);
}















}



