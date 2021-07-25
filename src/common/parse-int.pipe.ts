import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const hasCharacters = RegExp(/\D/).test(value);
    if (hasCharacters) {
      throw new BadRequestException(`${value} is not and integer`);
    }
    return parseInt(value);
  }
}
