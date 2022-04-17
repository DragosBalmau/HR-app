from django.urls import re_path
from HRapp import views

urlpatterns = [
    re_path(r'^team$', views.teamApi),
    re_path(r'^team/([0-9]+)$', views.teamApi),

    re_path(r'^role$', views.roleApi),
    re_path(r'^role/([0-9]+)$', views.roleApi),

    re_path(r'^employee$', views.employeeApi),
    re_path(r'^employee/([0-9]+)$', views.employeeApi),
]