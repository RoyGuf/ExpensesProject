from django.db import models
from django.utils import timezone

class Expense(models.Model):
    title = models.CharField(max_length=32, default='')
    date = models.DateField(verbose_name='date', default=timezone.now)
    description = models.CharField(max_length=128, default='')
    comment = models.CharField(max_length=128, default='')
    price = models.IntegerField(default=0, verbose_name='Sum')
    category = models.ManyToManyField(
        'Category',
        related_name='expenses',
        related_query_name='expenses'
    )
    
    def __str__(self):
        return self.title
 

class Category(models.Model):
    name = models.CharField(max_length=32, default='Other', unique=True, null=True,verbose_name='type',blank=True)
   
    def __str__(self):
        return self.name