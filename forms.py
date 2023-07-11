from django import forms
from django.forms import ModelForm, fields, Form
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Categoria, Producto, Bodega, Perfil

form_hidden = {'class': 'd-none'}
form_select = {'class': 'form-select'}
form_control = {'class': 'form-control'}
form_text_area = {'class': 'form-control', 'rows': '3'}
form_file = {'class': 'form-control-file', 'title': 'Debe subir una imagen'}
form_check = {'class': 'form-check-input'}
form_password = {'class': 'form-control text-danger', 'value': '123'}

class ProductoForm(ModelForm):

    class Meta:
        model = Producto
        fields = '__all__'

        widgets = {
            'categoria': forms.Select(attrs=form_select),
            'nombre': forms.TextInput(attrs=form_control),
            'descripcion': forms.Textarea(attrs=form_text_area),
            'precio': forms.NumberInput(attrs=form_control),
            'descuento_subscriptor': forms.NumberInput(attrs=form_control),
            'descuento_oferta': forms.NumberInput(attrs=form_control),
            'imagen': forms.FileInput(attrs=form_file),
        }


class BodegaForm(forms.Form):

    categoria = forms.ModelChoiceField(queryset=Categoria.objects.all(), empty_label='Seleccione una categoría', 
                                       widget=forms.Select(attrs={'class': 'form-select'}))
    producto = forms.ModelChoiceField(queryset=Producto.objects.none(), empty_label='Seleccione un producto', 
                                      widget=forms.Select(attrs={'class': 'form-select'}))
    cantidad = forms.IntegerField(
        widget=forms.NumberInput(attrs=form_control),
        label='Cantidad'
    )

    class Meta:
        fields = '__all__'


class RegistroClienteForm(UserCreationForm):

    rut = forms.CharField(
        max_length=15, 
        required=True, 
        label='RUT',
        widget=forms.TextInput(attrs=form_control),
    )
    direccion = forms.CharField(
        max_length=400, 
        required=True, 
        label='Dirección',
        widget=forms.Textarea(attrs=form_text_area),
    )
    subscrito = forms.BooleanField(
        required=False,
        label='Deseo Suscribirme',
        widget=forms.CheckboxInput(attrs=form_check),
    )
    imagen = forms.CharField(
        required=True,
        label='Imagen',
        widget=forms.FileInput(attrs=form_file),
    )
    
    class Meta:
        model = User
        fields = [
            'username', 
            'first_name', 
            'last_name', 
            'email', 
            'rut', 
            'direccion', 
            'subscrito', 
            'imagen', 
            'password1', 
            'password2'
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update(form_control)
        self.fields['first_name'].widget.attrs.update(form_control)
        self.fields['last_name'].widget.attrs.update(form_control)
        self.fields['email'].widget.attrs.update(form_control)
        self.fields['password1'].widget.attrs.update(form_control)
        self.fields['password2'].widget.attrs.update(form_control)


class IngresarForm(Form):
    username = forms.CharField(widget=forms.TextInput(attrs=form_control), label="Cuenta")
    password = forms.CharField(widget=forms.PasswordInput(attrs=form_control), label="Contraseña")
    class Meta:
        fields = ['username', 'password']

class MisDatosForm(UserCreationForm):

    rut = forms.CharField(
        max_length=15, 
        required=True, 
        label='RUT',
        widget=forms.TextInput(attrs=form_control),
    )
    first_name = forms.CharField(
    max_length=150,
    required=True,
    label='Nombre',
    widget=forms.TextInput(attrs=form_control),
)
    
    last_name = forms.CharField(
    max_length=150,
    required=True,
    label='Apellidos',
    widget=forms.TextInput(attrs=form_control),
)
    direccion = forms.CharField(
        max_length=400, 
        required=True, 
        label='Dirección',
        widget=forms.Textarea(attrs=form_text_area),
    )
    subscrito = forms.BooleanField(
        required=False,
        label='Subscrito',
        widget=forms.CheckboxInput(attrs=form_check),
    )
    imagen = forms.CharField(
        required=True,
        label='Imagen',
        widget=forms.FileInput(attrs=form_file),
    )
    
    class Meta:
        model = User
        fields = [
            'username', 
            'first_name', 
            'last_name', 
            'email', 
            'rut', 
            'direccion', 
            'subscrito', 
            'imagen', 
            'password1', 
            'password2'
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update(form_control)
        self.fields['first_name'].widget.attrs.update(form_control)
        self.fields['last_name'].widget.attrs.update(form_control)
        self.fields['email'].widget.attrs.update(form_control)
        self.fields['password1'].widget.attrs.update(form_control)
        self.fields['password2'].widget.attrs.update(form_control)

class UsuarioForm(forms.Form):
    tipo_usuario = forms.ChoiceField(
        choices=[
            ('Cliente', 'Cliente'),
        ('Administrador', 'Administrador'),
           
        ],
        widget=forms.Select(attrs=form_select),
        label='Tipo de Usuario'
    )
    rut = forms.CharField(
        max_length=15, 
        required=True, 
        label='RUT',
        widget=forms.TextInput(attrs=form_control),
    )
    nombre = forms.CharField(
        max_length=100,
        label='Nombre',
        widget=forms.TextInput(attrs=form_control)
    )
    apellido = forms.CharField(
        max_length=100,
        label='Apellido',
        widget=forms.TextInput(attrs=form_control)
    )
    correo = forms.EmailField(
        label='Correo Electrónico',
        widget=forms.EmailInput(attrs=form_control)
    )
    direccion = forms.CharField(
        label='Dirección',
        widget=forms.Textarea(attrs=form_text_area)
    )
    subscripcion = forms.BooleanField(
        required=False,
        label='Subscripción'
    )
    contraseña = forms.CharField(
        label='Contraseña',
        widget=forms.PasswordInput(attrs=form_control)
    )
    imagen = forms.CharField(
        required=True,
        label='Imagen',
        widget=forms.FileInput(attrs=form_file),
    )