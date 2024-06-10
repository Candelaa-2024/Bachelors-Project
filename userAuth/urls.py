from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "user_authentication"

urlpatterns = [
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/refresh/", TokenObtainPairView.as_view(), name="token_refresh"),
    path("register/", views.register, name="register_user"),
]