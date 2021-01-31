import { Module } from '@nestjs/common';

import { EmployeeService } from './employee.service';
import EmployeeResolver from './employee.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule {}
