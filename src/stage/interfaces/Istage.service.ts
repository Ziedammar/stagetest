import { CreateUserDto } from '../dto/createtodo.dto';
import { stage } from './stage.interface'
export interface IStage   {
    finAll():Promise<stage[]>;
    findById(Id:number):Promise<stage|null>;
    create(patient: CreateUserDto);
    update(Id:number,newValue: CreateUserDto);
    delete(Id:number):Promise<string>;
  
}