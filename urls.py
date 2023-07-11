from django.urls import path
from .views import index,administracion,man_bodega 
from .views import boleta,carrito,ficha,ingresar
from .views import miscompras,misdatos,nosotros,man_productos
from .views import registro,usuarios,ventas,ropa, poblar
from .views import cambiar_estado_boleta, eliminar_producto_en_carrito, agregar_producto_al_carrito
from .views import obtener_productos, eliminar_producto_en_bodega, salir,obtener_html_precios_producto
from django.views.generic.base import TemplateView
from django.contrib.auth import views as auth_views
from django.urls import path
from .views import  obtener_info_producto,calcular_precios_producto
urlpatterns = [
    path('', index, name="index"),
    path('administracion', administracion, name="administracion"),
    path('man_bodega', man_bodega, name="man_bodega"),
    path('boleta/<nro_boleta>', boleta, name="boleta"),
    path('carrito', carrito, name="carrito"),
    path('ficha/<producto_id>', ficha, name="ficha"),
    path('ingresar', ingresar, name="ingresar"),
    path('miscompras', miscompras, name="miscompras"),
    path('misdatos', misdatos, name="misdatos"),
    path('nosotros', nosotros, name="nosotros"),
    path('man_productos/<accion>/<id>', man_productos, name="man_productos"),
    path('registro', registro, name="registro"),
    path('ropa', ropa, name="ropa"),
    path('usuarios', usuarios, name="usuarios"),
    path('ventas', ventas, name="ventas"),
    path('obtener_productos', obtener_productos, name='obtener_productos'),
    path('eliminar_producto_en_bodega/<bodega_id>', eliminar_producto_en_bodega, name='eliminar_producto_en_bodega'),
    path('cambiar_estado_boleta/<nro_boleta>/<estado>', cambiar_estado_boleta, name='cambiar_estado_boleta'),
    path('salir', salir, name='salir'),
    path('eliminar_producto_en_carrito/<carrito_id>', eliminar_producto_en_carrito, name='eliminar_producto_en_carrito'),
    path('agregar_producto_al_carrito/<producto_id>', agregar_producto_al_carrito, name='agregar_producto_al_carrito'),
    path('poblar', poblar, name='poblar'),
]
