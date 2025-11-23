from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
import mydesign.views


urlpatterns = [
    path('index/', mydesign.views.index, name = "index")

]