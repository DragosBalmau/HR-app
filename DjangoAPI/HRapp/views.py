from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse


from HRapp.models import Team, Employee, Role
from HRapp.serializers import TeamSerializer, RoleSerializer, EmployeeSerializer

# Create your views here.

@csrf_exempt
def teamApi(request, id=0):
    if request.method=='GET':
        teams = Team.objects.all()
        teams_serializer = TeamSerializer(teams, many=True)
        return JsonResponse(teams_serializer.data, safe=False)

    elif request.method=='POST':
        team_data=JSONParser().parse(request)
        team_serializer = TeamSerializer(data=team_data)
        if team_serializer.is_valid():
            team_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        team_data = JSONParser().parse(request)
        team = Team.objects.get(Id=team_data['Id'])
        team_serializer = TeamSerializer(team, data=team_data)
        if team_serializer.is_valid():
            team_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        team = Team.objects.get(Id=id)
        team.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def roleApi(request, id=0):
    if request.method=='GET':
        roles = Role.objects.all()
        roles_serializer = RoleSerializer(roles, many=True)
        return JsonResponse(roles_serializer.data, safe=False)

    elif request.method=='POST':
        role_data = JSONParser().parse(request)
        role_serializer = RoleSerializer(data=role_data)
        if role_serializer.is_valid():
            role_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        role_data = JSONParser().parse(request)
        role = Role.objects.get(Id=role_data['Id'])
        role_serializer = RoleSerializer(role, data=role_data)
        if role_serializer.is_valid():
            role_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        role = Role.objects.get(Id=id)
        role.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def employeeApi(request, id=0):
    if request.method=='GET':
        employees = Employee.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)

    elif request.method=='POST':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        employee_data = JSONParser().parse(request)
        employee = Employee.objects.get(Id=employee_data['Id'])
        employee_serializer = EmployeeSerializer(employee, data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        employee = Employee.objects.get(Id=id)
        employee.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
