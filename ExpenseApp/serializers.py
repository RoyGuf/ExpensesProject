from rest_framework import serializers
#from .models import Expense, Category


class ExpensesSerialezer(serializers.ModelSerializer):
    
    class Meta:
        #model = Expense
        fields = "__all__"

class CategorySerialezer(serializers.ModelSerializer):
    
    class Meta:
        #model = Select
        fields = "__all__"

    '''def create(self, validated_data):
        exps_data = validated_data.pop('expense')
        category = Category.objects.create(**validated_data)
        for exp_data in exps_data:
            Expense.objects.create( **exp_data)
        return category'''