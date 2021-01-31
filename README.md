

# MidnightDinner

What can be done better:

* Use a database for data persistence - Integrate Prisma as ORM to connect to the DB would be an example.
* Implement `Context` as the single source of truth in the frontEnd in order to access the current state of the app.
* Use more query oriented gql's, like this for example: `todos(where: { is_public: { _eq: false} }, order_by: { created_at: desc }) {`