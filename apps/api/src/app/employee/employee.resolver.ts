import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { EmployeeService } from './employee.service';
import Employee from './employee.model';

@Resolver(() => Employee)
export default class EmployeeResolver {
  constructor (
    @Inject(EmployeeService) private employeeService: EmployeeService
  ) {}

  @Query(() => [Employee])
  public getEmployees(
    @Args('name') name: string,
    @Args('sortKey') sortKey: string,
    @Args('sortDirection') sortDirection: string,
    @Args('dataType') dataType: string
  ): Employee[] {
    return this.employeeService.getEmployees(name, sortKey, sortDirection, dataType);
  }

  @Mutation(() => [Employee])
  public removeEmployee(@Args('id') id: string): Employee[] {
    return this.employeeService.remove(id);
  }
}
