FROM python:3.10.8

ENV PYTHONUNBUFFERED=1
WORKDIR /app/backend

COPY backend/requirements.txt requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt