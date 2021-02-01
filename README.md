

# MidnightDinner

About additional features:

* Edit employee: After clicking the edit icon, a modal form should be displayed with the fields to be modified by the usr. After submitting the new values,
the table should be updated.
    - This process would require a new mutation for the info to be modified in the DB.
    - In the employeeService, after mutating the info, employees should be refetched.
* View employee: After clicking the view icon, a modal should be displayed with the employee details.
    - Use the values already loaded in the component would be enough.

What can be done better:

* Use a database for data persistence - Integrate Prisma as ORM to connect to the DB would be an example.
* Implement `Context` as the single source of truth in the frontEnd in order to access the current state of the app.
* Use more query oriented gql's, like this for example: `todos(where: { is_public: { _eq: false} }, order_by: { created_at: desc }) {`
* Avoid rerendering the row titles. Implement a loading only for the rows (right now it is implemented for row titles as well)
