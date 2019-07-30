from django.conf.urls import url

from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="index.html"), name='index'),
    url(r'^(?P<room_name>[^/]+)/$', TemplateView.as_view(template_name="room.html"), name='room'),
]