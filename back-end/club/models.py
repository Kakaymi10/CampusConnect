from django.db import models

class Club(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    email = models.EmailField(blank=True, null=True)
    instagram_link = models.URLField(blank=True, null=True)
    club_image = models.ImageField(upload_to='club_images/', blank=True, null=True)

    def __str__(self):
        return self.name
