from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from .models import Expense, Category

from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import ExpensesSerialezer, CategorySerialezer


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def exp(request):
    exp = Expense.objects.all()
    return render(request, 'index.html', {'exp': exp})

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpensesSerialezer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerialezer
