# Generated by Django 2.0.4 on 2018-04-15 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ExpenseApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='expenses',
            field=models.ManyToManyField(related_name='category', related_query_name='category', to='ExpenseApp.Expense'),
        ),
    ]
