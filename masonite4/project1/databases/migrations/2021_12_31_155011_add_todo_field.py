"""AddTodoField Migration."""

from masoniteorm.migrations import Migration


class AddTodoField(Migration):
    def up(self):
        """
        Run the migrations.
        """
        with self.schema.table("todos") as table:
            table.string("other_field").nullable()

    def down(self):
        """
        Revert the migrations.
        """
        pass
