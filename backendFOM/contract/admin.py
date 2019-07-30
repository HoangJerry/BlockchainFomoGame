from django.contrib import admin
from .models import EndRoundDividend
# Register your models here.
class EndRoundDividendAdmin(admin.ModelAdmin):
    # def has_add_permission(self, request, obj=None):
    #     return False

    list_display = ('creation_date','tx_hash')
    pass
admin.site.register(EndRoundDividend, EndRoundDividendAdmin)
