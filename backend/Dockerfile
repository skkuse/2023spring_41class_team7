FROM python:3.10.8

ENV PYTHONUNBUFFERED=1
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_USER=postgres
ENV POSTGRES_DB=postgres

WORKDIR /app/backend

COPY backend/requirements.txt requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt