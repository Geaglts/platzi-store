import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseParamPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const hasSpaces = RegExp(/\s/g).test(value);
    if (hasSpaces) throw new BadRequestException('please check your param');
    return value;
  }
}
