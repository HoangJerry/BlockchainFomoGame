from django.db import models

# Create your models here.
class EndRoundDividend(models.Model):
	tx_hash = models.CharField(max_length=255, null=True, blank=True)
	creation_date= models.DateTimeField(auto_now_add=True)
