"""CreateTodo Migration."""

from masoniteorm.migrations import Migration


class CreateTodo(Migration):
    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create("todos") as table:
            table.increments("id").primary()
            table.string("message")
            table.boolean("complete").default(False)

            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop("todos")
