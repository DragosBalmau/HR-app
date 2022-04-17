from django.db import models
import datetime

# Create your models here.

class Role(models.Model):
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    DateOfCreation = models.DateField("Date", default=datetime.date.today)

class Team(models.Model):
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)

class Employee(models.Model):
    Id = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=25)
    LastName = models.CharField(max_length=25)
    DateOfBirthday = models.DateField("Date", default=datetime.date.today)
    Email = models.CharField(max_length=30)
    Role = models.ForeignKey(Role, on_delete=models.CASCADE)
    Team = models.ForeignKey(Team, on_delete=models.CASCADE)
    Manager = models.CharField(max_length=30, null=True)



