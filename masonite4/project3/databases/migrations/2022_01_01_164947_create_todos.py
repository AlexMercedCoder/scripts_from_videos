"""CreateTodos Migration."""

from masoniteorm.migrations import Migration


class CreateTodos(Migration):
    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create("todos") as table:
            table.increments("id")
            table.string("message")

            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop("todos")
