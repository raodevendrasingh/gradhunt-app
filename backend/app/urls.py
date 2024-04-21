from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
    path('api/', HomeView.as_view(), name='home'),
    path('api/managers/', CreateManagerView.as_view(), name='create_manager'),
    path('api/check-username/', CheckUsernameView.as_view(), name='check-username'),
    path('api/check-email/', CheckEmailView.as_view(), name='check-email'),
    path('api/managers/list/', ListManagersView.as_view(), name='list-managers'),
    path('api/managers/<int:id>/', GetManagerView.as_view(), name='get-manager'),
]