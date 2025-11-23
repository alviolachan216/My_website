from django.contrib import admin
from django.urls import path, include

from mydesign.urls import urlpatterns

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("mydesign.urls"))
]