from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from validate_email_address import validate_email

# Create your views here.
@api_view(["POST"])
def register(request):
    first_name = request.data.get('first_name', "").strip()
    last_name = request.data.get('last_name', "").strip()
    email = request.data.get('email', "").strip()
    username = request.data.get('username', "").strip()
    password = request.data.get('password')
    confirm_password = request.data.get('confirm_password')

    if not all([first_name, last_name, email, username, password, confirm_password]):
        return JsonResponse({'msg': 'All fields are required.'}, status=400)

    if not validate_email(email):
        return JsonResponse({'msg': 'Invalid Email'}, status=400)

    if password != confirm_password:
        return JsonResponse({'msg': 'Passwords do not match.'}, status=400)

    if User.objects.filter(email=email).exists():
        return JsonResponse({'msg': 'Email already exists.'}, status=400)

    if User.objects.filter(username=username).exists():
        return JsonResponse({'msg': 'Username already exists.'}, status=400)

    user = User(
        first_name=first_name.lower(),
        last_name=last_name.lower(),
        email=email.lower(),
        username=username.lower(),
    )
    user.set_password(password)
    user.save()
    refresh = RefreshToken.for_user(user)

    return JsonResponse({
        'access': str(refresh), 
        'refresh': str(refresh.access_token)
    })


@permission_classes([IsAuthenticated])
def token_validate(request):
    return JsonResponse({'msg': 'valid token'})