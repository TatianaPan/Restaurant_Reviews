#!/bin/bash
rm -rf /luna-build/*
cp -r /luna/build/* /luna-build


python manage.py migrate
python manage.py collectstatic --noinput

exec /opt/conda/envs/luna/bin/gunicorn -w 4 -b 0.0.0.0:8000 app.wsgi:application