# club/urls.py
from django.urls import path
from .views import ClubList

urlpatterns = [
    path('api/clubs/', ClubList.as_view(), name='club-list'),
]
