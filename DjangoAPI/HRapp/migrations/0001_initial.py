# Generated by Django 4.0.4 on 2022-04-16 23:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Role',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=100)),
                ('DateOfCreation', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('FirstName', models.CharField(max_length=25)),
                ('LastName', models.CharField(max_length=25)),
                ('DateOfBirthday', models.DateField()),
                ('Email', models.CharField(max_length=30)),
                ('Manager', models.CharField(max_length=30)),
                ('Role', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HRapp.role')),
                ('Team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HRapp.team')),
            ],
        ),
    ]