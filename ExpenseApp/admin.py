from django.contrib import admin
from .models import *



class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('title','date', 'description', 'price')
    list_filter = ('date', 'category',)
    date_hierarchy = 'date'
    ordering = ('-date',)
    filter_horizontal = ('category',)

admin.site.register(Expense, ExpenseAdmin)
admin.site.register(Category)

# Register your models here.
