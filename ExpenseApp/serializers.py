from rest_framework import serializers
from .models import Expense, Category


class CategorySerialezer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = "__all__"

class ExpensesSerialezer(serializers.ModelSerializer):
    
    class Meta:
        model = Expense
        fields =  "__all__"

