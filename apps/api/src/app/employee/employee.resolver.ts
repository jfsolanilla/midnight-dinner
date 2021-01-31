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
  public getEmployees(): Employee[] {
    return this.employeeService.get();
  }

  @Query(() => [Employee])
  public getEmployeesByName(@Args('name') name: string): Employee[] {
    return this.employeeService.getByName(name);
  }

  @Query(() => [Employee])
  public sortEmployees(
    @Args('sortKey') sortKey: string,
    @Args('sortDirection') sortDirection: string,
    @Args('dataType') dataType: string
  ): Employee[] {
    return this.employeeService.sortEmployees(
      sortKey,
      sortDirection,
      dataType
    );
  }

  @Mutation(() => [Employee])
  public removeEmployee(@Args('id') id: string): Employee[] {
    return this.employeeService.remove(id);
  }
}
