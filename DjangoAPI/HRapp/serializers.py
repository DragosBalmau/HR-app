from rest_framework import serializers
from HRapp.models import Team, Role, Employee

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('Id',
                  'Name',
                  'DateOfCreation')

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('Id',
                  'Name')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('Id',
                  'FirstName',
                  'LastName',
                  'DateOfBirthday',
                  'Email',
                  'Role',
                  'Team',
                  'Manager')