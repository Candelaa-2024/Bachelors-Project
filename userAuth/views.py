from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import User

# Create your views here.
@api_view(["POST"])
def register(request):
    
    pass