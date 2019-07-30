from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import contract.routing

application = ProtocolTypeRouter({
    # Empty for now (http->django views is added by default)

    'websocket': AuthMiddlewareStack(
        URLRouter(
            contract.routing.websocket_urlpatterns
        )
    ),
})