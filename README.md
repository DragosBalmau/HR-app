# HR-app 

This a demo HR web app made with Django REST Framework (backend) and ReactJs (frontend) and for the database side I used SQLite. 

The workflow can be found here:

![image](https://user-images.githubusercontent.com/30263894/163718612-7e7cf1eb-fcf5-4ea5-a024-3830d16aab54.png)


## How to run the app

For React:
```
cd HR-app/React/hr-app/
npm install

//to start the frontend
npm start
```

For Django:
```
//install dependencies
cd HR-app/
python -m venv env
env/Scripts/activate
pip install django
pip install django-cors-headers
pip install djangorestframework

python manage.py makemigrations HRapp
python manage.py migrate HRapp

//to start the backend
python manage.py runserver
```

