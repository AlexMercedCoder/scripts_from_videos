"""TodoTableSeeder Seeder."""

from masoniteorm.seeds import Seeder
from app.models.Todo import Todo


class TodoTableSeeder(Seeder):
    def run(self):
        Todo.bulk_create([
            {"message": "Eat Breakfast", "other_field": "yay"},
            {"message": "Eat Lunch", "other_field": "yay"},
            {"message": "Eat Dinner", "other_field": "yay"},
        ])
