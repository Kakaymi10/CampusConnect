from django.shortcuts import render
from rest_framework import generics
from .models import Club
from .serializers import ClubSerializer

class ClubList(generics.ListAPIView):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer
