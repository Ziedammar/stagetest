import { Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { debug } from 'console';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/stage/dto/createtodo.dto';
import { stage } from 'src/stage/interfaces/stage.interface';
import { IStage } from './interfaces/Istage.service';



@Injectable()
export class StageService implements IStage {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel('Stage') private readonly userModel: Model<stage>) {
    
  }
  async finAll(): Promise<stage[]> {
    return await this.userModel.find().exec();
  }
  async findById(Id: number): Promise<stage> {
    return await this.userModel.findById(Id).exec();
  }
  async create(patient: CreateUserDto) {
    const createUser = new this.userModel(CreateUserDto);
    return await createUser.save();
  }
  async update(Id: number, newValue: CreateUserDto) {
    const User = await this.userModel.findById(Id).exec();
    if(!User._id){
      debug('user no ')
    }
    await this.userModel.findByIdAndUpdate(Id,newValue).exec();
    return await this.userModel.findById(Id).exec();

  }
  delete(Id: number): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
 