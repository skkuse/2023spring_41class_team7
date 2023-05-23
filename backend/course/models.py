from django.db import models

# Create your models here.

class Course(models.Model):
    title = models.CharField(max_length=100)
    mascot = models.ImageField(upload_to='mascot', default='mascot/default_image.jpeg')
    thumbnail = models.ImageField(upload_to='thumbnail', default='thumbnail/default_thumbnail.jpeg')
    # author = models.ForeignKey(User, on_delete=models.CASCADE)
    # tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    learner_count = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
